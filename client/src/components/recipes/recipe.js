import React, { useState } from "react";
import { Card, Button} from 'react-bootstrap';

export default function Recipe (props) {

  const handleClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  return (
    <Card>
    <Card.Body>
      <Card.Title>{props.recipe.name}</Card.Title>
      <Card.Text>{props.recipe.description}</Card.Text>
      <Button onClick={handleClick} variant="secondary">Remove</Button>
    </Card.Body>
    </Card>
  );

}