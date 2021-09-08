import { Status } from 'types';

export const getIconColor = (status: Status) => {
  const lowerCaseStatus = status.toLocaleLowerCase();
  return lowerCaseStatus === 'g'
    ? 'green'
    : lowerCaseStatus === 'r'
    ? 'red'
    : 'yellow';
};
