import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { NumberOfProjects } from 'components/organisms/statusTable/types';

import { Status, StatusTypes } from '../../types';

export interface TableState {
  statusFilterValue: Status;
  numberOfProjects: NumberOfProjects;
}

const initialState: TableState = {
  statusFilterValue: 'A',
  numberOfProjects: {
    A: 0,
    R: 0,
    G: 0,
    Y: 0,
  },
};

export const counterSlice = createSlice({
  name: 'Table',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateStatusFilter: (state, action: PayloadAction<Status>) => {
      const newValue = action.payload;

      return { ...state, statusFilterValue: newValue };
    },
    updateNumberOfProjects: (
      state,
      action: PayloadAction<NumberOfProjects>,
    ) => {
      const newValue = action.payload;

      return { ...state, numberOfProjects: newValue };
    },
  },
});

export const {
  updateStatusFilter,
  updateNumberOfProjects,
} = counterSlice.actions;

export const selectStatusFilterValue = (state: RootState) =>
  state.table.statusFilterValue;

export const selectNumberOfProjects = (
  state: RootState,
  projectFilter?: Status,
) => state.table.numberOfProjects;

export const selectNumberOfProjectsByType = (projectFilter: Status) => (
  state: RootState,
) => state.table.numberOfProjects[projectFilter];

export const selectStatusFilterType = (state: RootState) => {
  switch (state.table.statusFilterValue) {
    case 'G':
      return StatusTypes.GREEN_PROJECTS;
    case 'R':
      return StatusTypes.RED_PROJECTS;
    case 'Y':
      return StatusTypes.YELLOW_PROJECTS;
    default:
      return StatusTypes.ALL_PROJECTS;
  }
};

export default counterSlice.reducer;
