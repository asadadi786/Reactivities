import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Task } from "../../../app/models/task";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  const mystyle = {
    color: "SlateBlue",
    fontFamily: "Arial",
  };

  return (
    <>
      <Segment>
        <Item.Group divided>
          {tasks.map((tasks) => (
            <Item key={tasks.id}>
              <Item.Group divided>
                <Item.Content>
                  <Item.Header as="a">
                    <Label as="a" color="blue" ribbon content="Task No #" />
                    {tasks.id}
                  </Item.Header>

                  <Item.Meta>
                    <Label>
                      <span style={mystyle}>Our Ref: </span>
                      {tasks.ourRef}
                    </Label>
                  </Item.Meta>

                  <Item.Description>
                    <Label>
                      <span style={mystyle}>Details: </span>
                      <div>{tasks.description}</div>
                    </Label>
                  </Item.Description>
                  <Item.Description>
                    <Label>
                      <span style={mystyle}>Quantity: </span>
                      {tasks.quantity}
                    </Label>
                  </Item.Description>
                  <Item.Description>
                    <Label>
                      <div>
                        <span style={mystyle}>Unit Rate: </span>
                        {tasks.unitRate}
                      </div>
                    </Label>
                  </Item.Description>
                  <Item.Description>
                    <Label>
                      <div>
                        <span style={mystyle}>Total Cost: </span>
                        {tasks.totalCost}
                      </div>
                    </Label>
                  </Item.Description>

                  <Item.Description>
                    <Label>
                      <div>
                        <span style={mystyle}>In Words: </span>
                        {tasks.inWords}
                      </div>
                    </Label>
                  </Item.Description>
                  <Item.Extra>
                    <Button floated="right" content="Delete" color="red" />
                    <Button floated="right" content="View" color="blue" />
                  </Item.Extra>
                </Item.Content>
              </Item.Group>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
