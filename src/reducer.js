import * as actions from "./actionTypes";

let id = 0


export default function reducer(state = [], action) {
    if(action.type === actions.BUG_ADDED) {
        return [...state, {
            id: ++id,
            description: action.payload.description,
            isResolved: false
        }]
    }
    else if(action.type === actions.BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.id)
    }
    else if(action.type === actions.BUG_RESOLVED) {
        return state.map(
            bug => bug.id === action.payload.id ? {...bug, isResolved: true} : bug
        )
    }
        
    return state;
}