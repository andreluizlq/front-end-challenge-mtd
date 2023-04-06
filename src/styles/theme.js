import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#191919",
    },
    secondary: {
      main: "#292929",
    },
    error: {
      main: "#F23F44",
    },
    success: {
      main: "#35C979",
    },
  },
  typography: {
    fontFamily: ["Lexend Deca", "sans-serif"].join(","),
  },
});

export default theme;
