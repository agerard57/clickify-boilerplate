import { ButtonVariants, DefaultButtonPropsVariants } from "../typings";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides extends DefaultButtonPropsVariants {
    [ButtonVariants.PRIMARY]: true;
    [ButtonVariants.TEXT]: true;
  }
}
