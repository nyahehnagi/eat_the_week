import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";

export default function DisplayIngredients(props) {
  const [ingredients, setIngredients] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();

  // This method fetches the ingredients from the database.
  useEffect(() => {
    async function getIngredients() {
      const response = await fetch("/ingredients", {
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

      const ingredients = await response.json();
      setIngredients(ingredients);
    }

    getIngredients();

    return;
  }, [ingredients.length, props.state]);

  // This method will map out the ingredients into an array of ingredient names
  function ingredientList() {
    return ingredients.map((ingredient) => {
      const ingredientValue = ingredient;
      return ingredientValue;
    });
  }
  const ingredientNameList = ingredientList();

  // This following  will return the ingredient list of names
  return (
    <>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        id="ingredient"
        ref={props.ingredientSelector}
      >
        <option selected>Select Ingredient</option>
        {ingredientNameList.map((ingredient) => (
          <option
            value={ingredient.name}
            key={ingredient._id}
            ing_id={ingredient._id}
          >
            {ingredient.name}
          </option>
        ))}
      </select>
    </>
  );
}
