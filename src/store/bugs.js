import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
let id = 0;

const slice = createSlice({
    name: 'bug',
    initialState:[],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: ++id,
                description: action.payload.description,
                isResolved: false,
            })
        },
        bugRemoved: (state, action) => {
            state.filter(bug => bug.id !== action.payload.id)
        },
        bugResolved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id)
            state[index].isResolved = true;   
        },
        bugAssignedToUser: (state, action) => {
            const {bugId, userId} = action.payload;
            const index = state.findIndex(bug => bug.id === bugId);
            state[index].userId = userId;
        }

    }
});

export const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser} = slice.actions;
export default slice.reducer;

//Selector
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.isResolved)
)

export const getBugsUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)