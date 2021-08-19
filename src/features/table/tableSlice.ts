import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Status, StatusTypes } from '../../types';

export interface CounterState {
  statusFilterValue: Status;
}

const initialState: CounterState = {
  statusFilterValue: 'A',
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
  },
});

export const { updateStatusFilter } = counterSlice.actions;

export const selectStatusFilterValue = (state: RootState) =>
  state.table.statusFilterValue;

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
