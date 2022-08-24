import { ComponentMeta, ComponentStory } from '@storybook/react';
import Scale from '../components/scale/Scale';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Scale',
  component: Scale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Scale>;

const Template: ComponentStory<typeof Scale> = args => <Scale/>;

export const Default = Template.bind({});

Default.args = {
  
};
