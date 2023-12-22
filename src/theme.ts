import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    tablet: true;
    laptop: true;
    desktop: true;
    xxl: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#276ef1",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 375,
      lg: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
      xl: 1920,
      xxl: 2560,
    },
  },
});

export default theme;
