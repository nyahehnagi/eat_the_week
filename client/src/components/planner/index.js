import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Row, Col, Container } from "react-bootstrap";

export default function Planner(props) {

  // We have a user id
  // on database we have a planner table
  // That has a userid
  // get all recipes from the plan for that user id
  // we can use the Populate method on Plan.. and populate the recipes
  // return a list of days along with their recipes
  // display that data by passing the recipe into each Recipe Card



  return (
  <Container>
    <h1>Your Week Ahead</h1>
    <Row>
      <Col>
        Monday
      </Col>
      <Col>
        Tuesday
      </Col>
      <Col>
        Wednesday
      </Col>
      <Col>
        Thursday
      </Col>
      <Col>
        Friday
      </Col>
      <Col>
        Saturday
      </Col>
      <Col>
        Sunday
      </Col>
    </Row>
  </Container>
  );
}
