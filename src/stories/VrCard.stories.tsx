import { ComponentMeta, ComponentStory } from '@storybook/react';
import VrCard from '../components/vr-card/VrCard';
import { mdiGuitarAcoustic, mdiAccountGroup } from '@mdi/js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/VrCard',
  component: VrCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof VrCard>;

const Template: ComponentStory<typeof VrCard> = args => <VrCard {...args} />;

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
