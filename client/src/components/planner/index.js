import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Planner(props) {
  //const [planner, setPlanner] = useState("");
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlanner() {
      const response = await fetch("/planners", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const planner = await response.json();
      props.setPlanner(planner);
    }

    getPlanner();
    return;
  }, [props.state]);

  // This method will map out the planned recipes
  function recipePlanList() {
    if (props.planner) {
      return props.planner.plan.map((plan) => {
        return (
          <Col>
            <Card.Header>{plan.day}</Card.Header>
            <Card.Body>
              {plan.recipe_id ? (
                <Card.Title>{plan.recipe_id.name}</Card.Title>
              ) : (
                <Card.Title>Add Recipe</Card.Title>
              )}
            </Card.Body>
          </Col>
        );
      });
    } else {
      // Hard coding for the time being
      const times = 7;
      const emptyCards = [];
      const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
      for (let i = 0; i < times; i++) {
        emptyCards.push(
          <Col>
            <Card.Header>{weekDays[i]}</Card.Header>
            <Card.Body>
              <Card.Title>Add Recipe</Card.Title>
            </Card.Body>
          </Col>
        );
      }
      return emptyCards;
    }
  }

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <Container className="mb-2 mt-2">
      <Row>
        <Col className="d-flex justify-content-center">
          <h3>Your Week Ahead</h3>
        </Col>
      </Row>

      <Row id="recipePlanlist">{recipePlanList()}</Row>
    </Container>
  );
}
