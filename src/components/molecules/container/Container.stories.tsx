import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { store } from 'app/store';
import * as IconStories from 'components/atoms/icon/Icon.stories';
import * as LabelStories from 'components/atoms/label/Label.stories';

import Container from './Container';

export default {
  title: 'Components/molecules/Container',
  component: Container,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
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
  labelBody: 'A',
};
