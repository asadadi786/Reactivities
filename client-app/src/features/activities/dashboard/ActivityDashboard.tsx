import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from "../dashboard/ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "../dashboard/AxtivityFilters";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  //orders domain class

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
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
            <ActivityFilters />
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
});
