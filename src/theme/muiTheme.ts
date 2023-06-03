import { colorPalette } from "./colorPalette";

export const muiTheme = {
  palette: {
    primary: {
      main: "#620000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: 140,
          fontWeightLight: 600,
          color: colorPalette.primaryBlack,
        },
      },
    },
  },
};
