import store from "./store/store";
import {projectAdded} from "./store/projects";


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(projectAdded({name: "Project 1"}));


unsubscribe();