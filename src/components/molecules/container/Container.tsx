import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusFilter } from '../../../features/table/tableSlice';
import { Status } from '../../../types';
import Icon, { IconProps } from '../../atoms/icon/Icon';
import Label, { LabelProps } from '../../atoms/label/Label';

type SubProps = IconProps & LabelProps;

interface ContainerProps extends SubProps {
  backgroundColor: 'red' | 'green' | 'yellow' | 'purple' | 'white' | 'blue';
  isFocused?: boolean;
  statusFilterValue?: Status;
}

const Container = ({
  iconType,
  iconSize,
  labelBody,
  labelTitle,
  backgroundColor = 'white',
  isFocused = false,
  statusFilterValue,
}: ContainerProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center pl-6 py-4 hover:opacity-75 transition md:w-full bg-${backgroundColor}-300 rounded-2xl pl-4 transform hover:-translate-y-1 cursor-pointer ${
        isFocused && 'border-2 border-black'
      }`}
      onClick={() =>
        statusFilterValue && dispatch(updateStatusFilter(statusFilterValue))
      }
    >
      <Icon iconType={iconType} iconSize={iconSize} />
      <span className="ml-10 select-none">
        <Label labelTitle={labelTitle} labelBody={labelBody} />
      </span>
    </div>
  );
};

export default Container;
