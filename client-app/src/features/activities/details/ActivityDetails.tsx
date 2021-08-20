import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />; //returning here only to avoid object(activity) can be undefined,
  //<LoadingComponet/> is doing nothing here,only coz we cant return
  //nothing/null, so we need to return something

  return (
    <>
      <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.category}</span>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group width="2">
            <Button
              onClick={() => openForm(activity.id)}
              basic
              color="blue"
              content="Edit"
            ></Button>
            <Button
              onClick={cancelSelectedActivity}
              basic
              color="grey"
              content="Cancel"
            ></Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}

export default ActivityDetails;
