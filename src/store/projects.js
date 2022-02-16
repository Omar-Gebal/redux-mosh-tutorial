import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers:{
        projectAdded: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name
            })
        },
    }
})

export const { projectAdded } = slice.actions; 
export default slice.reducer;
