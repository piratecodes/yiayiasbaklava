import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Helper function to set cookies with proper expiry
function setCookie(name, value, expiresDate) {
  if (typeof document !== 'undefined') {
    let expires = "";
    if (expiresDate) {
      // Convert string date to Date object if needed
      const expDate = typeof expiresDate === 'string' ? new Date(expiresDate) : expiresDate;
      expires = `;expires=${expDate.toUTCString()}`;
    } else {
      // Default to 7 days if no expiry provided
      const defaultExpiry = new Date();
      defaultExpiry.setTime(defaultExpiry.getTime() + (7 * 24 * 60 * 60 * 1000));
      expires = `;expires=${defaultExpiry.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires};path=/;secure;samesite=strict`;
  }
}

// Helper function to get cookies
function getCookie(name) {
  if (typeof document !== 'undefined') {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Helper function to remove cookies
function removeCookie(name) {
  if (typeof document !== 'undefined') {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
}


// Initialize user from cookies on app start
export const initializeUserFromCookies = createAsyncThunk(
    'users/initializeUserFromCookies',
    async (_, thunkAPI) => {
        try {
            const token = getCookie('jwt_token');
            const refreshToken = getCookie('refresh_token');
            
            if (token && refreshToken) {
                // Dispatch fetchUserBytoken to get user data
                const result = await thunkAPI.dispatch(fetchUserBytoken({ token }));
                if (result.type === 'users/fetchUserByToken/fulfilled') {
                    return result.payload;
                } else {
                    // Token invalid, clear cookies
                    removeCookie('jwt_token');
                    removeCookie('refresh_token');
                    return null;
                }
            }
            return null;
        } catch (error) {
            removeCookie('jwt_token');
            removeCookie('refresh_token');
            return null;
        }
    }
);



export const signupUser = createAsyncThunk(
    "users/signupUser",
    async ({ name, phone, email, password, confirmPassword }, thunkAPI) => {
        console.log("signupbefore in redux", name, phone, email, password, confirmPassword)
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{ "name": "${name}", "email": "${email}", "phone": "${phone}", "password": "${password}", "confirm_password": "${confirmPassword}" }`,
                    redirect: 'follow'
                }
            );
            let data = await response.json();
            console.log("data", data);

            if (response.status === 201) {
                if (typeof window !== 'undefined') {
                    // localStorage.setItem("jwt_token", data.tokens.access.token);
                    // localStorage.setItem("refresh_token", data.tokens.refresh.token);
                }
                
                setCookie("jwt_token", data.tokens.access.token, data.tokens.access.expires); // 15 minutes
                setCookie("refresh_token", data.tokens.refresh.token, data.tokens.refresh.expires); // 7 days
                return data;
            } else {
                return thunkAPI.rejectWithValue(data || "Signup failed");
            }
        } catch (e) {
            console.log("Error", e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const  loginUser= createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
        // console.log(email, password)
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{ "email": "${email}", "password": "${password}" }`,
                }
            );
            let data = await response.json();
            // console.log("response", data);
            // console.log(response.status)
            if (response.status === 200) {
                // console.log("response === 200")
                if (typeof window !== 'undefined') {
                    // localStorage.setItem("jwt_token", data.tokens.access.token);
                    // localStorage.setItem("refresh_token", data.tokens.refresh.token);
                }
                
                setCookie("jwt_token", data.tokens.access.token, data.tokens.access.expires); // 15 minutes
                setCookie("refresh_token", data.tokens.refresh.token, data.tokens.refresh.expires); // 7 days
                return data;
            } else {
                // console.log("response === error")
                return thunkAPI.rejectWithValue(data.message);
            }
        } catch (e) {
            console.log("Error", e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/fetch-profile`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            let data = await response.json();
            // console.log('data', data, response.status);

            if (response.status === 201) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const updateProfile = createAsyncThunk(
    'users/updateProfile',
    async({name, email, phone},thunkAPI) =>{
        const token = getCookie("jwt_token");
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile-update`, {
                method: "PUT",
                headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                },
                body: `{ "name": "${name}", "email": "${email}", "phone": "${phone}" }`,
            })
            const data = await response.json();
            if (response.status === 201) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


export const logoutUser = createAsyncThunk(
    'users/logout',
    async (_, thunkAPI) => {
        try {
            // Clear localStorage
            // if (typeof window !== 'undefined') {
            //     localStorage.removeItem("jwt_token");
            //     localStorage.removeItem("refresh_token");
            // }

            const token = getCookie("jwt_token");
            const refresh = getCookie("refresh_token");
            if (token) {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: `{ "refresh_token": "${refresh}" }`,
                });
            }
            
            // Clear cookies
            removeCookie("jwt_token");
            removeCookie("refresh_token");
            
            return true;
        } catch (e) {
            console.log('Logout error:', e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        phone:null,
        name: "",
        avtar: "",
        verification: null,
        jwt: "",
        jwt_exp:"",
        refresh: "",
        refresh_exp:"",
        isFetching: false,
        isSuccess: false,
        isUpdateSuccess: false,
        isError: false,
        errorMessage: "",
        isAuthenticated: false,
        isInitialized: false,
    },
    reducers: {
        // Reducer comes here
        clearState: (state) => {
            state.email = "";
            state.phone = null;
            state.name = "";
            state.avtar = "";
            state.jwt = "";
            state.jwt_exp = "",
            state.verification = null;
            state.refresh = "";
            state.refresh_exp = "" ;
            state.isError = false;
            state.isSuccess = false;
            state.isUpdateSuccess = false;
            state.isFetching = false;
            state.isAuthenticated = false;
            state.isInitialized = true;
            return state;
        },
        setInitialized: (state, action) => {
            state.isInitialized = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled,(state, { payload }) =>{
            console.log('fullfilled', payload)
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuthenticated = true;
            state.isInitialized = true;
            state.email = payload.data.email;
            state.phone = payload.data.phone;
            state.name = payload.data.name;
            state.verification = payload.data.email_verification_status;
            state.jwt = payload.tokens.access.token;
            state.jwt_exp = payload.tokens.access.expires;
            state.refresh = payload.tokens.refresh.token;
            state.refresh_exp = payload.tokens.refresh.expires;
        });

        builder.addCase(signupUser.pending,(state) => {
            state.isFetching = true;
            state.isError = false;
            state.errorMessage = "";
        });
        builder.addCase(signupUser.rejected,(state, { payload }) => {
            // console.log('rejected', payload)
            state.isFetching = false;
            state.isError = true;
            state.isInitialized = true;
            state.isAuthenticated = false;
            state.errorMessage = payload?.message || payload || "Signup failed";
        });
        builder.addCase(loginUser.fulfilled,(state, { payload }) => {
            console.log('loginData', payload)
            state.email = payload.data.email;
            state.phone = payload.data.phone;
            state.name = payload.data.name;
            state.avtar = payload.data.photo?.url || "";
            state.verification = payload.data.email_verification_status;
            state.jwt = payload.tokens.access.token;
            state.jwt_exp = payload.tokens.access.expires;
            state.refresh = payload.tokens.refresh.token;
            state.refresh_exp = payload.tokens.refresh.expires;
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
            state.isAuthenticated = true;
            state.isInitialized = true;
            return state;
        });
        builder.addCase(loginUser.rejected,(state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.isInitialized = true;
            state.isAuthenticated = false;
            state.errorMessage = payload || "Login failed";
        });
        builder.addCase(loginUser.pending,(state) => {
            state.isFetching = true;
            state.isError = false;
            state.errorMessage = "";
        });
        builder.addCase(fetchUserBytoken.pending,(state) => {
            state.isFetching = true;
        });
        builder.addCase(fetchUserBytoken.fulfilled,(state, { payload }) => {
            // console.log(payload)
            state.isFetching = false;
            state.isSuccess = true;
            state.isAuthenticated = true;
            state.isInitialized = true;
            state.email = payload.data.email;
            state.phone = payload.data.phone;
            state.name = payload.data.name;
            state.avtar = payload.data.photo?.url;
            state.verification = payload.data.email_verification_status;
            state.jwt = getCookie('jwt_token') || "";
            state.refresh = getCookie('refresh_token') || "";
            state.isError = false;
            state.errorMessage = "";
        });
        builder.addCase(fetchUserBytoken.rejected,(state) => {
            // console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
            state.isAuthenticated = false;
            state.isInitialized = true;
            state.errorMessage = payload || "Failed to fetch user";
            // Clear invalid tokens
            removeCookie('jwt_token');
            removeCookie('refresh_token');
        });

        //Update Profile
        builder.addCase(updateProfile.pending,(state) => {
            state.isFetching = true;
            state.isUpdateSuccess = false; // Add this line
        });
        builder.addCase(updateProfile.fulfilled,(state, { payload }) => {
            // console.log(payload)
            state.isFetching = false;
            state.isUpdateSuccess = true || true;
            state.isAuthenticated = true;
            state.isInitialized = true;
            state.email = payload.data.email;
            state.phone = payload.data.phone;
            state.name = payload.data.name;
            state.avtar = payload.data.photo?.url;
            state.verification = payload.data.email_verification_status;
            state.jwt = getCookie('refresh_token') || "";
            state.refresh = getCookie('refresh_token') || "";
            state.isError = false;
            state.errorMessage = payload.message || "";
        });
        builder.addCase(updateProfile.rejected,(state, {payload}) => {
            // console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
            state.isAuthenticated = false;
            state.isInitialized = true;
            state.errorMessage = payload || "Failed to update user";
            // Clear invalid tokens
            removeCookie('jwt_token');
            removeCookie('refresh_token');
        });

        // Logout User
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.email = "";
            state.phone = null;
            state.name = "";
            state.avtar = "";
            state.jwt = "";
            state.jwt_exp = "";
            state.verification = null;
            state.refresh = "";
            state.refresh_exp = "";
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isAuthenticated = false;
            state.isInitialized = true;
            state.errorMessage = "";
        });
        builder.addCase(logoutUser.rejected, (state) => {
            // Even if logout fails, clear the state
            state.email = "";
            state.phone = null;
            state.name = "";
            state.avtar = "";
            state.jwt = "";
            state.jwt_exp = "";
            state.verification = null;
            state.refresh = "";
            state.refresh_exp = "";
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isAuthenticated = false;
            state.isInitialized = true;
            state.errorMessage = "";
        });

        // Initialize from cookies
        builder.addCase(initializeUserFromCookies.pending, (state) => {
            state.isFetching = true;
            state.isInitialized = false;
        });
        builder.addCase(initializeUserFromCookies.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isInitialized = true;
            
            if (payload && payload.data) {
                state.email = payload.data.email || "";
                state.phone = payload.data.phone || null;
                state.name = payload.data.name || "";
                state.avtar = payload.data.photo?.url || "";
                state.verification = payload.data.email_verification_status;
                state.jwt = getCookie('jwt_token') || "";
                state.refresh = getCookie('refresh_token') || "";
                state.isAuthenticated = true;
                state.isSuccess = true;
                state.isError = false;
            } else {
                state.isAuthenticated = false;
            }
        });
        builder.addCase(initializeUserFromCookies.rejected, (state) => {
            state.isFetching = false;
            state.isInitialized = true;
            state.isAuthenticated = false;
        });

    },
});


export const { clearState, setInitialized } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer