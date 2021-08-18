import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TableRow from './TableRow';

export default {
  title: 'components/molecules/TableRow',
  component: TableRow,
  argTypes: {},
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = args => (
  <TableRow {...args} />
);

export const Small = Template.bind({});
Small.args = {
  projectName: 'Project Status App afd das fd  dfad ',
  projectManager: 'Aaron Redman',
  overallStatus: 'G',
  percentageComplete: 11,
  modifiedDate: '12/26/1996 11:23:21',
};
