import { css } from "@emotion/css";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/system";

export default function BoxSx() {
  return (
    const theme = createTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
      },
    });
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
    </ThemeProvider>
  );

  <Box sx={{ width: "100%", maxWidth: 500 }}>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
  </Box>;
}
