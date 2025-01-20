import { createTheme } from "@mui/material";

export const THEME = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      light: "#9778ff",
      main: "#1b00a3",
      dark: "#0d0061",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#ffffff",
    },
    background: {
      default: "#1b00a3",
      paper: "#ffffff",
    },
  },
});