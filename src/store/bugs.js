import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const slice = createSlice({
    name: 'bug',
    initialState:[],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: ++id,
                description: action.payload.description,
                isResolved: false
            })
        },
        bugRemoved: (state, action) => {
            state.filter(bug => bug.id !== action.payload.id)
        },
        bugResolved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id)
            state[index].isResolved = true;   
        }
    }
});

export const {bugAdded, bugRemoved, bugResolved} = slice.actions;
export default slice.reducer;
