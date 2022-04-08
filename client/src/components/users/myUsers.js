import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';

import GetUser from "./index";

export default function MyUsers () {

  const [state, setReload] = useState(false)

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <GetUser state={state} setReload={setReload} />
        </Col>
      </Row>
    </Container>
  );

}