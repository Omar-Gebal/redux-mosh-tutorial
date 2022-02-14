import store from "./store";
import {bugAdded, bugResolved} from "./actions.js";


store.subscribe(() =>{
    console.log(store.getState());
}) ;
store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugAdded("Bug 2"))

store.dispatch(bugResolved(1));