import { ComponentMeta, ComponentStory } from '@storybook/react';
import HrCard from '../components/hr-card/HrCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HrCard',
  component: HrCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof HrCard>;

const Template: ComponentStory<typeof HrCard> = args => <HrCard/>;

export const Default = Template.bind({});

Default.args = {
  
};
