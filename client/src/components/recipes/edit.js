import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";

export default function EditRecipe(props) {
  const [form, setForm] = useState({});
  const [cookies, setCookie] = useCookies();

  // This method will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/recipes/${props.recipeId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipe = await response.json();
      if (!recipe) {
        window.alert(`Record with id ${props.recipeId} not found`);
        return;
      }

      setForm(recipe);
    }

    fetchData();

    return;
  }, [props.recipeId]);

  async function onSubmit(e) {
    e.preventDefault();

    const recipe = { ...form };

    console.log("edited recipe",recipe )

    // This will send a put request to update the data in the database.
    await fetch(`/recipes/${props.recipeId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({recipe}),
    });

    props.setRecipeId("")
    props.setReload(!props.state);
  }

  function handleCancelClick(){
    props.setRecipeId("")
    props.setReload(!props.state);
  }

  const Ingredient = [
    { label: "Flour", value: 1 },
    { label: "Milk", value: 2 },
    { label: "Sugar", value: 3 },
    { label: "Salt", value: 4 },
    { label: "Eggs", value: 5 },
  ];
  const Category = [
    { label: "Vegan", value: 1 },
    { label: "BBQ", value: 2 },
    { label: "Wheat Free", value: 3 },
  ];

  // This following section will display the form that takes the input from the recipe.
  return (
    <div className="container-sm">
      <h3>Edit Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="input"
            className="form-control"
            id="name"
            value={form.name || ""}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
          <label htmlFor="description">Recipe Description</label>
          <input
            type="input"
            className="form-control"
            id="description"
            value={form.description || ""}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
          <label htmlFor="serves">Serves</label>
          <input
            type="input"
            className="form-control"
            id="serves"
            value={form.serves || ""}
            onChange={(e) => updateForm({ serves: e.target.value })}
          />
          <label htmlFor="prep_time">Preparation Time</label>
          <input
            type="input"
            className="form-control"
            id="prep_time"
            value={form.prep_time || ""}
            onChange={(e) => updateForm({ prep_time: e.target.value })}
          />
          <label htmlFor="method">Method</label>
          <input
            type="input"
            className="form-control"
            id="method"
            value={form.method || ""}
            onChange={(e) => updateForm({ method: e.target.value })}
          />
          <label htmlFor="image">Image</label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={form.image || ""}
            onChange={(e) => updateForm({ image: e.target.value })}
          />
          <label htmlFor="category">Select Category</label>
          <select
            type="input"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          >
            {Category.map((category) => (
              <option value={category.label}>{category.label}</option>
            ))}
          </select>
          <label htmlFor="ingredient"></label>
          Select Ingredients
          <select
            type="input"
            className="form-control"
            id="ingredient"
            value={form.ingredient}
            onChange={(e) => updateForm({ ingredient: e.target.value })}
          >
            {Ingredient.map((ingredient) => (
              <option value={ingredient.label}>{ingredient.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <input
            type="submit"
            id="update-recipe"
            value="Edit Recipe"
            className="btn btn-dark mt-2 me-1"
          />
          <Button onClick={handleCancelClick} className="btn btn-dark mt-2">Cancel</Button>
        </div>
        
      </form>
    </div>
  );
}
