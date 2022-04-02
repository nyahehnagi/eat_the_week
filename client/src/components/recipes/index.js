import React, { useEffect, useState } from "react";

const Recipe = (props) => (
  <div>{props.recipe.name}</div>
 );

export default function ShowRecipes() {
  const [recipes, setRecipes] = useState([]);

 // This method fetches the posts from the database.
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`/recipes`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      {console.log("Recipes are", recipes)}
      setRecipes(recipes);
    }
    

    getRecipes();

    return;
  }, [recipes.length]);


  // This method will map out the recipes
  function recipeList() {
    return recipes.map((recipe) => {
      return (
        <Recipe
          recipe={recipe}
          key={recipe._id}
        />
      );
    });
}

  // This following  will display the recipes 
  return (
    <div>
      <h3>Recipes</h3>
        {recipeList()}
    </div>
  );
}
