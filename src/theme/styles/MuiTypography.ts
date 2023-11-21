import { colorPalette } from "../colorPalette";
import { TypographyVariants } from "../typings";

export const MuiTypography = {
  styleOverrides: {
    root: {
      fontFamily: "Lexend",
      fontSize: 14,
      fontWeightLight: 600,
      color: colorPalette.primaryBlack,
    },
    [TypographyVariants.TITLE]: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "1px",
    },
  },
};
