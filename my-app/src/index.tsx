import { css } from "@emotion/css";
import Typography from "@mui/material/Typography";

import * as React from "react";
import { Box, ThemeProvider } from "@mui/system";

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
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
