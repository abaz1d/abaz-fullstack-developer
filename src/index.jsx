import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);