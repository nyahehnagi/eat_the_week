import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ShowIngredients from "./index";
import CreateIngredient from "./create";

export default function MyIngredients() {
  const [state, setReload] = useState(false);

  return (
    <Container className="container-sm" fluid="md">
      <Row>
        <Col>
          <CreateIngredient state={state} setReload={setReload} />
        </Col>
        <Col>
          <ShowIngredients state={state} setReload={setReload} />
        </Col>
      </Row>
    </Container>
  );
}
