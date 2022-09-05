import { render, screen } from "@testing-library/react";

import App from "./App";

test("button has correct initial color", () => {
  // RTL 의 render 를 사용해 렌더링 해야하는 컴포넌트를 선언한다.
  render(<App />);
  // RTL의 screen 전역 객체를 이용해 원하는 요소를 찾는다.
  const button = screen.getByRole("button", { name: "Change to Blue" });
  // I expect button's background color to be red;
  expect(button).toHaveStyle({ backgroundColor: "red" });
});
test("button turns a different color when clicked", () => {
  render(<App />);
});
