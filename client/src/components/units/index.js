import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Unit = (props) => <div>{props.unit.name}</div>;

export default function ShowUnits(props) {
  const [units, setUnits] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  // This method fetches the categories from the database.
  useEffect(() => {
    async function getUnits() {
      const response = await fetch("/units", {
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

      const units = await response.json();
      setUnits(units);
    }

    getUnits();

    return;
  }, [units.length, props.state]);

  // This method will map out the units
  function unitList() {
    return units.map((unit) => {
      return <Unit unit={unit} key={unit._id} />;
    });
  }

  const handleClick = () => {
    removeCookie("token");
    navigate("/");
  };

  // This following  will display the units
  return (
    <div>
      <h3>Units</h3>
      <div id="unitList">{unitList()}</div>
    </div>
  );
}
