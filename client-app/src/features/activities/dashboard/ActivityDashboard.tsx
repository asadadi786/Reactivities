import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from "../dashboard/ActivityList";
import { Task } from "../../../app/models/task";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import TaskDashboard from "../../tasks/dashboard/TaskDashboard";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  //orders domain class
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();

    axios
      .get<Task[]>("http://localhost:5000/api/OrderTasks")
      .then((response) => {
        setTasks(response.data);
      });
  }, [activityRegistry, loadActivities]);

  if (activityStore.loadingIntials)
    return <LoadingComponent content="Loading App" />;

  return (
    <>
      <Segment>
        <Header as="h3">WorkOrder</Header>

        <Grid>
          <Grid.Column width="10">
            <ActivityList />
          </Grid.Column>

          <Grid.Column width="6">
            <h2>Activity Filter</h2>
          </Grid.Column>
        </Grid>
      </Segment>

      <Container style={{ marginTop: "7em" }}>
        <TaskDashboard tasks={tasks} />
      </Container>
    </>
  );
});
