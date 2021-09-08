import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import * as ButtonGroupStories from 'components/molecules/buttonGroup/ButtonGroup.stories';
import { store } from 'app/store';

import StatusTable from './StatusTable';

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
