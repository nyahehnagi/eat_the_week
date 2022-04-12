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
  const [recipe, setRecipe] = useState({});

  return (
    <div className="out-container">
      <Container fluid="md" className="">
        <Row>
          <Col md="12">
            <Planner
              state={state}
              setReload={setReload}
              planner={planner}
              setPlanner={setPlanner}
              />
          </Col>
        </Row>
        <Row>
          <Col md="5">
            {!recipeId ? (
              <CreateRecipe state={state} setReload={setReload} />
              ) : (
                <EditRecipe
                state={state}
                setReload={setReload}
                recipeId={recipeId}
                setRecipeId={setRecipeId}
                recipe={recipe}
                setRecipe={setRecipe}
                />
                )}
          </Col>
          <Col md="7">
            <ShowRecipes
              state={state}
              setReload={setReload}
              setRecipeId={setRecipeId}
              planner={planner}
              setPlanner={setPlanner}
              setRecipe={setRecipe}
              />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
