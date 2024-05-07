import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendSlice";
import groupReducer from "./groupSlice";
import userReducer from "./userSlice";

export const appStore = configureStore({
    reducer : {
        friend : friendReducer,
        group : groupReducer,
        user : userReducer,
    }
});