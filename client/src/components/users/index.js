import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

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
      console.log(user);
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
          <Card.Title>User Name: {user.name}</Card.Title>
          <Card.Text>User Email: {user.email}</Card.Text>
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
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            id="update"
            value="Update"
            className="btn btn-primary"
          />
        </div>
      </form>
    </Container>
  );
}
