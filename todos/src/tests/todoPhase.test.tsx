import { fireEvent, render, screen } from "@testing-library/react";

import App from "../App";

test("todo 삽입 삭제 happy path testing", () => {
  render(<App />);
  const addTodoInput: HTMLInputElement = screen.getByRole("textbox", {
    name: "add todos",
  });
  const addButton: HTMLButtonElement = screen.getByRole("button", {
    name: "추가하기",
  });
  const todoListElement: HTMLElement = screen.getByTestId("todolist");
  const numOfTodoText: HTMLElement = screen.getByText(/number of todos:/i, {
    exact: false,
  });
  expect(addTodoInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(todoListElement).toBeEmptyDOMElement();
  expect(numOfTodoText).toHaveTextContent("0");

  fireEvent.change(addTodoInput, { target: { value: "밥먹기" } });
  expect(addTodoInput).toHaveValue("밥먹기");

  fireEvent.click(addButton);
  expect(addTodoInput).toHaveValue("");
  expect(numOfTodoText).toHaveTextContent("1");
  expect(todoListElement).not.toBeEmptyDOMElement();

  const addedTodo: HTMLElement = screen.getByText("밥먹기", { exact: false });

  fireEvent.click(addedTodo);
  expect(numOfTodoText).toHaveTextContent("0");
});
