import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import { Order } from '../models/order';
import { v4 as uuid } from 'uuid';
//import { MyFileBrowser } from './MyFileBrowser';


function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {

    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {

      setActivities(response.data);

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

    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);

    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)]);
  }

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
        />
      </Container>

      <Container style={{ marginTop: '7em' }}>
        <OrderDashboard orders={orders} />
      </Container>

    </>
  );
}

export default App;
