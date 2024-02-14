import { css } from "@emotion/css";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/system";

export default function BoxSx() {
  const theme = createTheme();
  return {
    palette: {
      primary: {
        main: "#f48982",
      },
      secondary: {
        main: "#fbdb89",
      },
    },
  };
  <div>
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
    </Box>
    ;
  </div>;
}
