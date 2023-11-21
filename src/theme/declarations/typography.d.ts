import { TypographyVariants, DefaultTypographyPropsVariants } from "../typings";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends DefaultTypographyPropsVariants {
    [TypographyVariants.INHERIT]: true;
    [TypographyVariants.TITLE]: true;
  }
}
