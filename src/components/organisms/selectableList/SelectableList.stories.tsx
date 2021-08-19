import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import SelectableList from './SelectableList';
import { store } from '../../../app/store';

export default {
  title: 'Components/organisms/SelectableList',
  component: SelectableList,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  argTypes: {},
} as ComponentMeta<typeof SelectableList>;

const Template: ComponentStory<typeof SelectableList> = args => (
  <SelectableList {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: [],
};
