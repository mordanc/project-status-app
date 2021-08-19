import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectStatusFilterValue,
  updateStatusFilter,
} from '../../../../features/table/tableSlice';

export const useStatusFilter = (gridApi: any, updatePage: () => any) => {
  const statusFilter = useSelector(selectStatusFilterValue);

  const dispatch = useDispatch();

  const externalFilterChanged = (value: string) => {
    dispatch(updateStatusFilter(value));
    console.log(value);
    setTimeout(() => {
      gridApi?.onFilterChanged();
      updatePage();
    }, 100);
  };

  useEffect(() => {
    const validValues = ['y', 'g', 'r'];
    if (!validValues.includes(statusFilter)) {
      externalFilterChanged('');
    } else {
      externalFilterChanged(statusFilter);
    }
  }, [statusFilter]);

  return { statusFilter };
};
