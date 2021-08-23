import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectStatusFilterValue,
  updateStatusFilter,
} from 'features/table/tableSlice';

import { Status } from 'types';

export const useStatusFilter = (gridApi: any, updatePage: () => any) => {
  const statusFilter = useSelector(selectStatusFilterValue);

  const dispatch = useDispatch();

  const externalFilterChanged = useCallback(
    (value: Status) => {
      dispatch(updateStatusFilter(value));
      setTimeout(() => {
        gridApi?.onFilterChanged();
        updatePage();
      }, 100);
    },
    [gridApi, updatePage, dispatch],
  );

  useEffect(() => {
    const validValues = ['Y', 'G', 'R'];
    if (!validValues.includes(statusFilter)) {
      externalFilterChanged('A');
    } else {
      externalFilterChanged(statusFilter);
    }
  }, [statusFilter, externalFilterChanged]);

  return { statusFilter };
};
