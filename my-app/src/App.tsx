import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { spacing } from "@mui/system";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { en } from "make-plural/plurals"; // Plural rules for English
// import { messages } from "../locales/messages";
import { Trans } from "@lingui/macro";

// i18n.loadLocaleData("en", { plurals: en });
// i18n.load("en", messages);
// i18n.activate("en");
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 767,
      lg: 1200,
      xl: 1920,
    },
  },
  // spacing: {
  //   xs: "12 px",
  //   sm: "38 px",
  //   md: "40 px",
  //   lg: "82 px",
  //   xl: "100 px",
  // },

  palette: {
    primary: {
      main: "#f48982",
    },
    secondary: {
      main: "#fbdb89",
    },

    info: {
      main: "#918581",
    },

    background: {
      default: "#ffff",
      paper: "#f9f5f3",
    },
  },

  typography: {
    fontFamily: "Nunito Sans, sans-serif",

    h1: {
      fontSize: "10px",
      color: "#f9f5f3",
      fontWeight: "400",
    },

    h2: {
      fontSize: "32.5px",
      color: "#f48982",
      fontWeight: "700",
    },
    h3: {
      fontSize: "20px",
      color: "#f48982",
      fontWeight: "700",
    },
    h4: {
      fontSize: "20px",
      color: "#f48982",
      fontWeight: "700",
    },
    body1: {
      fontSize: "12px",
      color: "#918581",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
