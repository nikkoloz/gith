import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { AppContextProvider } from "./context/AppContext.js";
import { AuthContextProvider } from "./context/AuthContext.js";
const root = createRoot(document.querySelector("#root"));
root.render(
  <AuthContextProvider>
    <AppContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </AppContextProvider>
  </AuthContextProvider>
);
