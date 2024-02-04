import React from "react";
import "./App.css";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { LocalizatorProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { spacing } from '@mui/system'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 767,
        lg: 1200,
        xl: 1920,
      },

      spacing: { 
        xs: 15px,
        sm: 38px,
        md: 40px,
        lg: 82px,
        xl: 100px,
      

  },
},
  palette: {
    primary: {
      main: '#f48982',
    },
    secondary: {
      main: '#fbdb89',
    },

    info:{
      main:'#918581'
    },

    background:{
      main:"#ffff"
      darker:"#f9f5f3"
    }

    typography:{
      fontFamily:['Nunito Sans, sans-serif'],
    
      h1:{
      fontSize: "10px",
      color:"#f9f5f3",
      fontWeight:"400",
      letterSpacing:"1.6px"
      }

      h2: {
        fontSize: "32.5px",
        color:'#f48982',
        fontWeight:"700",
        letterSpacing:"1.6px"
      },
      h3: {
        fontSize: "20px",
        color:'#f48982',
        fontWeight:"700",
        letterSpacing:"1.6px"
      },
      h4: {
        fontSize: "20px",
        color:'#f48982',
        fontWeight:"700",
        letterSpacing:"1.6px"
      },
      p: {
        fontSize: "12px",
        color: "#918581",
        letterSpacing: "1.6px",
      },
     

    }
  },);


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
         </ThemeProvider>
    >
    >
    >
)
