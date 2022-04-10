import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Row, Col, Container} from "react-bootstrap";
import { Card } from 'react-bootstrap';


export default function DisplayRecipe(props) {
  const [form, setForm] = useState({});
  const [cookies, setCookie] = useCookies();

  // This method will update the state properties.
  // function updateForm(value) {
  //   return setForm((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }

  console.log("Am I in here?")
  console.log(cookies) 
  console.log(props.recipeId)

  useEffect(() => {
    async function fetchData() {
      
      // const response = await fetch(`/recipes/${props.recipeId}`, {
        const response = await fetch(`/recipes/6251681bfc0f623feef05e39`, {
          // const response = await fetch(`/recipes/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })

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
      console.log(recipe)
    }

    fetchData();

    return;
  }, [props.state]);


  console.log(form.name)



  // This following section will display the form that takes the input from the recipe.
  return (
    <div>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Title >
        {form.name}
        </Card.Title> 
        <Card.Text>{form.description}</Card.Text>
      <Card.Body>
      <Container fluid="md">
      {/* <div className="flex mb-5"> */}
      <Row>
      <br/>
      <Col md='6'>
        <Card.Img src={form.image}
        style={{width: 60, height: 60}} alt="Card Image"/> <br/><br/> 
        </Col> 
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{form.category}<span className="text-sm"></span></p>
          <p className="block mb-0">Category</p>
        </div>
        </Col>
        </Row>
        <Row>
        <br/>
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{form.serves}<span className="text-sm"></span></p>
          <p className="block mb-0">Serves</p>
        </div>
        </Col>
        <Col md='6'>
        <div className="mr-4 text-sm w-[100px] h-[100px] text-center border-highlight p-3 border-[1px] flex flex-col justify-center align-middle">
          <p className="block text-xl mb-0">{form.prep_time}<span className="text-sm"> mins</span></p>
          <p className="block mb-0">Prep Time</p>
        </div>
        </Col>
      </Row>
      {/* </div> */}
        </Container>
        <br/>
      </Card.Body>
    </Card>
    <div className="box">
                    <h4>Ingredients</h4>                    
                    <ul className="list-ingredients">
                        <li itemProp="recipeIngredient">120g Homepride unsalted baking spread</li>
                        <li itemProp="recipeIngredient">120g caster sugar</li>
                        <li itemProp="recipeIngredient">120g light brown soft sugar</li>
                        <li itemProp="recipeIngredient">1 egg</li>
                        <li itemProp="recipeIngredient">1tsp vanilla extract</li>
                        <li itemProp="recipeIngredient">250g Homepride self raising flour</li>
                        <li itemProp="recipeIngredient">Pinch of salt</li>
                        <li itemProp="recipeIngredient">100g chocolate chips</li>
                    </ul>
                </div>
              <div className="box box-method" itemProp="recipeInstructions">
                    <h2>Method</h2>   
                    <p>{form.method}</p>
                    {/* <p> 1. Preheat your oven to 180C or 160 fan.</p>
                    <p> 2. Cream together your butter with both sugars until light and fluffy, then crack in your egg and add your vanilla extract making sure to mix in well.</p>
                    <p> 3. Add your flour and a pinch of salt to the mix and a dough will form. You can now fold in your chocolate chips.</p>
                    <p> 4. Weigh your cookie dough into 45g balls, spread them out on a baking tray and push them down a little to help them spread once baking.</p>
                    <p> 5. Bake for around 15 minutes until the sides of the cookies are golden brown. Leave the cookies to cool and firm up and they will become super chewy.</p>
                    <p> 6. They are so fun and easy to make and perfect with a glass of milk. Enjoy!</p> */}
              </div>
    </div>
  );
}
