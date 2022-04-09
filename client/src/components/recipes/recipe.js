import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Recipe(props) {
  const handleRemoveClick = () => {
    props.removeRecipe(props.recipe._id);
  };

  const handleEditClick = () => {
    props.editRecipe(props.recipe._id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.recipe.name}</Card.Title>
        <Card.Text>{props.recipe.description}</Card.Text>
        <Button onClick={handleRemoveClick} className="btn btn-danger btn-sm me-1">
          Remove
        </Button>
        <Button onClick={handleEditClick} className="btn btn-dark btn-sm">Edit</Button>
      </Card.Body>
    </Card>
  );
}