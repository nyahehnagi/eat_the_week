import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Row, Col, Container, Card } from "react-bootstrap";

export default function Planner(props) {
  const [planner, setPlanner] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    async function getPlanner() {
      const response = await fetch("/planner", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`
        },
      });

      if(!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const planner = await response.json();
      setPlanner(planner)
    }
  });



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
        <Card.Body>
          <h4>Monday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Tuesday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Wednesday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Thursday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Friday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Saturday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
      <Col>
        <Card.Body>
          <h4>Sunday</h4>
          <Card.Title></Card.Title>
        </Card.Body>
      </Col>
    </Row>
  </Container>
  );
}
