import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import GetUser from "./index";

export default function MyUsers() {
  const [state, setReload] = useState(false);

  return (
    <div className="out-container">
      <Container className="container-sm" fluid="md">
        <Row>
          <Col>
            <GetUser state={state} setReload={setReload} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
