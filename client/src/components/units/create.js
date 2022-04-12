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
    const unit = { ...form };

    await fetch("/units", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ unit }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "" });
    props.setReload(!props.state)
  }
  // This following section will display the form that takes the input from the unit.
  return (
    <div className="container-sm">
      <h3>Create Unit</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Unit</label>
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
            id="create-unit"
            value="Create Unit"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
