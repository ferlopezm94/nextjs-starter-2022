import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'simple'],
      control: { type: 'radio' },
    },
    state: {
      options: ['active', 'disabled', 'loading'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button text</Button>;

// Primary
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  state: 'active',
};

export const PrimaryAndDisabled = Template.bind({});
PrimaryAndDisabled.storyName = 'Primary and disabled';
PrimaryAndDisabled.args = {
  variant: 'primary',
  state: 'disabled',
};

export const PrimaryAndLoading = Template.bind({});
PrimaryAndLoading.storyName = 'Primary and loading';
PrimaryAndLoading.args = {
  variant: 'primary',
  state: 'loading',
};

// Secondary
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  state: 'active',
};

export const SecondaryAndDisabled = Template.bind({});
SecondaryAndDisabled.storyName = 'Secondary and disabled';
SecondaryAndDisabled.args = {
  variant: 'secondary',
  state: 'disabled',
};

export const SecondaryAndLoading = Template.bind({});
SecondaryAndLoading.storyName = 'Secondary and loading';
SecondaryAndLoading.args = {
  variant: 'secondary',
  state: 'loading',
};

// Simple
export const Simple = Template.bind({});
Simple.args = {
  variant: 'simple',
  state: 'active',
};

export const SimpleAndDisabled = Template.bind({});
SimpleAndDisabled.storyName = 'Simple and disabled';
SimpleAndDisabled.args = {
  variant: 'simple',
  state: 'disabled',
};

export const SimpleAndLoading = Template.bind({});
SimpleAndLoading.storyName = 'Simple and loading';
SimpleAndLoading.args = {
  variant: 'simple',
  state: 'loading',
};
