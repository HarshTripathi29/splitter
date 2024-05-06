import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const friendSlice = createSlice({
    name : "friend",
    initialState : [
                {
                        name : "harsh", 
                        description : "boss", 
                        group : "founder",
                    },
                    {
                        name : "abc", 
                        description : "xyz", 
                        group : "pqr",
                    },
                    {
                        name : "Modi",
                        description : "friend from india",
                        group : "ally",
                    },
                    {
                        name : "Trump",
                        description : "met in US",
                        group : "ally",
                    },
                    {
                        name : "Putin",
                        description : "god of Russia",
                        group : "ally",
                    },],
    reducers : {
        addFriend :(state, action)=> {
            return action.payload
        },
    }
});

export const{addFriend} = friendSlice.actions;
export default friendSlice.reducer;

