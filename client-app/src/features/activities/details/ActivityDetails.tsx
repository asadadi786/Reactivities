import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity, //alias selectedActivity as activity
    loadActivity,
    loadingIntials,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingIntials || !activity) return <LoadingComponent />; //returning here only to avoid object(activity) can be undefined,
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
              as={Link}
              to={`/manage/${activity.id}`}
              basic
              color="blue"
              content="Edit"
            ></Button>
            <Button
              as={Link}
              to={`/activities`}
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

export default observer(ActivityDetails);
