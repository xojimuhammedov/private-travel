import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import "./18n";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
