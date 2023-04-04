import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0E71B3",
    },
    secondary: {
      main: "#3699FF",
    },
    error: {
      main: "#F23F44",
    },
    success: {
      main: "#35C979",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
