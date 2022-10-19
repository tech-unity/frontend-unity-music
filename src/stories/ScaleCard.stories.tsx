import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScaleCard from '../app/components/scale-card/ScaleCard';
import { mdiGuitarAcoustic, mdiAccountGroup } from '@mdi/js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ScaleCard',
  component: ScaleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ScaleCard>;

const Template: ComponentStory<typeof ScaleCard> = args => (
  <ScaleCard {...args} />
);

export const Odd = Template.bind({});

Odd.args = {
  position: 'odd',
  icon: mdiGuitarAcoustic,
  header: 'Banda',
  bandList: [
    {
      id: 'a',
      person: { id: 'a', name: 'Enzo', email: 'v', gender: 'M', isMinister: false },
      instrument: { name: 'Violão', id: 'a' },
    },
    {
      id: 'c',
      person: { id: 'b', name: 'Raul', email: 'v', gender: 'M', isMinister: false },
      instrument: { name: 'Violão', id: 'b' },
    },
    {
      id: 'c',
      person: { id: 'c', name: 'Gabriel', email: 'v', gender: 'M', isMinister: false },
      instrument: { name: 'Teclado', id: 'c' },
    },
  ],
};

export const Even = Template.bind({});

Even.args = {
  position: 'even',
  icon: mdiAccountGroup,
  header: 'Serenata',
  singersList: [{ id: 'c', name: 'Leandro', email: 'v', gender: 'M', isMinister: true }, { id: 'c', name: 'Carol', email: 'v', gender: 'F', isMinister: false }],
};
