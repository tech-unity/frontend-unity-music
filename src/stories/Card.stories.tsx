import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '../components/card/Card';
import { mdiGuitarAcoustic, mdiAccountGroup } from '@mdi/js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Odd = Template.bind({});

Odd.args = {
  position: 'odd',
  icon: mdiAccountGroup,
  header: 'Doação de sangue',
  content:
    'Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. ',
};

export const Even = Template.bind({});

Even.args = {
  position: 'even',
  icon: mdiGuitarAcoustic,
  header: 'Serenata',
  content:
    'Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. ',
};
