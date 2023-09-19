import React from "react";
import ReactDom from "react-dom/client";
import App from "../src/components/App.jsx";

import { BrowserRouter } from "react-router-dom";
import "./sass/header.scss";
import "./sass/counter.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
