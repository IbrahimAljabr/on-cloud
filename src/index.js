import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/shared/Header";
import UserProvider from "./contexts/UserContext";
import GlobalStyles from "./styles/global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
    <UserProvider>
    <Header />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

  