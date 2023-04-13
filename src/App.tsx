import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import CannabisForm from "./components/CannabisForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "#707070",
    },
    secondary: {
      main: "#94AB8A",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h2 className="header_text">REDEEM YOUR CANNABIS RECIPE HERE</h2>
        <CannabisForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
