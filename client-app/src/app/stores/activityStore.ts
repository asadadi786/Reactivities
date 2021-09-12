import { format } from "date-fns";
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";

export default class ActivityStore {

    //following are observables/properties
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false; ////loading indicator on submit btn click while creating or updataing an acticity
    loadingIntials = false; //loading indicator at ActivityDashboard page load or reload 

    constructor() {
        makeAutoObservable(this)
    }

    get activitiiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            a.date!.getTime() - b.date!.getTime());
    }

    //group activities by date
    get groupedActivities() {
        return Object.entries(
            this.activitiiesByDate.reduce((activities, activity) => {

                const date = format(activity.date!, 'dd MMM yyyy');
                //if activities array  has array with date then add activity(we are looping on) to activities[date](grouped with other activities having same date)
                //else create new array w.r.t to date and add this activity to that array
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
            }, {} as { [key: string]: Activity[] })//passing initial parameter to reduce object 'date as key of type string' and 'array of Activity as value'
        )
    }

    //loading activities 
    loadActivities = async () => {
        this.loadingIntials = true;
        //synchronous code is out of try catch
        try {
            const activities = await agent.Activities.list();
            activities.forEach((activity) => {
                this.setActivity(activity);
            });
            this.setLoadingIntials(false);
        }
        catch (error) {
            console.log(error);
            this.setLoadingIntials(false);
        }
    }

    //load activity will load activity that is clicked "View Button" 
    loadActivity = async (id: string) => {

        //checking if we have clicked activity in memory
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity = activity;
            return activity;
        } else {
            this.loadingIntials = true;
            //else we will fetch clicked Activity from API
            try {

                activity = await agent.Activities.detail(id);
                this.setActivity(activity);
                runInAction(() => {
                    this.selectedActivity = activity;
                })

                this.setLoadingIntials(false);
                return activity;

            } catch (error) {
                console.log(error);
                this.setLoadingIntials(false);
            }
        }
    }

    //get activity from memory
    private getActivity = (id: string) => {
        return this.activityRegistry.get(id);
    }

    //push activity to activityRegistry with splitted date.
    private setActivity = (activity: Activity) => {
        activity.date = new Date(activity.date!);
        //mutating state directly by pushing activity one by one to actvities array, in mobx direct mutation is allowed, in redux objects are immutable 
        this.activityRegistry.set(activity.id, activity);

    }

    //Setting loading indicator
    setLoadingIntials = (state: boolean) => {
        this.loadingIntials = state;
    }


    //createing a new activity and storing in mock DB
    createActivity = async (activity: Activity) => {
        this.loading = true;

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
