import { colorPalette } from "./colorPalette";

export const appTheme = {
  app: {
    core: {},
    testPage: {
      textColor: colorPalette.blue,
    },
  },
};

declare module "@mui/material" {
  interface Theme {
    app: typeof appTheme.app;
  }

  interface ThemeOptions {
    app?: typeof appTheme.app;
  }
}
