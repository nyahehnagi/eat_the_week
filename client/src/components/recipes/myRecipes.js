import React, { useState, useRef } from "react";
import { Row, Col, Container, Offcanvas, Button } from "react-bootstrap";

import ShowRecipes from "./index";
import CreateRecipe from "./create";
import EditRecipe from "./edit";
import Planner from "../planner/index";

export default function MyRecipes() {
  const [state, setReload] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [planner, setPlanner] = useState("");
  const [recipe, setRecipe] = useState({});
  const manageRecipeButton = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setRecipeId("");
  };
  const handleShow = () => setShow(true);

  const clickOffCanvas = () => {
    manageRecipeButton.current.click();
  };
  const clickCloseCanvas = () => {
    const el = document.querySelector(".btn-close");
    el.click();
  };

  return (
    <Container fluid="md" className="">
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          {!recipeId ? (
            <CreateRecipe state={state} setReload={setReload} />
          ) : (
            <EditRecipe
              closeCanvas={clickCloseCanvas}
              state={state}
              setReload={setReload}
              recipeId={recipeId}
              setRecipeId={setRecipeId}
              recipe={recipe}
              setRecipe={setRecipe}
            />
          )}
        </Offcanvas.Body>
      </Offcanvas>

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
        <Col className="d-flex mt-3 ps-5">
          <Button variant="dark" onClick={handleShow} ref={manageRecipeButton}>
            Create Recipe
          </Button>
        </Col>
        <Col className="d-flex justify-content-center mt-3 ">
          <h3>My Recipes</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md="12">
          <ShowRecipes
            showEdit={clickOffCanvas}
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
  );
}
