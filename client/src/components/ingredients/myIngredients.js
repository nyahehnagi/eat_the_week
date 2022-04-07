import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';

import ShowIngreditents from "./index";
import CreateIngredient from "./create";

export default function MyIngredients () {

  const [state, setReload] = useState(false)

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <CreateIngredient state={state} setReload={setReload} />
        </Col>
        <Col>
          <ShowIngreditents state={state} setReload={setReload}/>
        </Col>
      </Row>
    </Container>
  );

}