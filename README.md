# Eat The Week

---
___
## Tech Used

- Javascript with Node
- Mongodb
- Express
- React
- Jest - Unit Testing
- Cypress - Integration Testing
- Prettier - Linting
- Bootstrap/CSS - Look and Feel

## Installation

---

Install node via your favourite package manager if required, see [here](https://nodejs.org/en/ "Node") for more details

To install this code from the latest source


If you have SSH setup:
```
$> git clone git@github.com:nyahehnagi/eat_the_week.git
```

Otherwise:

```
$> git clone https://github.com/nyahehnagi/eat_the_week.git

```

Install package dependancies

```
// From root of project
$> npm install
// change to client directory
$> cd client
$> npm install

```
To run locally

~~~~
// from root of project
$> npm start // this starts the express server
// In a new terminal, change directory to the react client
$> cd client
$> npm start
~~~~
Navigate to http://localhost:3000/

## Testing

---

To run tests

```
// Jest tests
$> npx jest

//Cypress Integration tests
$> npm run test:integration

```

# REST API

## Recipe

GET /recipes

Returns a list of all recipes.
~~~
curl "http://localhost:4000/recipes"
~~~
On success, the above command returns JSON structured like this:

[
  {
    "name": "sausage sandwich",
    "created_at": "2018-06-23T13:21:23.317Z",
    "updated_at": "2018-06-23T13:21:23.317Z"
  }
]

POST /recipes

Creates a new Recipe.

~~~
 curl "http://localhost:4000/recipes"   -X POST   -H "Content-Type: application/json"   -d '{"recipe": {"name":"beans on toast"}}
~~~

## MVP

The functionality we expect for the MVP is:

* Sign Up
* Login
* Logout
* Show Ingredients
* Create Recipe

# Future Enhancements

Longer term we would like the following functionality:

* Associate recipes with a customer profile
* Create weekly planner of meals
* Auto-add items from a recipe to the basket
* Mock checkout
* Pre-created recipes to help people be creative with their cooking!
* Make recipe selections seasonal
* Identify Vegan/Vegetarian/allergy safe recipes
* Enhanced profile (add dietary requirements)
* Handle substitutions/out of stock items
