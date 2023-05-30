import React from "react";
import renderer from "react-test-renderer";

import { App } from "@/App";

describe("App component", () => {
  test("should render component properly", () => {
    const componentRenderer = renderer.create(<App />);
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
