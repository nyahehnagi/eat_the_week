import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";

//  const User = (props) => <div>{props.user.name}</div>;

export default function GetUser(props) {
  const [user, setUser] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();

  const [form, setForm] = useState({
    password: "",
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

  // This method fetches the user details from the database.
  useEffect(() => {
    async function getUser() {
      const response = await fetch("/users", {
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
      const user = await response.json();
      setUser(user);
    }

    getUser();

    return;
  }, [user.length, props.state]);

  const handleClick = () => {
    removeCookie("token");
    navigate("/");
  };

  async function onSubmit(e) {
    e.preventDefault();

    const user = { ...form };

    // This will send a put request to update the data in the database.

    await fetch("/users", {
      // await fetch(`/user/${props.user._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });

    // props.setUserId("")
    props.setReload(!props.state);
    navigate("/recipe");
  }

  return (
    <Container className="container-sm">
      <h3>Password Reset</h3>
      <Card>
        <Card.Body>
          <Card.Title>Name: {user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <br></br>
          <label htmlFor="password">Please enter the new Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={form.password}
            onChange={setPass}
          />
          <ul>
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
        <br></br>
        {validLength && hasNumber && upperCase && lowerCase ? (
          <div className="form-group">
            <input
              type="submit"
              id="update"
              value="Update"
              className="btn btn-primary"
            />
          </div>
        ) : (
          ""
        )}
      </form>
    </Container>
  );
}
