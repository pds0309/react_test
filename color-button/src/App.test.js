import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

test("button component functional test", () => {
  // RTL 의 render 를 사용해 렌더링 해야하는 컴포넌트를 선언한다.
  render(<App />);
  // RTL의 screen 전역 객체를 이용해 원하는 요소를 찾는다.
  const button = screen.getByRole("button", { name: "Change to blue" });
  // I expect button's background color to be red;
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // generate click event
  fireEvent.click(button);

  // expect button's background color to be blue;
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // expect text to be changed
  expect(button.textContent).toBe("Change to red");
});

test("button initial checkbox test", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  // button should be enabled by default
  expect(button).toBeEnabled();
  // button should be not checked by default
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("button should be disalbed when checkbox checked and able whne not checked", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  fireEvent.click(checkBox);
  // checkbox should be checked when clicked
  expect(checkBox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(button).toBeEnabled();
});
