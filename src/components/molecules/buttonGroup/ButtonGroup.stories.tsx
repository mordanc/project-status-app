import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonGroup from './ButtonGroup';
import Button from '../../atoms/button/Button';

export default {
  title: 'Components/molecules/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = args => (
  <ButtonGroup {...args} />
);

const buttons = [
  { label: '1', onClick: () => console.log('1') },
  { label: '2', onClick: () => console.log('2') },
  { label: '3', onClick: () => console.log('3') },
  { label: '4', onClick: () => console.log('4') },
];

export const Primary = Template.bind({});
Primary.args = {
  buttons: buttons,
};
