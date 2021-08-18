import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    rounding: {
      options: ['none', 'small', 'large'],
      control: { iconType: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'button',
  color: 'primary',
  rounding: 'small',
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'button',
  color: 'secondary',
  rounding: 'large',
  roundLeft: false,
  roundRight: false,
  onClick: () => {},
};
