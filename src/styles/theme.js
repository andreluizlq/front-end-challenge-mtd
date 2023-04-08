import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#600594",
    },
    secondary: {
      main: "#2a0b3c",
    },
    error: {
      main: "#ff5252",
    },
    success: {
      main: "#35C979",
    },
  },
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#2a0b3c",
          fontWeight: "600",
        },
      },
    },
  },
});

export default theme;
