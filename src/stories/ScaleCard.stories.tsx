import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScaleCard from '../components/scale-card/ScaleCard';
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
  header: 'Doação de sangue',
  bandList: [
    { name: 'Enzo', instrument: 'Violão' },
    { name: 'Raul', instrument: 'Violão' },
    { name: 'Gabriel', instrument: 'Teclado' },
  ],
};

export const Even = Template.bind({});

Even.args = {
  position: 'even',
  icon: mdiAccountGroup,
  header: 'Serenata',
  singersList: [{ name: 'Leandro' }, { name: 'Amanda' }],
};
