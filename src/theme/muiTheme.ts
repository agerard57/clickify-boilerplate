import { MuiButton, MuiTypography } from "./styles";

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
    MuiTypography,
    MuiButton,
  },
} as const;
