import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import { Order } from '../../../app/models/order';

interface Props {
    orders: Order[];
}

export default function OrderList({ orders }: Props) {
    return (
        <>
            <Segment>
                <Item.Group divided>
                    {orders.map(orders => (
                        <Item key={orders.id}>
                            <Item.Content>
                                <Item.Header as='a'>{orders.ourRef}</Item.Header>
                                <Item.Meta>{orders.company}</Item.Meta>
                                <Item.Description>
                                    <div>{orders.description}</div>
                                    <div>{orders.equipment}</div>
                                    <div>{orders.supervisor}</div>
                                    <div>{orders.labor}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button floated='right' content='View' color='blue' />
                                    <Label basic content={orders.category} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
            <Segment>
                <Table celled>


                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>PO#</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Company</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon>First</Label>
                            </Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>

                </Table>
            </Segment>
        </>
    )
}

