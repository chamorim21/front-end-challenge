import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <Container>
      <Jumbotron className='mt-3 p-3'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        {props.image && (
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              src={props.image}
              alt={props.title}
            />
          </div>
        )}
      </Jumbotron>
    </Container>
  );
}
