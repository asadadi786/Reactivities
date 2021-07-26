import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import ServicesTable from './ServicesTable'

function Services() {
    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid>
                <GridColumn width="10">
                    <div>
                        <ServicesTable />
                    </div>
                </GridColumn>
            </Grid>
        </Container>
    )
}

export default Services
