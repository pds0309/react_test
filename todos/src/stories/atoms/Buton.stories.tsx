import { ComponentMeta, ComponentStory } from "@storybook/react";

import Buton from "../../atoms/Buton";

export default {
  component: Buton,
  title: "Atom/Buton",
  actions: { argTypesRegex: "^on.*" },
} as ComponentMeta<typeof Buton>;

const Template: ComponentStory<typeof Buton> = (args) => <Buton {...args} />;

export const Default = Template.bind({});
//children, colorType, type, ...props
Default.args = {
  children: "hell world",
  colorType: "blue",
};

export const WhiteSubmit = Template.bind({});
WhiteSubmit.args = {
  children: "white world",
  colorType: "white",
  type: "submit",
};
