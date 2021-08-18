import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavRow from './NavRow';
import * as IconStories from '../../atoms/icon/Icon.stories';

export default {
  title: 'Components/molecules/NavRow',
  component: NavRow,
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    iconType: IconStories.default.argTypes?.iconType,
    iconColor: IconStories.default.argTypes?.iconColor,
  },
} as ComponentMeta<typeof NavRow>;

const Template: ComponentStory<typeof NavRow> = args => <NavRow {...args} />;

export const Row = Template.bind({});
Row.args = {
  iconColor: 'white',
  iconType: 'folder',
  orientation: 'row',
  rowText: 'I am a row',
  onClick: () => alert('Clicked Row'),
};
