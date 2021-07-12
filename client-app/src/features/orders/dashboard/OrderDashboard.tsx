import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';
import OrderList from '../dashboard/OrderList';


interface Props {
    orders: Order[];
}

export default function ActivityDashboard({ orders }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <OrderList orders={orders} />
            </Grid.Column>
        </Grid>
    )
}