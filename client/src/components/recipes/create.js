import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Select from "react-dropdown-select";
import Accordion from './Accordion';
import { Button } from "react-bootstrap";


const Ingredient = (props) => <div>
                              <p>{props.recipeIngredient.rep_ingredient}&nbsp;&nbsp;{props.recipeIngredient.rep_unit}&nbsp;&nbsp;{props.recipeIngredient.rep_unit}</p>
                              </div>;

// const repIngredient = props.repIngredient;
// const repUnit = props.recipeIngredient;
// const repIngredient = props.recipeIngredient;

// const repIngredient = props.recipeIngredient;
// const repUnit = props.recipeIngredient;
// const repIngredient = props.recipeIngredient;

export default function Create(props) {

  // const [repipeIngredients, setRepiceIngredients] = useState({ 
  // });


  // const repIngredient = props.recipeIngredient.rep_ingredient
  // const repUnit = props.recipeIngredient.rep_unit;
  // const repQty = props.recipeIngredient.rep_qty;


  //const repIngredient = props.recipeIngredient;

  //const [ingredients, setIngredients] = useState([]);

  const [recipeIngredient, setRecipeIngredient] = useState(
    ("", "", ""));
    
  const [repipeIngredients, setRepiceIngredients] = useState([]);


  const [form, setForm] = useState({
    name: "",
    ingredient: "Flour",
    category: "Vegan",
    unit: "grams",
    qty: "",
    recipeIngredient: ["", "", ""],
    repIngredient: "",
    repUnit: "",
    repQty: "",
    recipeIngredients: [],
  });

  const [cookies, setCookie] = useCookies();

  // This method will update the state properties.
  function AddIngredient(){
  //function addIngredient(props) {
    console.log("HERE WE ARE!!")
    console.log(form.ingredient)
    console.log(form.unit)
    console.log(form.qty)
    //updateForm(repIngredient, form.ingredient);
    // updateForm(repIngredient, form.ingredient);
    // updateForm(repUnit, form.unit);
    // updateForm(repQty, form.qty);



    // updateForm(repIngredient, form.ingredient);
    // updateForm(repUnit, form.unit);
    // updateForm(repQty, form.qty);
    // console.log("form.repIngredient " + form.repIngredient)
    // console.log("form.repUnit " + form.repUnit)
    // console.log("form.repQty " + form.repQty)

   




    //updateRecipeIngredient(rep_unit, recipeIngredient.rep_unit);

    //const planner = await response.json();
    //props.setPlanner(planner)

    // repIngredient = form.ingredient;
    // props.setRepIngredient(repIngredient);
    // let repUnit = form.unit;
    // props.setRepUnit(repUnit);
    // let repQty = form.qty;
    // props.setRepQty(repQty);
    
    // console.log("repIngredient " + props.repIngredient);
    // console.log("repUnit " + props.repUnit);
    // console.log("repQty " + props.repQty);


 
    console.log("form.recipeIngredients.length " + form.recipeIngredients.length );
    console.log("recipeIngredient.rep_ingredient " + recipeIngredient.rep_ingredient)
    console.log("recipeIngredient.rep_unit " + recipeIngredient.rep_unit)
    console.log("recipeIngredient.rep_qty " + recipeIngredient.rep_qty)
   
    // if (form.recipeIngredients == undefined) {
    //   form.recipeIngredients = [];
    // }

    //const janeIngredients
    //setForm({recipeIngredients: form.recipeIngredients.push(form.recipeIngredient)})
    console.log("form.recipeIngredients.length " + form.recipeIngredients.length );


    
    console.log("recipeIngredient.rep_ingredient " + recipeIngredient.rep_ingredient)
    console.log("recipeIngredient.rep_unit " + recipeIngredient.rep_unit)
    console.log("recipeIngredient.rep_qty " + recipeIngredient.rep_qty)

    //updateForm({ rep_Ingredient.rep_ingedient: [form.ingredient, form.unit, form.qty]})

    //updateForm({ repcipeIngredient: [form.ingredient, form.unit, form.qty]})

    console.log("WHIZZO");

    console.log("recipeIngredients ",  form.recipeIngredients);


    // function updateIngredients(ingredient, unit, qty) {
    //   console.log("ZZZZZZZZZ");
    //   form.recipeIngredients.push([ingredient, unit, qty])
    // }

    const updateIngredients = (ingredient, unit, qty) => {
      form.recipeIngredients.push([ingredient, unit, qty]) 
    };


    // props.setRecipeId("")
    // props.setReload(!props.state);
    //form.recipeIngredients.function push([form.ingredient, form.unit, form.qty])

    //                         updateForm({recipeIngredients: form.recipeIngredients.push([form.ingredient, form.unit, form.qty])})

    console.log("BIZZO");

    // for (var i = 0; i < form.recipeIngredients.length; i++) {
    //   let j = i++;
    //   console.log(i + "JANELUCASrecipeIngredient.rep_ingredient " + form.recipeIngredients[i].recipeIngredient.rep_ingredient)
    //   console.log(i + "JANELUCASrecipeIngredient.rep_unit " + form.recipeIngredients[i].recipeIngredient.rep_unit)
    //   console.log(i + "JANELUCASrecipeIngredient.rep_qty " + form.recipeIngredients[i].recipeIngredient.rep_qty)
    // } 



    // let count = form.recipeIngredients.length;
    // let z = 3;
    // form.recipeIngredients[count][0] = form.ingredient;
    // form.recipeIngredients[count][1] = form.unit;
    // form.recipeIngredients[count][2] = form.qty;
    
    
    for(var i=0; i < form.recipeIngredients.length; i++) {
      let count = form.recipeIngredients.length;
      console.log("LENGTH " + count)
      let innerCount = form.recipeIngredients[i].length;
      console.log("INNER LENGTH " + innerCount);
      for(var j=0; j < form.recipeIngredients[i].length; j++) {
        if ( j == 0) {
        //console.log("INGREDIENT: " + form.recipeIngredients[i][j])
        form.recipeIngredients[i][j] = form.ingredient;
        }
        if ( j == 1) {
        //console.log("UNIT: " + form.recipeIngredients[i][j])
        form.recipeIngredients[i][j] = form.unit;
        }
        if ( j == 2) {
        //console.log("QTY: " + form.recipeIngredients[i][j])
        form.recipeIngredients[i][j] = form.qty
        }
        //form.recipeIngredients[i][j] = 0;
       
      }

    }
    
      
    for(var x=0; x < form.recipeIngredients.length; x++) {
      let count = form.recipeIngredients.length;
      console.log("LENGTH " + count)
      let innerCount = form.recipeIngredients[x].length;
      console.log("INNER LENGTH " + innerCount);
      for(var y=0; y < form.recipeIngredients[x].length; y++) {
        if ( y == 0) {
        console.log("INGREDIENT: " + form.recipeIngredients[x][y])
        //form.recipeIngredients[i][j] = form.ingredient;
        }
        if ( y == 1) {
        console.log("UNIT: " + form.recipeIngredients[x][y])
        //form.recipeIngredients[i][j] = form.unit;
        }
        if ( y == 2) {
        //console.log("QTY: " + form.recipeIngredients[i][j])
        form.recipeIngredients[x][y] = form.qty
        }
        //form.recipeIngredients[i][j] = 0;
       
      }

    }

    //updateForm(recipeIngredients, );

    //form.recipeIngredients.each 


    // for (let i = 0; i < form.recipeIngredients.lenth; i++) {

    //   console.log(i + "JANELUCASTWOrecipeIngredient.rep_ingredient " + form.recipeIngredients[i].rep_ingredient)
    //   console.log(i + "JANELUCASTWOrecipeIngredient.rep_unit " + form.recipeIngredients[i].rep_unit)
    //   console.log(i + "JANELUCASTWOrecipeIngredient.rep_qty " + form.recipeIngredients[i].rep_qty)
    // } 

    //return;

    }

    // This method will map out the ingredients
    // function ingredientList() {
    //   console.log("BUILDING HTML form.recipeIngredients.length " + form.recipeIngredients.length );
    //   let i = 0; 
    //   return form.recipeIngredients.map((ingredient, i) => {
    //     return <Ingredient  key={i.toString} rep_ingredient={ingredient.rep_ingredient} rep_unit={ingredient.rep_unit} rep_qty={ingredient.rep_qty.toString}/>;
    //   });
    // }

  // This method will update the state properties.
  

  function updateRecipeIngredient(value) {
    return setRecipeIngredient((prev) => {
      return { ...prev, ...value };
    });  
  }

  // function updateRecipeIngredients(value) {
  //   return setRecipeIngredient((prev) => {
  //     return { ...prev, ...value };
  //   });  
  // }
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }  

  // function updateRecipeIngredient(value) {
  //   return setRecipeIngredient((prev) => {
  //     return { ...prev, ...value };
  //   });  
  // }
  
  // // This method will map out the ingredients
  // function ingredientList() {
  //   console.log("BUILDING HTML form.recipeIngredients.length " + form.recipeIngredients.length );
  //   let i = 0; 
  //   return form.recipeIngredients.map((ingredient, i) => {
  //     return <Ingredient  key={i.toString} rep_ingredient={ingredient.rep_ingredient} rep_unit={ingredient.rep_unit} rep_qty={ingredient.rep_qty.toString}/>;
  //   });

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

  //const [showDiv, setShowDiv] = useState(false);
  const [isActive, setIsActive] = useState(false);
  //const [hasIngredients, setHasIngredients] = useState(false);

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
            className="form-control"
            id="category"
            ismulti={true}
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          >
            {Category.map((category) => (
              <option value={category.label}>{category.label}</option>
            ))}
          </select>
          
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
              <div style={{position: 'absolute', width: '200px', left: 52}}>Add Ingredients&nbsp;&nbsp;&nbsp;{isActive ? '-' : '+'}</div>
              <div>{isActive ? '-' : '+'}</div>
            </div>
          
            {isActive && 
          
            <div>

              <span className="float-left" style={{position: 'absolute', width: '200px', left: 52, vericalAlign: 'top'}}>
              <label htmlFor="ingredient"></label>
              Select Ingredient
              <select
                type="input"
                className="form-control"
                id="ingredient"
                isMulti={true}
                value={form.ingredient}
                onChange={(e) => {updateForm({ ingredient: e.target.value, repIngredient: e.target.value});
                                  updateRecipeIngredient({ rep_ingredient: e.target.value})}}
              >
                {Ingredient.map((ingredient) => (
                  <option value={ingredient.label}>{ingredient.label}</option>
                ))}
              </select>
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="repIngredient"
                    value={form.ingredient}></div>
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="rep_ingredient"
                    value={form.ingredient}></div>
              </span>

              <span className="float-center" style={{position: 'absolute', width: '100px', right: 1050, vericalAlign: 'top'}}>
              <label htmlFor="unit"></label>
              Select Unit
              <select
                type="input"
                className="form-control"
                id="unit"
                isMulti={true}
                value={form.unit}
                onChange={(e) => {updateForm({ unit: e.target.value, repUnit: e.target.value });
                                  updateRecipeIngredient({ rep_unit: e.target.value})}}
              >
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="repUnit"
                    value={form.unit}></div>
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="recipeIngredient.rep_unit"
                    value={form.unit}></div>
                {Unit.map((unit) => (
                  <option value={unit.label}>{unit.label}</option>
                ))}
              </select>
             
              </span>

              <span className="float-right" style={{position: 'absolute', width: '100px', right: 900, vericalAlign: 'top'}}>
                <label htmlFor="qty">Quantity</label>
                <input
                  type="input"
                  className="form-control"
                  style={{textAlign: 'right'}}
                  id="qty"
                  value={form.qty || ""}
                  onChange={(e) => {updateForm({ qty: e.target.value, repQty: e.target.value });
                                    updateRecipeIngredient({ rep_qty: e.target.value})}}
                />
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="repQty"
                    value={form.qty}></div>
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="rep_qty"
                    value={form.qty}></div>
              </span> 

              <span className="float-right" style={{position: 'absolute', width: '80px', right: 750, vericalAlign: 'top'}}>
              <p></p>



              {/* <div>
              <button className="form-group" id="recipeIngredients" onClick={() => {updateForm({ recipeIngredients: form.recipeIngredients.push() });
                                    AddIngredient()}}>Add Ingredient</button>;
              </div> */}
              <div className="form-group">
                <input
                type="text"
                id="recipeIngredients"

                value="AddIngredient"
                className="btn btn-primary form-group"
                />
                  <button type="default" onClick={updateIngredients(form.ingredient, form.unit, form.qty)}>
                                          
                  Add Ingredient
                </button>
              </div>


              onChange={(e) => {updateForm({ qty: e.target.value, repQty: e.target.value });
                                    updateRecipeIngredient({ rep_qty: e.target.value})}}
                


            {/* <div className="form-group">
              <input
                type="submit"
                id="recipeIngredients"
                value="Add Ingredient"
                className="form-group"
                readOnly={true}
                //onClick={() => AddIngredient()}

                onClick={() => {updateForm({ recipeIngredients: form.recipeIngredients.push(form.recipeIngredient) });
                                    AddIngredient()}}
              />
              <div style={{display: 'none'}} 
                    className="form-control"
                    id="rep_qty"
                    value={form.qty}></div>
              </div>       */}
              </span> 

              {/* <div id="recipeIngredients"
                  className="form-control"
                  value={form.recipeIngredients}
                 > */}

              {/* </div> */}


              {/* <div>
                <h3>Ingredients</h3>
                <div id="ingredientList">{ingredientList()}</div>
              </div> */}


            </div>
            
            
            }
{/* 
            {hasIngredients &&
              <div>
              {form.ingredient}&nbsp;{form.unit}&nbsp;{form.qty}
              </div> 
            } */}
              
        {!isActive && 

          <div className="form-group">
            <input
              type="submit"
              id="create-recipe"
              value="Create Recipe"
              className="btn btn-dark mt-2"
            />
          </div>
        }
        </div>
        </div>
      </form>
    </div>
  );
}
