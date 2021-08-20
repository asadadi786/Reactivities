import React from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import EmployeeTable from "./EmployeeTable";
import TempNavBar from "./TempNavBar";

function Employee() {
  return (
    <>
      <TempNavBar />
      <Container style={{ marginTop: "5em" }}>
        <Grid>
          <GridColumn width="10">
            <div>
              <EmployeeTable />
            </div>
          </GridColumn>
        </Grid>
      </Container>
    </>
  );
}

export default Employee;
