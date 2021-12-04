import { MailIcon } from '@heroicons/react/solid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonWithIcon } from './ButtonWithIcon';

export default {
  title: 'Design System/Button with icon',
  component: ButtonWithIcon,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'simple'],
      control: { type: 'radio' },
    },
    state: {
      options: ['active', 'disabled'],
      control: { type: 'radio' },
    },
    iconPosition: {
      options: ['full', 'leading', 'trailing'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ButtonWithIcon>;

const Template: ComponentStory<typeof ButtonWithIcon> = args => (
  // @ts-ignore
  <ButtonWithIcon {...args}>Button text</ButtonWithIcon>
);

// Primary
export const PrimaryAndFull = Template.bind({});
PrimaryAndFull.storyName = 'Primary and full';
PrimaryAndFull.args = {
  variant: 'primary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'full',
};

export const PrimaryAndLeading = Template.bind({});
PrimaryAndLeading.storyName = 'Primary and leading';
PrimaryAndLeading.args = {
  variant: 'primary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'leading',
};

export const PrimaryAndTrailing = Template.bind({});
PrimaryAndTrailing.storyName = 'Primary and trailing';
PrimaryAndTrailing.args = {
  variant: 'primary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'trailing',
};

// PrimaryAndDisabled
export const PrimaryAndDisabledAndFull = Template.bind({});
PrimaryAndDisabledAndFull.storyName = 'Primary and disabled and full';
PrimaryAndDisabledAndFull.args = {
  variant: 'primary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'full',
};

export const PrimaryAndDisabledAndLeading = Template.bind({});
PrimaryAndDisabledAndLeading.storyName = 'Primary and disabled and leading';
PrimaryAndDisabledAndLeading.args = {
  variant: 'primary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'leading',
};

export const PrimaryAndDisabledAndTrailing = Template.bind({});
PrimaryAndDisabledAndTrailing.storyName = 'Primary and disabled and trailing';
PrimaryAndDisabledAndTrailing.args = {
  variant: 'primary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'trailing',
};

// Secondary
export const SecondaryAndFull = Template.bind({});
SecondaryAndFull.storyName = 'Secondary and full';
SecondaryAndFull.args = {
  variant: 'secondary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'full',
};

export const SecondaryAndLeading = Template.bind({});
SecondaryAndLeading.storyName = 'Secondary and leading';
SecondaryAndLeading.args = {
  variant: 'secondary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'leading',
};

export const SecondaryAndTrailing = Template.bind({});
SecondaryAndTrailing.storyName = 'Secondary and trailing';
SecondaryAndTrailing.args = {
  variant: 'secondary',
  state: 'active',
  icon: MailIcon,
  iconPosition: 'trailing',
};

// SecondaryAndDisabled
export const SecondaryAndDisabledAndFull = Template.bind({});
SecondaryAndDisabledAndFull.storyName = 'Secondary and disabled and full';
SecondaryAndDisabledAndFull.args = {
  variant: 'secondary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'full',
};

export const SecondaryAndDisabledAndLeading = Template.bind({});
SecondaryAndDisabledAndLeading.storyName = 'Secondary and disabled and leading';
SecondaryAndDisabledAndLeading.args = {
  variant: 'secondary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'leading',
};

export const SecondaryAndDisabledAndTrailing = Template.bind({});
SecondaryAndDisabledAndTrailing.storyName = 'Secondary and disabled and trailing';
SecondaryAndDisabledAndTrailing.args = {
  variant: 'secondary',
  state: 'disabled',
  icon: MailIcon,
  iconPosition: 'trailing',
};
