import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateRecipe from "./components/recipes/create";
import ShowRecipes from "./components/recipes/index";
import ShowIngredients from "./components/ingredients/index";
import CreateIngredients from "./components/ingredients/create";
import Logon from "./components/auth/create";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/create" element={<CreateRecipe />} />
        <Route path="/recipe/" element={<ShowRecipes />} />
        <Route path="/ingredient/" element={<ShowIngredients />} />
        <Route path="/ingredient/create" element={<CreateIngredients />} />
        <Route path="/auth/" element={<Logon />} />
      </Routes>
    </div>
  );
};

export default App;
