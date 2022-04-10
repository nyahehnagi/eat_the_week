import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Ingredient = (props) => <div>{props.ingredient.name}</div>;

export default function ShowIngredients(props) {
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

  // This method will map out the ingredients
  function ingredientList() {
    return ingredients.map((ingredient) => {
      return <Ingredient ingredient={ingredient} key={ingredient._id} />;
    });
  }

  const handleClick = () => {
    removeCookie("token");
    navigate("/");
  };

  // This following  will display the ingredients
  return (
    <div className="container-sm">
      <h3>Ingredients</h3>
      <div id="ingredientList">{ingredientList()}</div>
    </div>
  );
}
