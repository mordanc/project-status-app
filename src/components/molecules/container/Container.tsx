import { selectNumberOfProjectsByType } from 'features/table/tableSlice';
import { useSelector } from 'react-redux';
import Icon from 'components/atoms/icon/Icon';
import Label from 'components/atoms/label/Label';
import { ContainerProps } from './types';

const Container = ({
  iconType,
  iconSize,
  labelBody,
  labelTitle,
  backgroundColor = 'white',
  isFocused,
  onClick,
  filterValue,
}: ContainerProps) => {
  const numberOfProjects = useSelector(
    selectNumberOfProjectsByType(filterValue),
  );

  return (
    <div
      className={`flex items-center pl-6 py-4 hover:opacity-75 transition md:w-full bg-${backgroundColor}-300 rounded-2xl pl-4 transform hover:-translate-y-1 cursor-pointer ${
        isFocused && '-translate-y-1 opacity-75'
      }`}
      onClick={() => onClick?.()}
    >
      <Icon iconType={iconType} iconSize={iconSize} />
      <span className="ml-10 select-none">
        <Label labelTitle={numberOfProjects} labelBody={labelBody} />
      </span>
    </div>
  );
};

export default Container;
