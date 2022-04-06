import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';

import ShowRecipes from "./index";
import CreateRecipe from "./create";

export default function MyRecipes () {

  const [state, setReload] = useState(false)

  return (
    <Container className="container-sm">
      <Row>
        <Col>
          <CreateRecipe state={state} setReload={setReload} />
        </Col>
        <Col>
          <ShowRecipes state={state} setReload={setReload}/>
        </Col>
      </Row>
    </Container>
  );

}