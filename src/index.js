import store from "./store/store";
import {bugAdded, bugResolved} from "./store/bugs";


store.subscribe(() =>{
    console.log(store.getState());
}) ;
store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugAdded("Bug 2"));

store.dispatch(bugAdded("Bug 3"));

store.dispatch(bugResolved(1));