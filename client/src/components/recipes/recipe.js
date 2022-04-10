import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";


export default function Recipe(props) {
  const handleRemoveClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  const handleEditClick = () => {
    props.editRecipe(props.recipe._id);
  };

  const handleDisplayClick = () => {
    props.displayRecipe(props.recipe._id);
  };

  console.log("In recipe.js and looking for props")
  console.log(props)
  console.log(props.recipe._id)

  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>
      <Card.Title >
        <a href="/recipe/display" onClick={handleDisplayClick}>
        {props.recipe.name}
        </a>
        </Card.Title> 
      </Card.Header>
      <Card.Body>
      <Container fluid="md">
      <Row>
        <Col md='4'>
        <br/>
        <Card.Img src={props.recipe.image}
        style={{width: 60, height: 60}} alt="Card Image"/> <br/><br/> 
        </Col>
        <Col md='8'>
        <Card.Text>{props.recipe.description}</Card.Text> 
        <Card.Text>Serves: {props.recipe.serves}</Card.Text> 
        </Col>
        </Row>
        </Container>
        <br/>
        <Button onClick={handleRemoveClick} className="btn btn-danger btn-sm me-1">
          Remove
        </Button>
        <Button onClick={handleEditClick} className="btn btn-dark btn-sm">Edit</Button>
        <Button onClick={handleDisplayClick} href="/recipe/display" className="btn btn-info btn-sm">Display</Button>
      </Card.Body>
    </Card>
  );
}
