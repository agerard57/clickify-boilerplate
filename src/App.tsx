/** @jsxImportSource @emotion/react */
import { FC, Suspense } from "react";

import { ConstantsProvider } from "@/constants";
import { Logo } from "@/core";
import { i18n } from "@/i18n";
import { LoadingScreen } from "@/loadingScreen";
import { Router } from "@/router";
import { theme } from "@/theme";
import { css } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";

export const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <ConstantsProvider>
      <ThemeProvider theme={theme}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ marginTop: "7vh" }}
          toastOptions={{
            duration: 5000,
          }}
        />
        <Suspense fallback={<LoadingScreen />}>
          <div
            css={css`
              align-items: center;
              display: flex;
              flex-direction: column;
              height: 100%;
              position: absolute;
              width: 100%;
            `}
          >
            <h2>Clickify boilerplate</h2>
            <img src={Logo} />
            <Router />
          </div>
        </Suspense>
      </ThemeProvider>
    </ConstantsProvider>
  </I18nextProvider>
);
