import Icon from 'components/atoms/icon/Icon';

import { getIconColor } from './utils';

import { TableRowProps } from './types';

const TableRow = ({
  projectManager,
  projectName,
  overallStatus,
}: TableRowProps) => {
  const statusColor = getIconColor(overallStatus);
  return (
    <tr className="transform hover:scale-105 transition bg-gray-800 rounded-2xl max-w-3xl items-center flex">
      <td className="p-3 w-72">
        <div className="flex align-items-center">
          <Icon iconSize="md" iconType="circle" iconColor={statusColor} />
          <div className="ml-3">
            <div className=" text-gray-300 truncate w-48">{projectName}</div>
            <div className="text-gray-500 truncate w-48">{projectManager}</div>
          </div>
        </div>
      </td>
      <td className=" w-24">
        <Icon iconSize="sm" iconType="circle" iconColor="green" />
      </td>
      <td className=" w-24">
        <Icon iconSize="sm" iconType="x" iconColor="red" />
      </td>
      <td className=" w-24">
        <Icon iconSize="sm" iconType="warning" iconColor="yellow" />
      </td>
      {/* <td className="text-gray-300 mx-4">Project manager</td> */}
      <td className="text-gray-300 mx-4">12/26/1996 08:23:21</td>
      <td className="mx-4">
        <Icon iconSize="sm" iconType="edit" iconColor="white" />
      </td>
    </tr>
  );
};

export default TableRow;
