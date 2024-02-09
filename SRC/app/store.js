import { configureStore, } from "@reduxjs/toolkit";
import authReducer from '../features/users/userSlice'
import loginReducer from '../features/register/loginSlice';

export const store=configureStore({
    reducer:{
        register:authReducer,
        login:loginReducer,
       }
})