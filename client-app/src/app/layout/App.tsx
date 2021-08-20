import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import OrderDashboard from "../../features/orders/dashboard/OrderDashboard";
import TaskDashboard from "../../features/tasks/dashboard/TaskDashboard";
import { Order } from "../models/order";
import { Task } from "../models/task";

import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  //orders domain class
  const [orders, setOrders] = useState<Order[]>([]);

  //orders domain class
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    activityStore.loadActivities();

    //Orders Fetch
    axios.get<Order[]>("http://localhost:5000/api/orders").then((response) => {
      //console.log(response);
      setOrders(response.data);
    });
    axios
      .get<Task[]>("http://localhost:5000/api/OrderTasks")
      .then((response) => {
        setTasks(response.data);
      });
  }, [activityStore]);

  if (activityStore.loadingIntials)
    return <LoadingComponent content="Loading App" />;
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "10em" }}>
        <ActivityDashboard />
      </Container>

      <Container style={{ marginTop: "7em" }}>
        <TaskDashboard tasks={tasks} />
      </Container>
      <Container style={{ marginTop: "7em" }}>
        <OrderDashboard orders={orders} />
      </Container>
    </>
  );
}

export default observer(App);
