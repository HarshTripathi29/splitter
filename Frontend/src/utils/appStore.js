import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendSlice";

export const appStore = configureStore({
    reducer : {
        friend : friendReducer,
    }
});