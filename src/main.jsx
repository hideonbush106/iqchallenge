import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { createTheme } from "styled-breakpoints";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
});

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    <ToastContainer/>
  </React.StrictMode>
);
