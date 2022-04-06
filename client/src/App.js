import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import MyRecipes from "./components/recipes/myRecipes";
import ShowIngredients from "./components/ingredients/index";
import CreateIngredients from "./components/ingredients/create";
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
        <Route path="/recipe/" element={<MyRecipes />} />
        <Route path="/ingredient/" element={<ShowIngredients />} />
        <Route path="/ingredient/create" element={<CreateIngredients />} />
        <Route path="/auth/" element={<Logon />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
