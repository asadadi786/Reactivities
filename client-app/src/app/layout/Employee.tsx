import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import EmployeeTable from './EmployeeTable'

function Employee() {
    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid>
                <GridColumn width="10">
                    <div>
                        <EmployeeTable />
                    </div>
                </GridColumn>
            </Grid>
        </Container>

    )
}

export default Employee
