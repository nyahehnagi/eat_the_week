import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
