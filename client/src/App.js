import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
 };


export default App;