import { ComponentMeta, ComponentStory } from "@storybook/react";

import TodoItem from "../../atoms/TodoItem";

export default {
  component: TodoItem,
  title: "Atom/TodoItem",
  argTypes: { onHandleItemClick: { action: "clicked" } },
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);
export const Default = Template.bind({});
Default.args = {
  todo: { id: new Date("9/3/2020"), text: "hello" },
};
