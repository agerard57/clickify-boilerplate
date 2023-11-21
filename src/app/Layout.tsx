import React, { FC } from "react";

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */} <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </>
  );
};
