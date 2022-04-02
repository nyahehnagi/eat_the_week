import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateRecipe from "./components/recipes/create";
import ShowRecipes from "./components/recipes/index";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/new" element={<CreateRecipe />} />
        <Route path="/recipes/" element={<ShowRecipes />} />
      </Routes>
    </div>
  );
 };


export default App;