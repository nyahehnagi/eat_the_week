import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Recipe from "./recipe";

export default function ShowRecipes(props) {
  const [recipes, setRecipes] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("/recipes", {
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

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
    return;
  }, [recipes.length, props.state]);

  async function removeRecipe(recipeId) {
    await fetch(`/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    }).catch((error) => {
      window.alert(error);
      return;
    });

    props.setReload(!props.state);
  }

  function editRecipe(recipeId){
    props.setRecipeId(recipeId)
  }

  async function addToPlan(day,recipeId){
    let newPlanner = {}
    let newPlan = []
    if (!props.planner){
      // No Plan yet
      const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
      const times = 7;
  
      for(let i=0; i<times;i++) {
        newPlan.push(
          {"day": weekDays[i], "recipe_id" : ""})
      }
 
      newPlanner = {"planner": {"plan": newPlan}}
      props.setPlanner(newPlanner)
    }

    console.log("Planner Pre", props.planner)
    console.log("Planner Pre Item 0", props.planner.plan[0])
    console.log("Planner Pre Item 1", props.planner.plan[1])

    // Get index for the day we are updating
    const planIndex = props.planner.plan.findIndex((planDay, index) => {
      if(planDay.day == day)
        return true;
    });
    console.log("Plan Index", planIndex)
    // Set recipe id for this day
    props.planner.plan[planIndex].recipe_id._id = recipeId
    props.setPlanner(props.planner)

    console.log("Planner Post", props.planner)
    console.log("Planner Post Item 1", props.planner.plan[1])
    // Commit the whole plan to the data Database
    const payload = `{"planner":${JSON.stringify(props.planner)}}`
    console.log("StringyFy",payload)

    await fetch("/planners", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: payload,
    }).catch((error) => {
      window.alert(error);
      return;
    });
    props.setReload(!props.state)

  }

  // This method will map out the recipes
  function recipeList() {
    return recipes.map((recipe) => {
      return <Recipe recipe={recipe} removeRecipe={removeRecipe} editRecipe={editRecipe} addToPlan={addToPlan} />;
    });
  }

  // This following will display the recipes
  return (
    <div>
      <h3>My Recipes</h3>
      <div id="recipeList">{recipeList()}</div>
    </div>
  );
}
