import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import DisplayCategories from "../categories/display";
import DisplayIngredients from "../ingredients/display";
import { Accordion, ListGroup, Row, Col, Button } from "react-bootstrap";

export default function EditRecipe(props) {
  const [form, setForm] = useState({});
  const [cookies, setCookie] = useCookies();

  const [ingredients, setIngredients] = useState([]);
  const [ingredientNames, setingredientNames] = useState([]);
  const ingredientSelector = useRef(null);

  // This method will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/recipes/${props.recipeId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipe = await response.json();
      if (!recipe) {
        window.alert(`Record with id ${props.recipeId} not found`);
        return;
      }

      setForm(recipe);
    }

    fetchData();

    return;
  }, [props.recipeId]);

  async function onSubmit(e) {
    e.preventDefault();

    const recipe = { ...form };

    console.log("edited recipe", recipe);

    // This will send a put request to update the data in the database.
    await fetch(`/recipes/${props.recipeId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe }),
    });

    props.setRecipeId("");
    props.setReload(!props.state);
  }

  function handleCancelClick() {
    props.setRecipeId("");
    props.setReload(!props.state);
  }

  function addIngredient() {
    const name = ingredientSelector.current.value;
    const selectedIndex = ingredientSelector.current.options.selectedIndex;
    const ingredient_id =
      ingredientSelector.current.options[selectedIndex].getAttribute("ing_id");

    console.log("ID", ingredient_id);
    console.log("Name", name);
    console.log("Selected Index", selectedIndex);

    setingredientNames(ingredientNames.concat(name));
    setIngredients(ingredients.concat(ingredient_id));
    console.log("Ingredients", ingredients);
    console.log("Ingredient Names", ingredientNames);
    updateForm({ ingredients: ingredients });
  }

  // This following section will display the form that takes the input from the recipe.
  return (
    <div className="container-sm">
      <Row>
        <Col className="d-flex justify-content-center">
          <h3>Edit Recipe</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="input"
                className="form-control"
                id="name"
                value={form.name || ""}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
              <label htmlFor="description">Recipe Description</label>
              <input
                type="input"
                className="form-control"
                id="description"
                value={form.description || ""}
                onChange={(e) => updateForm({ description: e.target.value })}
              />
              <Row>
              <Col md='5' style={{width:"50%",float:"left"}}>
              <label htmlFor="serves">Serves</label>
              <input
                type="input" 
                className="form-control"
                id="serves"
                value={form.serves || ""}
                onChange={(e) => updateForm({ serves: e.target.value })}
              />
              </Col> 
              <Col md='5' style={{width:"50%",float:"right"}}>
              <label htmlFor="prep_time">Preparation Time</label>
              <input
                type="input"
                className="form-control"
                id="prep_time"
                value={form.prep_time || ""}
                onChange={(e) => updateForm({ prep_time: e.target.value })}
              />
            </Col>
            </Row>
              <label htmlFor="method">Method</label>
              <input
                type="input"
                className="form-control"
                id="method"
                value={form.method || ""}
                onChange={(e) => updateForm({ method: e.target.value })}
              />
              <label htmlFor="image">Image</label>
              <input
                type="url"
                className="form-control"
                id="image"
                value={form.image || ""}
                onChange={(e) => updateForm({ image: e.target.value })}
              />
              <label htmlFor="category">Select Category</label>
              <select
                type="input"
                className="form-control mb-2"
                id="category"
                value={form.category}
                onChange={(e) => updateForm({ category: e.target.value })}
              >
                <DisplayCategories />
              </select>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Add Ingredients</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <ListGroup variant="flush">
                      {ingredientNames.map((IngName) => (
                        <ListGroup.Item>{IngName}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Row>
                  <Row>
                    <Col>
                      <DisplayIngredients
                        ingredientSelector={ingredientSelector}
                      />
                    </Col>

                    <Col>
                      <input
                        type="text"
                        id="add-ingredient"
                        value="Add Ingredient"
                        className="btn btn-dark mt-2"
                        readOnly={true}
                        onClick={() => addIngredient()}
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="form-group">
              <input
                type="submit"
                id="update-recipe"
                value="Update"
                className="btn btn-dark mt-2 me-1"
              />
              <Button onClick={handleCancelClick} className="btn btn-dark mt-2">
                Cancel
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
