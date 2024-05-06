import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name : "group",
    initialState : [
        "Narendra","Donald","Imran"
    ],
    reducers : {
        addGroup : (state,action) =>{
            return action.payload;
        }
    }
});

export const{addGroup} = groupSlice.actions;
export default groupSlice.reducer;