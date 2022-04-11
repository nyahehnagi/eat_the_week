import React, { useState } from "react";
import { useCookies } from "react-cookie";

export default function Create(props) {
  const [form, setForm] = useState({
    name: "",
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
    const ingredient = { ...form };

    await fetch("/ingredients", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredient }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "" });
    props.setReload(!props.state);
  }
  // This following section will display the form that takes the input from the ingredient.
  return (
    <div className="container-sm">
      <h3>Create Ingredient</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ingredient Name</label>
          <input
            type="input"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
          <label htmlFor="unit">Ingredient Unit</label>
          <input
            type="input"
            className="form-control"
            id="unit"
            value={form.unit}
            onChange={(e) => updateForm({ unit: e.target.value })}
          />
          <label htmlFor="image">Image</label>
          <input
            type="input"
            className="form-control"
            id="image"
            value={form.image}
            onChange={(e) => updateForm({ image: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            id="create-ingredient"
            value="Create Ingredient"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
