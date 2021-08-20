import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Order } from "../../../app/models/order";

interface Props {
  orders: Order[];
}

export default function OrderList({ orders }: Props) {
  return (
    <>
      <Segment>
        <Item.Group divided>
          {orders.map((orders) => (
            <Item key={orders.id}>
              <Item.Content>
                <Item.Header as="a">{orders.ourRef}</Item.Header>
                <Item.Meta>{orders.company}</Item.Meta>
                <Item.Description>
                  <div>{orders.description}</div>
                  <div>{orders.equipment}</div>
                  <div>{orders.supervisor}</div>
                  <div>{orders.labor}</div>
                </Item.Description>
                <Item.Extra>
                  <Button floated="right" content="View" color="blue" />
                  <Label basic content={orders.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
