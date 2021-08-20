import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";
import { v4 as uuid } from 'uuid';

export default class ActivityStore {

    //following are observables/properties
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false; ////loading indicator on submit btn click while creating or updataing an acticity
    loadingIntials = true; //loading indicator at page load or reload

    constructor() {
        makeAutoObservable(this)
    }

    get activitiiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date));
    }

    //loading activities 
    loadActivities = async () => {
        //synchronous code is out of try catch
        try {

            const activities = await agent.Activities.list();

            activities.forEach((activity) => {
                activity.date = activity.date.split("T")[0];
                //mutating state directly by pushing activity one by one to actvities array, in mobx direct mutation is allowed, in redux objects are immutable 
                this.activityRegistry.set(activity.id, activity);
            });
            this.setLoadingIntials(false);
        }
        catch (error) {
            console.log(error);
            this.setLoadingIntials(false);
        }
    }

    //Setting loading indicator
    setLoadingIntials = (state: boolean) => {
        this.loadingIntials = state;
    }

    //show selected activity data 
    selectActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    }

    //hide selected activity data 
    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    //Open activity details form for editing existing activity or for creating new activity
    openForm = (id?: string) => {
        //if id not null then show selected activity in form otherwise show empty form to create new activity 
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    //close activity details form 
    closeForm = () => {
        this.editMode = false;
    }

    //createing a new activity and storing in mock DB
    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    //deleting the activity
    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                //checking if deleted activity is also selected then cancel it so it would not appear at page rihthand side even after get deleted.
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
                this.loading = false;
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false
            })
        }
    }
}
