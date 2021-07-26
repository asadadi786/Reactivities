import React from 'react'
import { Table } from 'semantic-ui-react'

const colors = [


    'green',
    'blue',
    'black',
]

const ServicesTable = () => (
    <div>
        {colors.map((color) => (
            <Table Color={color} key={color}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Services</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Automation</Table.Cell>
                        <Table.Cell>Automation Services Details</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Software Services</Table.Cell>
                        <Table.Cell>Software Services Details</Table.Cell>

                    </Table.Row>
                </Table.Body>
            </Table>
        ))}
    </div>
)
export default ServicesTable
