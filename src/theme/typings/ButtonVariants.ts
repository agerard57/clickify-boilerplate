export type DefaultButtonPropsVariants = {
  // Disable every default variant props
  text: false;
  outlined: false;
  contained: false;
};

// This is the list of all the variants that we want to use in our app.
// If you want to add a new variant, you have to add it here and in the
// button.d.ts file before setting the styleOverrides in muiTheme.ts
export enum ButtonVariants {
  PRIMARY = "primary",
  TEXT = "text",
}
