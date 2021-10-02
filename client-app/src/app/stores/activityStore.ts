import { format } from "date-fns";
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity, ActivityFormValues } from "../models/activity";
import { Profile } from "../models/profile";
import { store } from "./store";

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
        const user = store.userStore.user;
        //if user authenticated means loggedin then 
        //Check if user is in attendees list, then set isGoing to true(some() returns boolean true/false)  
        if (user) {
            activity.isGoing = activity.attendees!
                .some(a => a.username === user.username); //return true if user in attendee list    

            activity.isHost = activity.hostUsername === user.username;
            activity.host = activity.attendees?.find(x => x.username === activity.hostUsername);

            //if logged in user is also host then set isHost = true

            //Set activity Host property to attendee object from each activity


        }

        activity.date = new Date(activity.date!);
        //mutating state directly by pushing activity one by one to actvities array, in mobx direct mutation is allowed, in redux objects are immutable 
        this.activityRegistry.set(activity.id, activity);
    }


    //Setting loading indicator
    setLoadingIntials = (state: boolean) => {
        this.loadingIntials = state;
    }


    //createing a new activity and storing in mock DB
    createActivity = async (activity: ActivityFormValues) => {
        const user = store.userStore.user;
        const attendee = new Profile(user!);
        try {
            await agent.Activities.create(activity);
            const newActivity = new Activity(activity);
            newActivity.hostUsername = user!.username;
            newActivity.attendees = [attendee];
            this.setActivity(newActivity);

            runInAction(() => {

                this.selectedActivity = newActivity;
            })
        } catch (error) {
            console.log(error);
        }
    }


    updateActivity = async (activity: ActivityFormValues) => {
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                if (activity.id) {
                    let updatedActivity = { ...this.getActivity(activity.id), ...activity }
                    this.activityRegistry.set(activity.id, updatedActivity as Activity);
                    this.selectedActivity = updatedActivity as Activity;

                }

            })
        } catch (error) {
            console.log(error);

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

    updateAttendance = async () => {
        const user = store.userStore.user;
        this.loading = true;
        try {
            await agent.Activities.attend(this.selectedActivity!.id);
            runInAction(() => {//Remove the attendee obj, on cancelling their place.
                if (this.selectedActivity?.isGoing) {
                    this.selectedActivity.attendees =
                        this.selectedActivity.attendees?.filter(a => a.username !== user?.username)
                    this.selectedActivity.isGoing = false;
                }
                else {//Add attendee obj if they r joining an activity
                    const attendee = new Profile(user!);
                    this.selectedActivity?.attendees?.push(attendee);
                    this.selectedActivity!.isGoing = true;
                }
                //set activity registry to updated activity
                this.activityRegistry.set(this.selectedActivity!.id, this.selectedActivity!)
            })
        } catch (error) {
            console.log(error);
        }
        finally {
            runInAction(() => this.loading = false);
        }
    }

    cancelActivityToggle = async () => {
        this.loading = true;
        try {
            await agent.Activities.attend(this.selectedActivity!.id);
            runInAction(() => {
                this.selectedActivity!.isCancelled = !this.selectedActivity?.isCancelled;
                this.activityRegistry.set(this.selectedActivity!.id,this.selectedActivity!)
            })
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => this.loading = false);
        }
    }
}
