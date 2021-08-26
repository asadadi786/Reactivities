import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

function HomePage() {
  return (
    <div>
      <Container style={{ marginTop: "7em" }}>
        <h1>Home Page</h1>
        <Link to="/activities">Go To Activities</Link>
      </Container>
    </div>
  );
}

export default HomePage;
