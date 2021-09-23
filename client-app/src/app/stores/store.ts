import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
}

export const store: Store = { //store variable is set to an object that has property 'activityStore' that has new instance of ActivityStore
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store); //create react contect and pass our store in it.

export function useStore() {

    return useContext(StoreContext); //useContext hook to use context 'store' in our context(StoreContext) i.e:ActiivityStore instance 

}