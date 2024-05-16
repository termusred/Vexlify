import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./constants/theme";
import { LightTheme } from "./constants/theme";

import "bootstrap/dist/css/bootstrap.min.css";
const [userOpinion , setUseropinion] = useState("dark")
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={userOpinion == "light" ? DarkTheme : LightTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
