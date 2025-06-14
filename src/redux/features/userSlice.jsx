import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const signupUser = createAsyncThunk(
    "users/signupUser",
    async ({ firstName, lastName, userName, email, password }, thunkAPI) => {
        console.log(firstName, lastName, userName, email, password)
        try {
            const response = await fetch(
                "http://localhost:1337/api/auth/local/register?populate=*",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{ "firstName": "${firstName}", "lastName": "${lastName}", "username": "${userName}", "email": "${email}", "password": "${password}" }`,
                    redirect: 'follow'
                }
            );
            let data = await response.json();
            console.log("data", data);

            if (response.status === 200) {
                localStorage.setItem("jwt_token", data.jwt);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log("Error", e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const  loginUser= createAsyncThunk(
    "users/login",
    async ({ identifier, password }, thunkAPI) => {
        // console.log(identifier, password)
        try {
            const response = await fetch(
                "http://localhost:1337/api/auth/local?populate=*",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{ "identifier": "${identifier}", "password": "${password}" }`,
                }
            );
            let data = await response.json();
            // console.log("response", data);
            // console.log(response.status)
            if (response.status === 200) {
                // console.log("response === 200")
                localStorage.setItem("jwt_token", data.jwt);
                return data;
            } else {
                // console.log("response === error")
                return thunkAPI.rejectWithValue(data);
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
                'http://localhost:1337/api/users/me?populate=*',
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

            if (response.status === 200) {
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


export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        avtar: "",
        jwt: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        // Reducer comes here
        clearState: (state) => {
            state.username = "";
            state.email = "";
            state.firstName = "";
            state.lastName = "";
            state.avtar = "";
            state.jwt = "";
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled,(state, { payload }) =>{
            // console.log('fullfilled', payload)
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.username;
            state.firstName = payload.user.firstName;
            state.lastName = payload.user.lastName;
            state.avtar = payload.user.Photo;
            state.jwt = payload.jwt;
        });

        builder.addCase(signupUser.pending,(state) => {
            state.isFetching = true;
        });
        builder.addCase(signupUser.rejected,(state, { payload }) => {
            // console.log('rejected', payload)
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error.message;
        });
        builder.addCase(loginUser.fulfilled,(state, { payload }) => {
            // console.log('loginData', payload)
            state.email = payload.user.email;
            state.username = payload.user.username;
            state.firstName = payload.user.firstName;
            state.lastName = payload.user.lastName;
            state.avtar = payload.user.Photo;
            state.jwt = payload.jwt;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        });
        builder.addCase(loginUser.rejected,(state, { payload }) => {
            // console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error.message;
        });
        builder.addCase(loginUser.pending,(state) => {
            state.isFetching = true;
        });
        builder.addCase(fetchUserBytoken.pending,(state) => {
            state.isFetching = true;
        });
        builder.addCase(fetchUserBytoken.fulfilled,(state, { payload }) => {
            console.log(payload)
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.username = payload.username;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.avtar = payload.Photo;
            state.jwt = localStorage.getItem('jwt_token');
        });
        builder.addCase(fetchUserBytoken.rejected,(state) => {
            // console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
        });
    },
});


export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer