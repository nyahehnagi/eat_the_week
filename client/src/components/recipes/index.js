//import React, { useEffect } from "react";
//import { useNavigate } from "react-router";
//import { useCookies } from "react-cookie";


export default function ShowRecipes(props) {
  const Recipe = (props) => <div>{props.recipe.name}</div>;

  // This method will map out the recipes
  function recipeList() {
    return props.recipes.map((recipe) => {
      return <Recipe recipe={recipe} key={recipe._id} />;
    });
  }

  // This following will display the recipes
  return (
    <div>
      <h3>Recipes</h3>
      <div id="recipeList">
        {recipeList()}
      </div>
    </div>
  );
}
