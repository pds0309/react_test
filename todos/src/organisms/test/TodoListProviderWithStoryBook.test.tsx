import * as TodoListProviderWithStateStories from "../../stories/organisms/TodoListProviderWithState.stories";

import { fireEvent, render, screen } from "@testing-library/react";

import { MockedState } from "../../stories/organisms/TodoListProviderWithState.stories";
import { composeStories } from "@storybook/testing-react";

const { Default } = composeStories(TodoListProviderWithStateStories);

test("storybook 기반 TodoListProvider Default가 존재하며 삭제 기능이 잘 동작 함.", async () => {
  render(<Default />);

  // 가져와서 목록이 모두있나 확인
  const todoListElement: HTMLElement = screen.getByTestId("todolist");
  expect(todoListElement).toBeInTheDocument();

  MockedState.todos.forEach((todo) => {
    expect(screen.getByText(todo.text, { exact: false })).toBeInTheDocument();
  });

  // 한개 클릭했을 때 지워지나 확인
  const firstTodoElement = screen.getByText(MockedState.todos[0].text, {
    exact: false,
  });
  expect(firstTodoElement).toBeInTheDocument();
  fireEvent.click(firstTodoElement);
  expect(
    screen.queryByText(MockedState.todos[0].text, {
      exact: false,
    })
  ).not.toBeInTheDocument();
});
