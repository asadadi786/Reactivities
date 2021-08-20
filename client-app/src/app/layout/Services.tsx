import React from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import ServicesTable from "./ServicesTable";
import TempNavBar from "./TempNavBar";

function Services() {
  return (
    <>
      <TempNavBar />

      <Container style={{ marginTop: "10em" }}>
        <Grid>
          <GridColumn width="10">
            <div>
              <ServicesTable />
            </div>
          </GridColumn>
        </Grid>
      </Container>
    </>
  );
}

export default Services;
