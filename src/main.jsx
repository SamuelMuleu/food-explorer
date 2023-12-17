import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/global.js";
import { SigIn } from "./pages/SignIn/index.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles />
      <App />
      <SigIn />
    </ThemeProvider>
  </React.StrictMode>
);
