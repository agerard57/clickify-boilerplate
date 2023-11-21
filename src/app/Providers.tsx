import React, { FC, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import { ThemeProvider } from "@mui/material";
import { ConstantsProvider } from "@/constants";
import { i18n } from "@/i18n";
import { theme } from "@/theme";

interface Props {
  children: ReactNode;
}
export const Providers: FC<Props> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <ConstantsProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConstantsProvider>
  </I18nextProvider>
);
