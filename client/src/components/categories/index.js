import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Category = (props) => <div>{props.category.name}</div>;

export default function ShowCategories(props) {
  const [categories, setCategories] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  // This method fetches the categories from the database.
  useEffect(() => {
    async function getCategories() {
      const response = await fetch("/categories", {
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

      const categories = await response.json();
      setCategories(categories);
    }

    getCategories();

    return;
  }, [categories.length, props.state]);

  // This method will map out the categories
  function categoryList() {
    return categories.map((category) => {
      return <Category category={category} key={category._id} />;
    });
  }

  const handleClick = () => {
    removeCookie("token");
    navigate("/");
  };

  // This following  will display the categories
  return (
    <div>
      <h3>Categories</h3>
      <div id="categoryList">{categoryList()}</div>
    </div>
  );
}
