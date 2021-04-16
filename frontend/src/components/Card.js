import React from "react";
import { Card } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <Card>
    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
      <Card.Title>{props.title}</Card.Title>
      <Card.Img
        style={{ width: "75%", height: "75%" }}
        src={props.image}
      />
      <Card.Text>{""}</Card.Text>
      <Card.Link target='_blank' href={`/${props.slug}`}>
        Acessar
      </Card.Link>
    </Card.Body>
  </Card>
);
