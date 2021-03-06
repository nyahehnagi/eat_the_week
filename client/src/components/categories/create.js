import React, { useState } from "react";
import { useNavigate } from "react-router";
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
    const category = { ...form };

    await fetch("/categories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "" });
    props.setReload(!props.state);
  }
  // This following section will display the form that takes the input from the category.
  return (
    <div className="container-sm">
      <h3>Create Category</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="input"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <p></p>
        <div className="form-group">
          <input
            type="submit"
            id="create-category"
            value="Create Category"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
