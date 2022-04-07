import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

 const User = (props) => <div>{props.user.name}</div>;

export default function GetUser(props) {
  const [users, setUsers] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  let counter = 0;

  // This method fetches the ingredients from the database.
  useEffect(() => {
    console.log("HERE 1111111")
    
    console.log("HERE 1111111")
    async function getUsers() {
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
      const users = await response.json();
      console.log(users)
      counter += 1
      console.log(counter)
      setUsers(users);
    }

    getUsers();

    return; 
  } , [users.length, props.state]);

 
  const handleClick = () => {
    removeCookie("token");
    navigate("/");
  };

  // This following  will display the user
  return (
    <div>
    <h3>User Details</h3>
    <div>
      {users.email}
      {users.name}
    </div>
    </div>
  );
}