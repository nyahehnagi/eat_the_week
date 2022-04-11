import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ShowCategories from "./index";
import CreateCategory from "./create";

export default function MyCategories() {
  const [state, setReload] = useState(false);

  return (
    <Container className="container-sm" fluid="md">
      <Row>
        <Col>
          <CreateCategory state={state} setReload={setReload} />
        </Col>
        <Col>
          <ShowCategories state={state} setReload={setReload} />
        </Col>
      </Row>
    </Container>
  );
}
