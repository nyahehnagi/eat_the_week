import React, { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { Accordion, ListGroup, Row, Col, Dropdown, Button } from "react-bootstrap";
import DisplayIngredients from "../ingredients/display";
import DisplayCategories  from "../categories/display";

export default function Create(props) {

  const [ingredients, setIngredients] = useState([]);
  const [ingredientNames, setingredientNames] = useState([]);
  const ingredientSelector = useRef(null);

  const [form, setForm] = useState({
    name: "",
    // ingredient: "Flour",
    category: "Vegan",
    unit: "grams",
    qty: "",
    ingredients: [],
  });

  const [cookies, setCookie] = useCookies();


  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }  

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, add a new record to the database.
    const recipe = { ...form };

    console.log("Create Recipe", JSON.stringify({ recipe }))

    await fetch("/recipes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe }),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", ingredient: "Flour", category: "Vegan" });
    props.setReload(!props.state);
  }


  const Ingredient = [
    { name: "Flour", id: "6254a24ceb3173338861dcbc" },
    { name: "Milk", id: "6254a29feb3173338861dcc8" },
    { name: "Sugar", id: "6254a25eeb3173338861dcc4" },
    { name: "Bacon", id: "624d9ef90a9f056d390fccc2" },
    { name: "Eggs", id: "6254a257eb3173338861dcc0" },
  ];
  const Category = [
    { label: "Vegan", value: 1 },
    { label: "BBQ", value: 2 },
    { label: "Wheat Free", value: 3 },
  ];


  // This method will update the state properties.
  function addIngredient(){
    const name = ingredientSelector.current.value
    const selectedIndex = ingredientSelector.current.options.selectedIndex
    const ingredient_id = ingredientSelector.current.options[selectedIndex].getAttribute('ing_id')
    
    setingredientNames(ingredientNames.concat(name))
    setIngredients(ingredients.concat(ingredient_id))
    updateForm({ ingredients : ingredients })
  }

  // This following section will display the form that takes the input from the recipe.
  return (
    <div className="container-sm">
      <Row>
        <Col className="d-flex justify-content-center">
          <h3>Create Recipe</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Recipe Name</label>
              <input
                type="input"
                className="form-control"
                id="name"
                value={form.name}
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
              <label htmlFor="serves">Serves</label>
              <input
                type="input"
                className="form-control"
                id="serves"
                value={form.serves || ""}
                onChange={(e) => updateForm({ serves: e.target.value })}
              />
              <label htmlFor="prep_time">Preparation Time</label>
              <input
                type="input"
                className="form-control"
                id="prep_time"
                value={form.prep_time || ""}
                onChange={(e) => updateForm({ prep_time: e.target.value })}
              />
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
                onChange={(e) => updateForm({ category: e.target.value })}>
                < DisplayCategories />
              </select>

            </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Ingredients</Accordion.Header>
              <Accordion.Body>
                <Row>
                <ListGroup variant="flush">
                  {ingredientNames.map((IngName) => (
                        <ListGroup.Item >{IngName}</ListGroup.Item>
                      ))}
                </ListGroup>
                </Row>
                <Row>
                  <Col>
                   < DisplayIngredients ingredientSelector={ingredientSelector}/>
                    {/* <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                      value={form.ingredient}
                      id="ingredient"
                      ref={ingredientSelector}
                      >

                      <option selected>Select Ingredient</option>
                      {Ingredient.map((ingredient) => (
                        <option value={ingredient.name} key={ingredient.id} ing_id={ingredient.id}>{ingredient.name}</option>
                      ))}
                
                    </select> */}
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
                id="create-recipe"
                value="Create Recipe"
                className="btn btn-dark mt-2"
              />
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
