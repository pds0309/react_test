import { ComponentMeta, ComponentStory } from "@storybook/react";

import Inputbox from "../../atoms/Inputbox";

export default {
  component: Inputbox,
  title: "Atom/Inputbox",
  actions: { argTypesRegex: "^on.*" },
} as ComponentMeta<typeof Inputbox>;

const Template: ComponentStory<typeof Inputbox> = (args) => (
  <Inputbox {...args} />
);

export const NumberInput = Template.bind({});
NumberInput.args = {
  value: "1",
  type: "number",
};

export const TextInput = Template.bind({});
TextInput.args = {
  value: "",
  type: "text",
};
