import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Select from "react-dropdown-select";
import Accordion from './Accordion';

// const Ingredient = (props) => <div>
//                               <p>{props.recipeIngredient.rep_ingredient}&nbsp;&nbsp;{props.recipeIngredient.rep_unit}&nbsp;&nbsp;{props.recipeIngredient.rep_unit}</p>
//                               </div>;

// const repIngredient = props.repIngredient;
// const repUnit = props.recipeIngredient;
// const repIngredient = props.recipeIngredient;

// const repIngredient = props.recipeIngredient;
// const repUnit = props.recipeIngredient;
// const repIngredient = props.recipeIngredient;



const RepInd = {
    rep_ingredient: String,
    rep_unit: String,
    rep_qty: Number, 
  };

export default function Create(props) {

  const [repIngredient, setRepIngredient] = useState({
  });

  // const repUnit = props.recipeIngredient;
  // const repQty = props.recipeIngredient;
  //const repIngredient = props.recipeIngredient;

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
    recipeIngredients: new Array(),
  });

  const [cookies, setCookie] = useCookies();

  // This method will update the state properties.
  function addIngredient(){
  //function addIngredient(props) {
    console.log("HERE WE ARE!!")

    // console.log("WHAT HAPPENING WITH THE LIST BEFORE WE ADD - LENGTH " + recipeIngredients.length);
    // console.log("WHAT HAPPENING WITH THE LIST BEFORE WE ADD - ING " + recipeIngredients[0].rep_ingredient);
    // console.log("WHAT HAPPENING WITH THE LIST BEFORE WE ADD - UNIT " + recipeIngredients[0].rep_unit);
    // console.log("WHAT HAPPENING WITH THE LIST BEFORE WE ADD - QTY " + recipeIngredients[0].rep_qty);
    console.log(form.unit)
    console.log(form.qty)



    console.log(form.ingredient)
    console.log(form.unit)
    console.log(form.qty)

    setForm(form.ingredient, form.ingredient);
    setForm(form.unit, form.unit);
    setForm(form.qty, form.qty);

    // updateForm(repIngredient, form.ingredient);
    // updateForm(repUnit, form.unit);
    // updateForm(repQty, form.qty);
    console.log("form.repIngredient " + form.ingredient)
    console.log("form.repUnit " + form.unit)
    console.log("form.repQty " + form.qty)


    console.log({props});


    //const singleIng = new RegIng();
    recipeIngredient.rep_ingredient = form.ingredient;
    recipeIngredient.rep_unit = form.unit;
    recipeIngredient.rep_qty = form.qty;
    //singleIng[form.ingredient, form.unit, form.qty];
    //updateRecipeIngredient(rep_unit, recipeIngredient.rep_unit);

    console.log("recipeIngredient.rep_ingredient" +  recipeIngredient.rep_ingredient);
    console.log("recipeIngredient.rep_unit" +  recipeIngredient.rep_unit);
    console.log("recipeIngredient.rep_qty" +  recipeIngredient.rep_qty);

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


    // setForm({rep_ingredient: form.ingredient})
    // setForm({rep_unit: form.unit})
    // setForm({rep_qty: form.qty})

    // console.log("form.rep_ingredient " + form.rep_ingredient)
    // console.log("form.rep_unit " + form.rep_unit)
    // console.log("form.rep_qty " + form.rep_unit)

    //setForm(recipeIngredient,  recipeIngredient);

    //setRecipeIngredient({ rep_ingredient: form.ingredient, rep_unit: form.unit, rep_qty: form.qty})
    //setForm({ name: "", ingredient: "Flour", category: "Vegan", unit: "grams", qty: "", });

    //console.log("form.recipeIngredients.length " + form.recipeIngredients.length );
    // console.log("recipeIngredient.rep_ingredient " + form.recipeIngredient.rep_ingredient)
    // console.log("recipeIngredient.rep_unit " + form.recipeIngredient.rep_unit)
    // console.log("recipeIngredient.rep_qty " + form.recipeIngredient.rep_qty)
    //form.recipeIngredients.push(recipeIngredient);

    let pluralIng = new Array();

    if (form.recipeIngredients || !form.recipeIngredients == undefined) {
      console.log("the firms ok");
      pluralIng = form.recipeIngredients;
    }

    //floors.push({ value: floorName });
    console.log("*********recipeIngredient****** " +recipeIngredient);
    console.log("*********recipeIngredient****** ing " +recipeIngredient.rep_ingredient);

    pluralIng.push({ value: recipeIngredient});
    //setForm(recipeIngredients, pluralIng);
    console.log("form.recipeIngredients.length " + form.recipeIngredients.length );

    console.log("form.recipeIngredients[i].ing  " + form.recipeIngredients[0].rep_ingredient );


    // console.log("form.recipeIngredients[0].rep_ingredient " + form.recipeIngredients[0].rep_ingredient );
    
    // console.log("recipeIngredient.rep_ingredient " + recipeIngredient.rep_ingredient)
    // console.log("recipeIngredient.rep_unit " + recipeIngredient.rep_unit)
    // console.log("recipeIngredient.rep_qty " + recipeIngredient.rep_qty)



    for (var i = 0; i < form.recipeIngredients.length; i++) {
      let j = i++;
      console.log("i is " + i);
      let SINGLEME = form.recipeIngredients[i];
      
      console.log("SINGLEME is " + SINGLEME);
      // console.log(j + "JANELUCASrecipeIngredient.rep_ingredient " + SINGLEME.rep_ingredient)
      // console.log(j + "JANELUCASrecipeIngredient.rep_unit " + form.recipeIngredients[i].rep_unit)
      // console.log(j + "JANELUCASrecipeIngredient.rep_qty " + form.recipeIngredients[i].rep_qty)
    } 

    
    //updateForm(recipeIngredients, );

    //form.recipeIngredients.each 


    // for (let i = 0; i < form.recipeIngredients.length; i++) {

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
  

  // function updateRecipeIngredient(value) {
  //   return setRecipeIngredient((prev) => {
  //     return { ...prev, ...value };
  //   });  
  // }

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
                onChange={(e) => updateForm({ ingredient: e.target.value, repIngredient: e.target.value})}
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
                    className="recipeIngredient-control"
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
                onChange={(e) => updateForm({ unit: e.target.value, repUnit: e.target.value })}
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
                  onChange={(e) => updateForm({ qty: e.target.value, repQty: e.target.value })}
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
              <input
                type="text"
                id="add-ingredient"
                value="Add Ingredient"
                className="btn btn-dark mt-2"
                readOnly={true}
                onClick={() => addIngredient()}
              />
              </span> 

              <div id="recipeIngredient"
                  className="form-control"
                  value={form.recipeIngredient}
                 >

              </div> 
              <div id="recipeIngredients"
                  className="form-control"
                  value={form.recipeIngredients}
                 >

              </div>


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
