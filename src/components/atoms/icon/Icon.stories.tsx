import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
  argTypes: {
    iconSize: {
      options: ['sm', 'md', 'lg'],
      control: { iconType: 'radio' },
    },
    iconColor: {
      options: ['white', 'black', 'green', 'yellow', 'red'],
      control: { iconType: 'radio' },
    },
    iconType: {
      options: [
        'folder',
        'warning',
        'info',
        'thumbsUp',
        'plus',
        'lock',
        'x',
        'circle',
        'edit',
      ],
      control: { iconType: 'radio' },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Small = Template.bind({});
Small.args = {
  iconSize: 'sm',
  iconColor: 'black',
  iconType: 'folder',
};

export const Medium = Template.bind({});
Medium.args = {
  iconSize: 'md',
  iconColor: 'black',
  iconType: 'folder',
};

export const Large = Template.bind({});
Large.args = {
  iconSize: 'lg',
  iconColor: 'black',
  iconType: 'folder',
};
