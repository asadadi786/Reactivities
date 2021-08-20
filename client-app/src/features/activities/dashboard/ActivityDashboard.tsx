import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from "../dashboard/ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Segment>
      <Header as="h3">WorkOrder</Header>

      <Grid>
        <Grid.Column width="10">
          <ActivityList />
        </Grid.Column>

        <Grid.Column width="6">
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Grid.Column>
      </Grid>
    </Segment>
  );
});
