import { render, screen } from "@testing-library/react";

import { replaceCamelWithSpaces } from "./unitFunction";

describe("spaces before camel-case capital letter", () => {
  test("for no inner capitals", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("for one inner capitals", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("for multiple inner capitals", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
