"use client";
import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";

import typography from "./typography";

let theme: Theme;

theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BBADFF",
    },
    secondary: {
      main: "#6D76EE",
    },
  },
  typography,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
