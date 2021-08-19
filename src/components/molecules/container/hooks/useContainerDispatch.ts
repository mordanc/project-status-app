import { useDispatch } from 'react-redux';

import { updateStatusFilter } from '../../../../features/table/tableSlice';

export const useContainerDispatch = () => {
  const dispatch = useDispatch();

  const applyTableStatusFilter = (statusFilterValue: string) => {
    dispatch(updateStatusFilter(statusFilterValue));
  };

  return { applyTableStatusFilter };
};
