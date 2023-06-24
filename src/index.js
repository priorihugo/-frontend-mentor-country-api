import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import GlobalStyle from "./styles/global";
import { MyThemeProvider } from "./context/MyThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <HomePage />
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
