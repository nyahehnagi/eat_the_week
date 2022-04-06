import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateRecipe from "./components/recipes/create";
import ShowRecipes from "./components/recipes/index";
import ShowIngredients from "./components/ingredients/index";
import Logon from "./components/auth/create";
import Register from "./components/auth/register";
import Navigation from "./components/navigation"

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/create" element={<CreateRecipe />} />
        <Route path="/recipe/" element={<ShowRecipes />} />
        <Route path="/ingredient/" element={<ShowIngredients />} />
        <Route path="/auth/" element={<Logon />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
