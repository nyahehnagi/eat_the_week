import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Select from "react-dropdown-select";
import DisplayCategories  from "../categories/display";

export default function Create(props) {
  const [form, setForm] = useState({
    name: "",
    ingredient: "Flour",
    category: "Vegan",
  });

  const [cookies, setCookie] = useCookies(); 
  // This method will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    // When a post request is sent to the create url, add a new record to the database.
    const recipe = { ...form };
    console.log("Create Recipe", JSON.stringify({ recipe }))
    await fetch("/recipes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe }),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({ name: "", ingredient: "Flour", category: "Vegan" });
    props.setReload(!props.state);
  }
  const Ingredient = [
    { label: "Flour", value: 1 },
    { label: "Milk", value: 2 },
    { label: "Sugar", value: 3 },
    { label: "Salt", value: 4 },
    { label: "Eggs", value: 5 },
  ];

  // This following section will display the form that takes the input from the recipe.
  return (
    <div>
      <h3>Create Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="input"
            className="form-control"
            id="name"
            value={form.name}
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
           < DisplayCategories/>
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
            id="create-recipe"
            value="Create Recipe"
            className="btn btn-dark mt-2"
          />
        </div>
      </form>
    </div>
  );
}