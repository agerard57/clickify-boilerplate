import { colorPalette } from "../colorPalette";
import { ButtonVariants } from "../typings";

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: "none" as const,
      fontFamily: "Lexend",
      fontSize: 14,
      height: 28,
      fontWeightLight: 400,
      color: colorPalette.primaryBlack,
    },
    [ButtonVariants.PRIMARY]: {
      color: colorPalette.white,
      padding: "0 30px",
      borderRadius: 23,
      background: `linear-gradient(225deg, #1B3ACD 0%, #6A91F5 100%)`,
    },
    [ButtonVariants.TEXT]: {
      fontSize: 14,
      borderRadius: 23,
      minWidth: 0,
    },
  },
};
