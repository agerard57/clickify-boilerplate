import React from "react";

import { LandingPage } from "@/landingPage/components/LandingPage";

import { Pages, Routes } from "./typings";

export const routes: Routes = {
  [Pages.ERROR_PAGE]: {
    name: Pages.ERROR_PAGE,
    path: "/error",
    /* TODO */
    element: <LandingPage />,
  },
  [Pages.LANDING_PAGE]: {
    name: Pages.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
};
