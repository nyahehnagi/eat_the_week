import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Recipe = (props) => <div>{props.recipe.name}</div>;

export default function ShowRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [cookies, setCookie] = useCookies();

  // This method fetches the recipes from the database.
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
  }, [recipes.length]);

  // This method will map out the recipes
  function recipeList() {
    return recipes.map((recipe) => {
      return <Recipe recipe={recipe} key={recipe._id} />;
    });
  }

  // This following  will display the recipes
  return (
    <div>
      <h3>Recipes</h3>
      <div id="recipeList">
        {recipeList()}
      </div>
    </div>
  );
}
