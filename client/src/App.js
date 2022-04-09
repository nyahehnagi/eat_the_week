import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateCategories from "./components/categories/create";
import ShowCategories from "./components/categories/index";
import MyRecipes from "./components/recipes/myRecipes";
import MyIngredients from "./components/ingredients/myIngredients";
import MyUsers from "./components/users/myUsers";
import Logon from "./components/auth/logon";
import Register from "./components/auth/register";
import Navigation from "./components/navigation";
import Footer from "./components/footer"
import "./components/styles.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <div className="App" >
        <h3>{user.name}</h3>
        <Navigation user={user} />
        <div className="d-flex flex-column">
          <div style={{
            paddingBottom: "2.5rem"
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/" element={<ShowCategories />} />
              <Route path="/category/create" element={<CreateCategories />} />
              <Route path="/recipe/" element={<MyRecipes />} />
              <Route path="/ingredient/" element={<MyIngredients />} />
              <Route path="/auth/" element={<Logon />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/user/" element={<MyUsers />} />
            </Routes>
          </div>
        <Footer className="border p-2 mt-auto" style={{
            position: "absolute",
            bottom: "0px",
            left: 0,
            right: 0,
            width: "100%",
            height: "2.5rem",
            textColor: "green" 
        }}
        />
        </div>
      </div>
    </>
  );
};

export default App;
