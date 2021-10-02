import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Task } from '../../../app/models/task';
import TaskList from './TaskList';
import { Header, Segment } from 'semantic-ui-react'

interface Props {
    tasks: Task[];
}

export default function ActivityDashboard({ tasks }: Props) {
    return (
        <Segment>
            <Header as='h3'>Tasks</Header>

            <Grid>
                <Grid.Column width='10'>
                    <TaskList tasks={tasks} />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}