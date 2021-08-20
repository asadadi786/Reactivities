import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiiesByDate, loading } = activityStore;

  const [target, setTarget] = useState(""); //it will contain the name of delete button(i.e. clicked)

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <>
      <Segment>
        <Item.Group divided>
          {activitiiesByDate.map((activity) => (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as="a">
                  <Label as="a" color="blue" ribbon content="Our Ref #" />
                  {activity.title}
                </Item.Header>

                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.venue},{activity.city}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => activityStore.selectActivity(activity.id)}
                    floated="right"
                    content="Tasks"
                    color="blue"
                  />

                  <Button
                    onClick={() => activityStore.selectActivity(activity.id)}
                    floated="right"
                    content="View"
                    color="blue"
                  />

                  <Button
                    name={activity.id}
                    loading={loading && target === activity.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    floated="right"
                    content="Delete"
                    color="red"
                  />

                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
});
