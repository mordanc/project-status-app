import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectStatusFilterValue,
  updateStatusFilter,
} from '../../../../features/table/tableSlice';

import { Status } from '../../../../types';

export const useStatusFilter = (gridApi: any, updatePage: () => any) => {
  const statusFilter = useSelector(selectStatusFilterValue);

  const dispatch = useDispatch();

  const externalFilterChanged = (value: Status) => {
    dispatch(updateStatusFilter(value));
    console.log(value);
    setTimeout(() => {
      gridApi?.onFilterChanged();
      updatePage();
    }, 100);
  };

  useEffect(() => {
    const validValues = ['Y', 'G', 'R'];
    if (!validValues.includes(statusFilter)) {
      externalFilterChanged('A');
    } else {
      externalFilterChanged(statusFilter);
    }
  }, [statusFilter]);

  return { statusFilter };
};
