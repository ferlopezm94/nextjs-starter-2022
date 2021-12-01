import { MailIcon } from '@heroicons/react/solid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    iconPosition: {
      options: ['alone', 'leading', 'trailing'],
    },
  },
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button text</Button>;

// Primary
export const Primary = Template.bind({});
Primary.args = {
  icon: undefined,
  iconPosition: undefined,
  primary: true,
  secondary: false,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.storyName = 'Primary with icon';
PrimaryWithIcon.args = {
  icon: MailIcon,
  iconPosition: undefined,
  primary: true,
  secondary: false,
};

export const PrimaryWithLeadingIcon = Template.bind({});
PrimaryWithLeadingIcon.storyName = 'Primary with leading icon';
PrimaryWithLeadingIcon.args = {
  icon: MailIcon,
  iconPosition: 'leading',
  primary: true,
  secondary: false,
};

export const PrimaryWithTrailingIcon = Template.bind({});
PrimaryWithTrailingIcon.storyName = 'Primary with trailing icon';
PrimaryWithTrailingIcon.args = {
  icon: MailIcon,
  iconPosition: 'trailing',
  primary: true,
  secondary: false,
};

// Secondary
export const Secondary = Template.bind({});
Secondary.args = {
  icon: undefined,
  iconPosition: undefined,
  primary: false,
  secondary: true,
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.storyName = 'Secondary with icon';
SecondaryWithIcon.args = {
  icon: MailIcon,
  iconPosition: undefined,
  primary: false,
  secondary: true,
};

export const SecondaryWithLeadingIcon = Template.bind({});
SecondaryWithLeadingIcon.storyName = 'Secondary with leading icon';
SecondaryWithLeadingIcon.args = {
  icon: MailIcon,
  iconPosition: 'leading',
  primary: false,
  secondary: true,
};

export const SecondaryWithTrailingIcon = Template.bind({});
SecondaryWithTrailingIcon.storyName = 'Secondary with trailing icon';
SecondaryWithTrailingIcon.args = {
  icon: MailIcon,
  iconPosition: 'trailing',
  primary: false,
  secondary: true,
};

// Simple
export const Simple = Template.bind({});
Simple.args = {
  icon: undefined,
  iconPosition: undefined,
  primary: false,
  secondary: false,
};

export const SimpleWithIcon = Template.bind({});
SimpleWithIcon.storyName = 'Simple with icon';
SimpleWithIcon.args = {
  icon: MailIcon,
  iconPosition: undefined,
  primary: false,
  secondary: false,
};

export const SimpleWithLeadingIcon = Template.bind({});
SimpleWithLeadingIcon.storyName = 'Simple with leading icon';
SimpleWithLeadingIcon.args = {
  icon: MailIcon,
  iconPosition: 'leading',
  primary: false,
  secondary: false,
};

export const SimpleWithTrailingIcon = Template.bind({});
SimpleWithTrailingIcon.storyName = 'Simple with trailing icon';
SimpleWithTrailingIcon.args = {
  icon: MailIcon,
  iconPosition: 'trailing',
  primary: false,
  secondary: false,
};
