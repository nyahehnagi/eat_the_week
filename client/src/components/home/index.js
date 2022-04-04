import React, { useState } from "react";
import { useNavigate } from "react-router";
 

export default function Home() {

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: ""
  });

  const navigate = useNavigate();

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
  const user = { ...form };
   
  await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user}),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ email: "", password: "", name: ""});
  navigate("/recipe");
  }

  return (
    <div>
      <h3>Welcome to Eat The Week</h3>
      <h3>Create User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            id="create-user"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
 }