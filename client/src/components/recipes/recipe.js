import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container,Dropdown, DropdownButton } from "react-bootstrap";


export default function Recipe(props) {
  const handleRemoveClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  const handleEditClick = (e) => {
    props.editRecipe(props.recipe._id);
  };

  const handleSelect = (e) => {
    props.addToPlan(e, props.recipe._id)
  }

  return (
    <Card className="container-sm" border="primary" style={{ width: '18rem' }}>
      <Card.Header>
      <Card.Title>{props.recipe.name}</Card.Title> 
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
      
      <Row>
        <br/>
        <Col md='3'>
        <Button onClick={handleRemoveClick} className="btn btn-danger btn-sm me-1">
          Remove
        </Button>
        </Col>
        <Col md='3'>
        <Button onClick={handleEditClick} className="btn btn-dark btn-sm me-1">Edit</Button>
        </Col>
        <Col md='4'>
        <DropdownButton onSelect={handleSelect} variant="dark" size="sm" id="dropdown-item-button" title="Add to Plan">
            <Dropdown.Item  eventKey="Mon" className="btn-sm" >Monday</Dropdown.Item>
            <Dropdown.Item  eventKey="Tue" className="btn-sm">Tuesday</Dropdown.Item>
            <Dropdown.Item  eventKey="Wed"  className="btn-sm">Wednesday</Dropdown.Item>
            <Dropdown.Item  eventKey="Thur"  className="btn-sm">Thursday</Dropdown.Item>
            <Dropdown.Item eventKey="Fri"  className="btn-sm">Friday</Dropdown.Item>
            <Dropdown.Item  eventKey="Sat"  className="btn-sm">Saturday</Dropdown.Item>
            <Dropdown.Item  eventKey="Sun"  className="btn-sm">Sunday</Dropdown.Item>
        </DropdownButton>
        </Col>
       </Row>
      </Card.Body>
    </Card>
  );
}
