import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatusTable from './StatusTable';

import * as ButtonGroupStories from '../../molecules/buttonGroup/ButtonGroup.stories';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

export default {
  title: 'components/organisms/StatusTable',
  component: StatusTable,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof StatusTable>;

const Template: ComponentStory<typeof StatusTable> = args => (
  <StatusTable {...args} />
);

export const normal = Template.bind({});
normal.args = {
  ...ButtonGroupStories.Primary.args,
};
