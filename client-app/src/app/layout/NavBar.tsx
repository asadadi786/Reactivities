/* eslint-disable no-unreachable */
import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Digital Management Solution
                </Menu.Item>
                <Menu.Item name='DMS' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Work Order' />
                </Menu.Item>
                <Menu.Item>
                    <Button  positive content='Forms' />
                </Menu.Item>
            </Container>
        </Menu>

    )
}