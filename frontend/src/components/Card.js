import React from "react";
import { Card } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <Card>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Img
        className="mt-2 mb-2"
        style={{ width: "400px", height: "200px" }}
        src={props.image}
      />
      <Card.Text>{""}</Card.Text>
      <Card.Link target="_blank" href={props.link}>
        Acessar
      </Card.Link>
    </Card.Body>
  </Card>
);
