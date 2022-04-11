import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import MyRecipes from "./components/recipes/myRecipes";
import MyIngredients from "./components/ingredients/myIngredients";
import MyUsers from "./components/users/myUsers";
import Logon from "./components/auth/logon";
import Register from "./components/auth/register";
import Navigation from "./components/navigation";
import MyUnits from "./components/units/myUnits";
import MyCategories from "./components/categories/myCategories";
import SearchRec from "./components/findrecipes/searchRec";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <div className="App">
        <h3>{user.name}</h3>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/" element={<MyRecipes />} />
          <Route path="/ingredient/" element={<MyIngredients />} />
          <Route path="/auth/" element={<Logon />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/user/" element={<MyUsers />} />
          <Route path="/unit/" element={<MyUnits />} />
          <Route path="/category/" element={<MyCategories />} />
          <Route path="/findrecipe/" element={<SearchRec />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
