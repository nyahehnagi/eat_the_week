import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ShowRecipes from "./index";
import CreateRecipe from "./create";
import EditRecipe from "./edit";
import Planner from "../planner/index";

export default function MyRecipes() {
  const [state, setReload] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [planner, setPlanner] = useState("");

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Planner state={state} setReload={setReload} planner={planner} setPlanner={setPlanner} />
        </Col>
      </Row>
      <Row>
        <Col>
        {!recipeId ? (
          <CreateRecipe state={state} setReload={setReload} />
          ) : (
          <EditRecipe state={state} setReload={setReload} recipeId={recipeId} setRecipeId={setRecipeId}/>
          )
        }
        </Col>
        <Col>
          <ShowRecipes state={state} setReload={setReload} setRecipeId={setRecipeId} planner={planner}/>
        </Col>

      </Row>
    </Container>
  );
}
