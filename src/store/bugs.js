//Action types
const BUG_ADDED = 'BUG_ADDED';
const BUG_REMOVED = 'BUG_REMOVED';
const BUG_RESOLVED = 'BUG_RESOLVED';

// Action creators
export function bugAdded(description) {
    return ({
        type: BUG_ADDED,
        payload: {
            description: description
        }
    })
}

export function bugRemoved(id){
    return ({
        type: BUG_REMOVED,
        payload: {
            id: id
        }
    })
}

export function bugResolved(id) {
    return ({
        type: BUG_RESOLVED,
        payload: {
            id: id
        }
    })
}

//Reducer
let id = 0


export default function reducer(state = [], action) {
    if(action.type === BUG_ADDED) {
        return [...state, {
            id: ++id,
            description: action.payload.description,
            isResolved: false
        }]
    }
    else if(action.type === BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.id)
    }
    else if(action.type === BUG_RESOLVED) {
        return state.map(
            bug => bug.id === action.payload.id ? {...bug, isResolved: true} : bug
        )
    }
        
    return state;
}