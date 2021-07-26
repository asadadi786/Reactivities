
import React from 'react'
import {

    Container,
    Header,
    Image,
    Table,
} from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}
const EmployeeTable = () => (
    <>
        <div>
            <h2>Employee List</h2>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Bakhtiar</Table.Cell>
                        <Table.Cell>January 08, 1980</Table.Cell>
                        <Table.Cell>Btw@gmail.com</Table.Cell>
                        <Table.Cell>Director</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Muhammad Asad</Table.Cell>
                        <Table.Cell>October 08, 2013</Table.Cell>
                        <Table.Cell>asadilyas1000@gmail.com</Table.Cell>
                        <Table.Cell>Lead Software Engineer</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Umer</Table.Cell>
                        <Table.Cell>March 19, 2009</Table.Cell>
                        <Table.Cell>umer@gmail.com</Table.Cell>
                        <Table.Cell>Technocal Project Manager</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>

        <div>
            <Header as='h3' content='Employee List' style={style.h3} textAlign='center' />
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee</Table.HeaderCell>
                            <Table.HeaderCell>Designation</Table.HeaderCell>
                            <Table.HeaderCell>E-mail address</Table.HeaderCell>
                            <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                                    <Header.Content>
                                        Muhammad Ali
                                        <Header.Subheader>Engineering</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>Engineering Lead</Table.Cell>
                            <Table.Cell>mali@gmail.com</Table.Cell>
                            <Table.Cell>March 19, 2009</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                                    <Header.Content>
                                        Omer
                                        <Header.Subheader>Human Resources</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>Talent Hunt Officer</Table.Cell>
                            <Table.Cell>Omer@gmail.com</Table.Cell>
                            <Table.Cell>August 11, 2015</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                                    <Header.Content>
                                        Muhammad Asad
                                        <Header.Subheader>Software</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>Lead Software Engineer</Table.Cell>
                            <Table.Cell>masad@gmail.com</Table.Cell>
                            <Table.Cell>October 08, 2013</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                                    <Header.Content>
                                        Abu Bakar
                                        <Header.Subheader>Accounts</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>Account Manager</Table.Cell>
                            <Table.Cell>abaker@gmail.com</Table.Cell>
                            <Table.Cell>November 21, 2011</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>


        </div>
    </>


)

export default EmployeeTable
