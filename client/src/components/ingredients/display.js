import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function DisplayIngredients(props) {
  const [ingredients, setIngredients] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

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
      const ingredientValue = ingredient 
      return ingredientValue.name;
    });
  }
  const ingredientNameList = ingredientList();
 
  // This following  will return the ingredient list of names
  return (
    <>
      {
        ingredientNameList.map(optn => (
        <option>{ optn } </option>
        ))
      }
    </>
  );
}