import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../app/components/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  label: 'Resetar Senha',
};
export const Danger = Template.bind({});

Danger.args = {
  variant: 'danger',
  label: 'Resetar Senha',
};
export const Text = Template.bind({});

Text.args = {
  variant: 'text',
  label: 'Resetar Senha',
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: 'primary',
  disabled: true,
  label: 'Resetar Senha',
};
