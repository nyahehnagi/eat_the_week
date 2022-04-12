import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Modal,
  ListGroup,
} from "react-bootstrap";

export default function Recipe(props) {
  const handleRemoveClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  const handleEditClick = (e) => {
    props.editRecipe(props.recipe._id, props.recipe);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (e) => {
    props.addToPlan(e, props.recipe._id);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Card className="mt-2" border="secondary">
        <Card.Header onClick={handleShow} style={{ cursor: "pointer" }}>
          <Card.Title>{props.recipe.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row className="mb-2">
            <Col>
              <Card.Img
                src={props.recipe.image}
                style={{ width: 60, height: 60 }}
                alt="Card Image"
              />
            </Col>

            <Col>
              <Card.Text>{props.recipe.description}</Card.Text>
              <Card.Text>Serves: {props.recipe.serves}</Card.Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                onClick={handleRemoveClick}
                className="btn btn-danger btn-sm ps-1 pe-1  "
              >
                Remove
              </Button>
            </Col>

            <Col className="d-flex justify-content-end">
              <Button
                onClick={handleEditClick}
                className="btn btn-dark btn-sm "
              >
                Edit
              </Button>
              <DropdownButton
                onSelect={handleSelect}
                variant="dark"
                className="ps-1"
                size="sm"
                id="dropdown-item-button"
                title="Plan"
              >
                <Dropdown.Item eventKey="Mon" className="btn-sm">
                  Monday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Tue" className="btn-sm">
                  Tuesday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Wed" className="btn-sm">
                  Wednesday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Thur" className="btn-sm">
                  Thursday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Fri" className="btn-sm">
                  Friday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Sat" className="btn-sm">
                  Saturday
                </Dropdown.Item>
                <Dropdown.Item eventKey="Sun" className="btn-sm">
                  Sunday
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="d-flex justify-content-center">
          <Modal.Header>
            <Modal.Title>Recipe Details</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>
          <Card>
            <Card.Header>
              <Card.Title>{props.recipe.name}</Card.Title>
              {props.recipe.description}
            </Card.Header>
            <Card.Body>
              <Row className="mb-2">
                <Col className="text-sm text-center">
                  <Card.Img
                    src={props.recipe.image}
                    style={{ width: 80, height: 80 }}
                    alt="Card Image"
                  />
                </Col>
                <Col className="text-sm text-center">
                  <p className="block mb-0">Category</p>
                  <p className="block text-xl mb-0 text-sm">
                    {props.recipe.category}
                  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="text-sm text-center">
                  <p className="block mb-0">Serves</p>
                  <p className="block text-xl mb-0">
                    {props.recipe.serves}
                    <span className="text-sm"></span>
                  </p>
                </Col>
                <Col className="text-sm text-center">
                  <p className="block mb-0">Prep Time</p>
                  <p className="block text-xl mb-0">
                    {props.recipe.prep_time}
                    <span className="text-sm"> mins</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <hr></hr>
              </Row>
              <Row className="mb-2">
                <h4>Ingredients</h4>
                <ListGroup variant="flush">
                  {props.recipe.ingredients.map((ingredient) => (
                    <ListGroup.Item>
                      {ingredient.ingredient_id.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Row>
              <Row>
                <hr></hr>
              </Row>
              <Row>
                <h4>Method</h4>
                {props.recipe.method}
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handlePrint}>
            Print
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
