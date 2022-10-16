import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../app/components/header/Header';

export default {
  title: 'Example/Header',
  component: Header,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});

Default.args = {
  
};
