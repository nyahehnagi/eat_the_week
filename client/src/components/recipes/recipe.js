import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Row, Col, Container,Dropdown, DropdownButton, Modal } from "react-bootstrap";


export default function Recipe(props) {
  const handleRemoveClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  const handleEditClick = (e) => {
    props.editRecipe(props.recipe._id);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (e) => {
    props.addToPlan(e, props.recipe._id)
  }

  return (
    <>
    <Card className="mt-2" border="secondary"    >
      <Card.Header onClick={handleShow} style={{ cursor: "pointer" }}>
      <Card.Title >
        {props.recipe.name}
        </Card.Title> 
      </Card.Header>
      <Card.Body>
      <Container fluid="md">
      <Row>
        <Col md='4'>
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
        <Col md='4'>
        <Button onClick={handleRemoveClick} className="btn btn-danger btn-sm ps-1 pe-1  ">
          Remove
        </Button>
        </Col>
        <Col md='2'>
        <Button onClick={handleEditClick} className="btn btn-dark btn-sm ">Edit</Button>
        </Col>
        <Col md='4'>
        <DropdownButton onSelect={handleSelect} variant="dark" className="ps-1" size="sm" id="dropdown-item-button" title="Add to Plan">
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


    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      >
      <Modal.Header>
        <Modal.Title>Recipe Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Header>
          <Card.Title >
            {props.recipe.name}
          </Card.Title> 
          {props.recipe.description}
        </Card.Header>
        <Card.Body>
        <Row>
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
        <Card.Img src={props.recipe.image}
        style={{width: 80, height: 80}} alt="Card Image"/> 
        </div>
        </Col> 
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{props.recipe.category}<span className="text-sm"></span></p>
          <p className="block mb-0">Category</p>
        </div>
        </Col>
        </Row>
        <Row>
        <br/>
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{props.recipe.serves}<span className="text-sm"></span></p>
          <p className="block mb-0">Serves</p>
        </div>
        </Col>
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{props.recipe.prep_time}<span className="text-sm"> mins</span></p>
          <p className="block mb-0">Prep Time</p>
        </div>
        </Col>
      </Row>
          <Row>
          <h4>Ingredients</h4>   
            {props.recipe.ingredients}
          </Row>
          <Row>
          <h4>Method</h4>   
        {props.recipe.method}
        </Row>
        </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="info">
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
