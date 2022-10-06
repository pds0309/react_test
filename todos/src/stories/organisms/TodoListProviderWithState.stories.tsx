import * as TodoItemStories from "../atoms/TodoItem.stories";

import { RecoilRoot, useSetRecoilState } from "recoil";

import { ComponentStory } from "@storybook/react";
import { Todo } from "../../Models/types";
import TodoListProvider from "../../organisms/TodoListProvider";
import { todoState } from "../../store/todoStore";

// ------------------ Todo Mock Data------------------ //

type TodosProps = {
  todos: Todo[];
};
export const MockedState: TodosProps = {
  todos: [
    {
      ...TodoItemStories.Default.args,
      id: new Date("3/3/2021"),
      text: "잠자기",
    },
    {
      id: new Date("4/4/2022"),
      text: "밥먹기",
    },
    {
      id: new Date("4/7/2022"),
      text: "코풀기",
    },
  ],
};

// ------------------ Recoil Mock Provider------------------ //
const MockedTodoListProvider = ({ todos }: TodosProps): JSX.Element => {
  const setTodo = useSetRecoilState(todoState);
  setTodo(todos);
  return <TodoListProvider />;
};

// ------------------ Export(Default) Meta ------------------ //
export default {
  component: MockedTodoListProvider,
  title: "Organisms/TodoListProviderWithState",
  excludeStories: /.*MockedState$/,
};

// ------------------ Export Stories ------------------ //
const Template: ComponentStory<typeof MockedTodoListProvider> = (args) => (
  <MockedTodoListProvider {...args} />
);
export const Default = Template.bind({});
Default.args = {
  todos: MockedState.todos,
};

Default.decorators = [
  (story) => (
    <RecoilRoot>
      <div style={{ padding: "3rem" }}>{story()}</div>
    </RecoilRoot>
  ),
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => (
    <RecoilRoot>
      <div style={{ padding: "3rem" }}>{story()}</div>
    </RecoilRoot>
  ),
];
