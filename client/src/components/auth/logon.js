import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";

export default function Logon(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    const session = { ...form };

    await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ email: "", password: "" });
    navigate("/recipe");
  }

  return (
    <div className="out-container">
    <Container className="container-sm">
      <h3>Log on</h3>
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
          <input
            type="submit"
            id="logon"
            value="Log On"
            className="btn btn-primary"
          />
        </div>
      </form>
    </Container>
    </div>
  );
}
