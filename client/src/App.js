import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateCategories from "./components/categories/create";
import ShowCategories from "./components/categories/index";
import MyRecipes from "./components/recipes/myRecipes";
import MyIngredients from "./components/ingredients/myIngredients";
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
        <Route path="/category/" element={<ShowCategories />} />
        <Route path="/category/create" element={<CreateCategories />} />
        <Route path="/recipe/" element={<MyRecipes />} />
        <Route path="/ingredient/" element={<MyIngredients />} />
        <Route path="/auth/" element={<Logon />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
