import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const friendSlice = createSlice({
    name : "friend",
    initialState : {name : " ", description : " ", group : " ",},
    reducers : {
        addFriend :(state, action)=> {
            return action.payload
        },
    }
});

export const{addFriend} = friendSlice.actions;
export default friendSlice.reducer;

