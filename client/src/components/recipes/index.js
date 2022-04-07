import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Card, Row, Col } from 'react-bootstrap';

export default function ShowRecipes(props) {
  const Recipe = (props) => <div>{props.recipe.name}</div>;
  const [recipes, setRecipes] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("/recipes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
    return;
  }, [recipes.length, props.state]);


  // This method will map out the recipes
  function recipeList() {
    return recipes.map((recipe) => {
      return (
        // This should be a new component as it will get larger and more
        // complicated
        <Card>
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>
        </Card>
      )
    });
  }

  // This following will display the recipes
  return (
    <div>
      <h3>My Recipes</h3>
      <div id="recipeList">
        {recipeList()}
      </div>
    </div>
  );
}
