import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Recipe from "./recipe";

export default function ShowRecipes(props) {

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


  async function removeRecipe(recipeId) {

    await fetch(`/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    }).catch((error) => {
      window.alert(error);
      return;
    });

    props.setReload(!props.state)
  }


  // This method will map out the recipes
  function recipeList() {
    return recipes.map((recipe) => {
      return (
        <Recipe recipe={recipe} removeRecipe={removeRecipe}/>
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
