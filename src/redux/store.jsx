import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'

//slices
import userReducer from './features/userSlice'


const store = configureStore({
        reducer: combineReducers({
            user: userReducer,
        }),
        devTools: composeWithDevTools(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    })

export default store