import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function DisplayCategories(props) {
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

  // This method will map out the categories into an array of category names
  function categoryList() {
    return categories.map((category) => {
      const categoryValue = category;
      return categoryValue.name;
    });
  }
  const categoryNameList = categoryList();
  let counter = 0;
  // This following  will return the category list of names
  return (
    <>
      {categoryNameList.map((optn) => (
        <option key={(counter += 1)}>{optn}</option>
      ))}
    </>
  );
}
