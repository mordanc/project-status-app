import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from './Container';
import * as IconStories from '../../atoms/icon/Icon.stories';
import * as LabelStories from '../../atoms/label/Label.stories';

export default {
  title: 'Components/molecules/Container',
  component: Container,
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    ...LabelStories.default.argTypes,
    ...IconStories.default.argTypes,
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'green',
  ...IconStories.Large.args,
  ...LabelStories.Primary.args,
};
