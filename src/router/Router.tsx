/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { css } from "@emotion/react";
import { TestPage } from "@/testPage";

export const Router: FC = () => (
  <BrowserRouter>
    <nav
      css={css`
        margin: 20px;

        * {
          margin: 5px;
        }
      `}
    >
      <b>Routing: </b>
      <Link to="/">Test route</Link>
    </nav>
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  </BrowserRouter>
);
