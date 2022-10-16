import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../app/components/typography/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});

Heading1.args = {
  level: 1,
  children: 'Heading 1',
};
export const Heading2 = Template.bind({});

Heading2.args = {
  level: 2,
  children: 'Heading 2',
};
export const Heading3 = Template.bind({});

Heading3.args = {
  level: 3,
  children: 'Heading 3',
};
