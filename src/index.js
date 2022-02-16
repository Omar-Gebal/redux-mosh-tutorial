import store from "./store/store";
import {projectAdded} from "./store/projects";
import {bugAdded ,bugAssignedToUser,bugResolved, getUnresolvedBugs, getBugsUser} from "./store/bugs";
import {userAdded} from "./store/user";


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(userAdded({name: "John"}));
store.dispatch(userAdded({name: "Boi"}));
store.dispatch(userAdded({name: "HAHA"}));

store.dispatch(bugAdded({description: "Bug 1"}));
store.dispatch(bugAdded({description: "Bug 2"}));
store.dispatch(bugAdded({description: "Bug 3"}));

store.dispatch(bugAssignedToUser({
    bugId: 1,
    userId: 2,
}))

console.log(getBugsUser(2)(store.getState()));
unsubscribe();