import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useConstants } from "@/constants";
import { LoadingScreen } from "@/loadingScreen";
import { AuthStatuses, Pages } from "@/router";

import { routes } from "../router/Routes";
import { Layout } from "./Layout";

export const Router: FC = () => {
  const { authStatus } = useConstants();

  if (authStatus !== AuthStatuses.AUTHENTICATED) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.values(routes).map((route) =>
            route.authentificationMode && authStatus !== route.authentificationMode ? (
              <Route
                key={routes[Pages.ERROR_PAGE].name}
                path={routes[Pages.ERROR_PAGE].path}
                element={routes[Pages.ERROR_PAGE].element}
              />
            ) : (
              <Route key={route.name} path={route.path} element={route.element} />
            ),
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
