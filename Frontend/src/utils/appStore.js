import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendSlice";
import groupReducer from "./groupSlice";

export const appStore = configureStore({
    reducer : {
        friend : friendReducer,
        group : groupReducer,
    }
});