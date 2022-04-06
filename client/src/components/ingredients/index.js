import React, { useEffect, useState } from "react";

const Ingredient = (props) => (
  <div>{props.ingredient.name}</div>
 );

export default function ShowIngredients() {
  const [ingredients, setIngredients] = useState([]);

  // This method fetches the ingredients from the database.
  useEffect(() => {
    async function getIngredients() {
      const response = await fetch('/ingredients');
      console.log(response)
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const ingredients = await response.json();
      setIngredients(ingredients);
    }
    getIngredients();
    return;
  }, [ingredients.length]);

  // This method will map out the Ingredients
  function ingredientList() {
    return ingredients.map((ingredient) => {
      return (
        <Ingredient
          ingredient={ingredient}
          key={ingredient._id}
        />
        
      );
    });
}
  // This following  will display the ingredients
  return (
    <div>
      <h3>Ingredients</h3>
        {ingredientList()}
    </div>
  );
}