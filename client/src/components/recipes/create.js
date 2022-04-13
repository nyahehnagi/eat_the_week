import React, { useState, useRef, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Accordion, ListGroup, Row, Col, Badge } from "react-bootstrap";
import DisplayIngredients from "../ingredients/display";
import DisplayCategories from "../categories/display";

export default function Create(props) {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientNames, setingredientNames] = useState([]);
  const ingredientSelector = useRef(null);

  const [form, setForm] = useState({
    name: "",
    category: "Favourite",
    unit: "grams",
    qty: "",
    ingredients: [{}],
    ingredientNames: []
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

    const recipe = { ...form };
    
    console.log("recipe", JSON.stringify({ recipe }) )

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

  useEffect(() => {
    updateForm({ ingredients: ingredients });
    updateForm({ ingredientNames: ingredientNames });
  }, [ingredientNames.length]);

  const addIngredient = () => {
    //const name = ingredientSelector.current.value;
    
    const totalqty = form.qty + " "
    const name = totalqty + ingredientSelector.current.value;
    const selectedIndex = ingredientSelector.current.options.selectedIndex;
    const ingredientId =
      ingredientSelector.current.options[selectedIndex].getAttribute("ing_id");
      console.log(ingredientNames)

    setingredientNames(ingredientNames.concat(name));
    setIngredients(ingredients.concat({ ingredient_id: ingredientId }));
  };

  const removeIngredient = (index) => {
    setingredientNames(ingredientNames.filter((_, idx) => idx != index));
    setIngredients(ingredients.filter((_, idx) => idx != index));
  };

  const handleBadgeClick = (e) => {
    var eventkey = e.target.getAttribute("eventkey");
    removeIngredient(eventkey);
  };

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
              <Row>
                <Col md="5" style={{ width: "50%", float: "left" }}>
                  <label htmlFor="serves">Serves</label>
                  <input
                    type="input"
                    className="form-control"
                    id="serves"
                    value={form.serves || ""}
                    onChange={(e) => updateForm({ serves: e.target.value })}
                  />
                </Col>
                <Col md="5" style={{ width: "50%", float: "right" }}>
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
                <Accordion.Header>Ingredients</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <ListGroup variant="flush">
                      {ingredientNames.map((IngName, index) => (
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                          {IngName}
                          <Badge
                            eventkey={index}
                            bg="dark"
                            pill
                            onClick={handleBadgeClick}
                          >
                            X
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Row>
                  <Row>
                    <Col >
                    {/* <label htmlFor="qty">Ingredient</label> */}
                      <DisplayIngredients
                        ingredientSelector={ingredientSelector}
                      />
                    </Col>
                    <Col className="">
                      {/* <label htmlFor="qty">Quantity</label> */}
                        <input
                        type="input"
                        className="form-control"
                        id="qty"
                        value={form.qty}
                        onChange={(e) => updateForm({ qty: e.target.value })}
                        />
                    </Col>

                    <Col>
                      <input
                        type="text"
                        id="add-ingredient"
                        value="Add"
                        className="btn btn-dark btn-sm w-50 pb-2"
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
