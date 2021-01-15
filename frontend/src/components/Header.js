import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Container>
      <Jumbotron className="mt-3 p-3">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </Jumbotron>
    </Container>
  );
};
