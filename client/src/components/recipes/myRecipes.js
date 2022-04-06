import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useCookies } from "react-cookie";

import ShowRecipes from "./index";
import CreateRecipe from "./create";

export default function MyRecipes () {
  const [cookies, setCookie] = useCookies();
  const [recipes, setRecipes] = useState([]);
  const [state, setState] = useState(false)

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
  }, [recipes.length, state]);

  return (
    <Container>
      <Row>
        <Col>
          <CreateRecipe state={state} setState={setState} />
        </Col>
        <Col>
          <ShowRecipes recipes={recipes}/>
        </Col>
      </Row>
    </Container>
  );

}