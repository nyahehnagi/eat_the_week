import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ShowUnits from "./index";
import CreateUnit from "./create";

export default function MyUnits() {
  const [state, setReload] = useState(false);

  return (
    <Container className="container-sm" fluid="md">
      <Row>
        <Col>
          <CreateUnit state={state} setReload={setReload} />
        </Col>
        <Col>
          <ShowUnits state={state} setReload={setReload} />
        </Col>
      </Row>
    </Container>
  );
}
