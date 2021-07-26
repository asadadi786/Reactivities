import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import { Order } from '../models/order';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';



function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {

    agent.Activities.list().then(response => {
      let activities: Activity[] = [];

      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      })
      setActivities(activities);
      setLoading(false);
    })

    //Orders Fetch
    axios.get<Order[]>('http://localhost:5000/api/orders').then(response => {

      //console.log(response);
      setOrders(response.data);

    })

  }, []);


  //Select Activity function that is passed down to ActivityDashbaord and then to ActivityList
  function handleSelectActivity(id: string) {

    setSelectedActivity(activities.find(x => x.id === id));
  }

  //Cancel Activity function that is passed down to ActivityDashbaord and then to ActivityList
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }


  function handleFormClose() {
    setEditMode(false);
    console.log("edditmode =" + editMode);
  }
  //edit activity 
  function handleFormOpen(id?: string) {

    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }


  function handleCreateOrEditActivity(activity: Activity) {

    setSubmitting(true); //for initiating loading indicators on (edit/create)activity submit
    if (activity.id) { //editing activity

      agent.Activities.update(activity).then(() => {

        setActivities([...activities.filter(x => x.id !== activity.id), activity]) //edit existing activity
        setEditMode(false);
        setSelectedActivity(activity);
        setSubmitting(false);
      })
    } else {//creating new activity

      activity.id = uuid();

      agent.Activities.create(activity).then(() => {
        setActivities([...activities, { ...activity }]); //adding new activity to existing activity array
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })

    }
  }

  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
  }

  if (loading) return <LoadingComponent content='Loading App' />
  return (
    <>
      <NavBar openForm={handleFormOpen} />


      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>

      <Container style={{ marginTop: '7em' }}>

        <OrderDashboard orders={orders} />
      </Container>

    </>
  );
}

export default App;
