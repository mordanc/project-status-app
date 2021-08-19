import { useDispatch } from 'react-redux';

import { updateStatusFilter } from '../../../../features/table/tableSlice';

import { Status } from '../../../../types';

export const useContainerListDispatch = () => {
  const dispatch = useDispatch();

  const applyTableStatusFilter = (statusFilterValue: Status) => {
    dispatch(updateStatusFilter(statusFilterValue));
  };

  return { applyTableStatusFilter };
};
