import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";
import { thisTypeAnnotation } from "@babel/types";

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);


ha huy this