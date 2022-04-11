import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Accordion, ListGroup, Row, Col, Dropdown, Button } from "react-bootstrap";


const RepInd = {
    rep_ingredient: String,
    rep_unit: String,
    rep_qty: Number, 
  };

export default function Create(props) {

  const [repIngredient, setRepIngredient] = useState({
  });

  const [recipeIngredient, setRecipeIngredient] = useState({
    rep_ingredient: "",
    rep_unit: "",
    rep_qty: "",
  });

  const [form, setForm] = useState({
    name: "",
    ingredient: "Flour",
    category: "Vegan",
    unit: "grams",
    qty: "",
    recipeIngredient: recipeIngredient,
    repIngredient: "",
    repUnit: "",
    repQty: "",
    recipeIngredients: [],
  });

  const [cookies, setCookie] = useCookies();

  // This method will update the state properties.
  function addIngredient(){

    setForm(form.ingredient, form.ingredient);
    setForm(form.unit, form.unit);
    setForm(form.qty, form.qty);


    recipeIngredient.rep_ingredient = form.ingredient;
    recipeIngredient.rep_unit = form.unit;
    recipeIngredient.rep_qty = form.qty;

    let pluralIng = new Array();

    if (form.recipeIngredients || !form.recipeIngredients == undefined) {
      console.log("the firms ok");
      pluralIng = form.recipeIngredients;
    }

    pluralIng.push({ value: recipeIngredient});

    for (var i = 0; i < form.recipeIngredients.length; i++) {
      let j = i++;
      let SINGLEME = form.recipeIngredients[i]; 
    } 
  }


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

    console.log("HELLO");

    setForm({ name: "", ingredient: "Flour", category: "Vegan", unit: "grams", qty: "", });
    props.setReload(!props.state);
  }

  const Ingredient = [
    { label: "Flour", value: 1 },
    { label: "Milk", value: 2 },
    { label: "Sugar", value: 3 },
    { label: "Salt", value: 4 },
    { label: "Eggs", value: 5 },
  ];
  const Category = [
    { label: "Vegan", value: 1 },
    { label: "BBQ", value: 2 },
    { label: "Wheat Free", value: 3 },
  ];
  const Unit = [
    { label: "grams", value: 1 },
    { label: "oz", value: 2 },
    { label: "lb", value: 3 },
    { label: "each", value: 4 },
  ];

  const [isActive, setIsActive] = useState(false);

  // This following section will display the form that takes the input from the recipe.
  return (
    <div>
      <h3>Create Recipe</h3>
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
            type="file"
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
            ismulti={true}
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          >
            {Category.map((category) => (
              <option value={category.label}>{category.label}</option>
            ))}
          </select>
          
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Ingredients</Accordion.Header>
              <Accordion.Body>
                <Row>
                <ListGroup variant="flush">
                  <ListGroup.Item>Eggs</ListGroup.Item>
                  <ListGroup.Item>Flour</ListGroup.Item>
                </ListGroup>
                </Row>
                <Row>
                  <Col>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                      value={form.ingredient}
                      id="ingredient"
                      onChange={(e) => updateForm({ ingredient: e.target.value, repIngredient: e.target.value})}>

                      <option selected>Select Ingredient</option>
                      {Ingredient.map((ingredient) => (
                        <option value={ingredient.label}>{ingredient.label}</option>
                      ))}
                  
                    </select>
                    
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
        
        </div>
      </form>
    </div>
  );
}
