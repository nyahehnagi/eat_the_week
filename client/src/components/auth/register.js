import React, { useState } from "react";
import { useNavigate } from "react-router";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import { Container } from "react-bootstrap";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  // This method will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Setup Password validation
  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      password: form.password,
    });

  const setPass = (event) => {
    updateForm({ ...form.password, password: event.target.value });
  };

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
      body: JSON.stringify({ user }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ email: "", password: "", name: "" });
    navigate("/recipe");
  }

  return (
    <div className="out-container">
      <Container className="container-sm">
        <form onSubmit={onSubmit} className="register-form">
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
              onChange={setPass}
            />
            <ul className="pass-val">
              <li>
                {validLength ? (
                  <span style={{ color: "green" }}>Valid Length</span>
                ) : (
                  <span style={{ color: "red" }}>Valid Length</span>
                )}
              </li>
              <li>
                {hasNumber ? (
                  <span style={{ color: "green" }}>Has a Number</span>
                ) : (
                  <span style={{ color: "red" }}>Has a Number</span>
                )}
              </li>
              <li>
                {upperCase ? (
                  <span style={{ color: "green" }}>UpperCase</span>
                ) : (
                  <span style={{ color: "red" }}>UpperCase</span>
                )}
              </li>
              <li>
                {lowerCase ? (
                  <span style={{ color: "green" }}>LowerCase</span>
                ) : (
                  <span style={{ color: "red" }}>LowerCase</span>
                )}
              </li>
            </ul>
          </div>

          {validLength && hasNumber && upperCase && lowerCase ? (
            <div className="form-group">
              <input
                type="submit"
                id="create-user"
                value="Register"
                className="btn btn-secondary"
              />
            </div>
          ) : (
            ""
          )}
        </form>
      </Container>
    </div>
  );
}
