import { ComponentMeta, ComponentStory } from '@storybook/react';
import Paragraph from '../components/typography/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'default',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut odio urna. Sed scelerisque nisi suscipit lorem maximus tempor. Aenean viverra nibh nisl, sed pretium est cursus non. Donec tempus metus a ante pulvinar dignissim. Donec sed ullamcorper turpis, sit amet tincidunt magna. In sit amet sapien eget leo scelerisque aliquet at vitae mauris. Curabitur bibendum lectus eu venenatis hendrerit. Donec tellus lorem, faucibus sit amet ex in, volutpat luctus nisl.',
};
export const Small = Template.bind({});

Small.args = {
  size: 'small',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut odio urna. Sed scelerisque nisi suscipit lorem maximus tempor. Aenean viverra nibh nisl, sed pretium est cursus non. Donec tempus metus a ante pulvinar dignissim. Donec sed ullamcorper turpis, sit amet tincidunt magna. In sit amet sapien eget leo scelerisque aliquet at vitae mauris. Curabitur bibendum lectus eu venenatis hendrerit. Donec tellus lorem, faucibus sit amet ex in, volutpat luctus nisl.',
};
