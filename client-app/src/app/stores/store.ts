import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
}

export const store: Store = { //store variable is set to an object that has property 'activityStore' that has new instance of ActivityStore
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store); //create react contect and pass our store in it.

export function useStore() {

    return useContext(StoreContext); //useContext hook to use context 'store' in our context(StoreContext) i.e:ActiivityStore instance 

}