import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Recipe from "./recipe";
import { Row, Col, Container } from "react-bootstrap";

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

  function editRecipe(recipeId, recipe) {
    props.setRecipeId(recipeId);
    props.setRecipe(recipe);
    props.showEdit()
  }

  async function addToPlan(day, recipeId) {
    let newPlan = [];

    const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const times = 7;

    for (let i = 0; i < times; i++) {
      let planItem = {};
      if (weekDays[i] === day) {
        planItem = { day: weekDays[i], recipe_id: { _id: recipeId } };
      } else {
        if (props.planner) {
          if (props.planner.plan[i].recipe_id) {
            planItem = {
              day: weekDays[i],
              recipe_id: { _id: props.planner.plan[i].recipe_id._id },
            };
          } else {
            planItem = { day: weekDays[i] };
          }
        } else {
          planItem = { day: weekDays[i] };
        }
      }

      newPlan.push(planItem);
    }

    // Commit the plan to the data Database
    const payload = `{"planner":${JSON.stringify({ plan: newPlan })}}`;

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

    props.setReload(!props.state);
  }

  function partition(list = [], n = 1) {
    const isPositiveInteger = Number.isSafeInteger(n) && n > 0;
    if (!isPositiveInteger) {
      throw new RangeError('n must be a positive integer');
    }
  
    const partitions = [];
  
    for (let i = 0; i < list.length; i += n) {
      const partition = list.slice(i, i+n);
      partitions.push( partition );
    }
  
    return partitions;
  }

  // This method will map out the recipes
  function recipeList() {
    //const secondColumnStart = Math.floor(recipes.length / 2);

    const partitions = partition(recipes, 4)
    
    return (
      <Container>
        <Row>
          <Col md="3">
          {partitions.map((partition) => {
            return partition.map((recipe, index) =>{
              if(index == 0){
                return (
                  <Recipe
                    recipe={recipe}
                    removeRecipe={removeRecipe}
                    editRecipe={editRecipe}
                    addToPlan={addToPlan}
                  />
                );
              }
            })
          })}
          </Col>
          <Col md="3">
          {partitions.map((partition) => {
            return partition.map((recipe, index) =>{
              if(index == 1){
                return (
                  <Recipe
                    recipe={recipe}
                    removeRecipe={removeRecipe}
                    editRecipe={editRecipe}
                    addToPlan={addToPlan}
                  />
                );
              }
            })
          })}
          </Col>
          <Col md="3">
          {partitions.map((partition) => {
            return partition.map((recipe, index) =>{
              if(index == 2){
                return (
                  <Recipe
                    recipe={recipe}
                    removeRecipe={removeRecipe}
                    editRecipe={editRecipe}
                    addToPlan={addToPlan}
                  />
                );
              }
            })
          })}
          </Col>
          <Col md="3">
          {partitions.map((partition) => {
            return partition.map((recipe, index) =>{
              if(index == 3){
                return (
                  <Recipe
                    recipe={recipe}
                    removeRecipe={removeRecipe}
                    editRecipe={editRecipe}
                    addToPlan={addToPlan}
                  />
                );
              }
            })
          })}
         </Col>
    
          {/* <Col md="6">
            {recipes.slice(secondColumnStart).map((recipe) => {
              return (
                <Recipe
                  recipe={recipe}
                  removeRecipe={removeRecipe}
                  editRecipe={editRecipe}
                  addToPlan={addToPlan}
                />
              );
            })}
          </Col>
          <Col md="6">
            {recipes.slice(0, secondColumnStart).map((recipe) => {
              return (
                <Recipe
                  recipe={recipe}
                  removeRecipe={removeRecipe}
                  editRecipe={editRecipe}
                  addToPlan={addToPlan}
                />
              );
            })}
          </Col> */}
          
        </Row>
      </Container>
    );
  }

  // This following will display the recipes
  return (
    <div className="container-sm">
      <Row>
        <Col className="d-flex justify-content-center">
          <h3>My Recipes</h3>
        </Col>
      </Row>
      <div id="recipeList">{recipeList()}</div>
    </div>
  );
}
