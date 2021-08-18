import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { StatusTypes } from '../../types';
// import { fetchCount } from './tableAPI';

export interface CounterState {
  statusFilterValue: string;
}

const initialState: CounterState = {
  statusFilterValue: '',
};

export const counterSlice = createSlice({
  name: 'Table',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateStatusFilter: (state, action: PayloadAction<string>) => {
      const newValue = action.payload?.toLocaleLowerCase?.();

      return { ...state, statusFilterValue: newValue };
    },
  },
});

export const { updateStatusFilter } = counterSlice.actions;

export const selectStatusFilterValue = (state: RootState) =>
  state.table.statusFilterValue;

export const selectStatusFilterType = (state: RootState) => {
  switch (state.table.statusFilterValue) {
    case 'g':
      return StatusTypes.GREEN_PROJECTS;
    case 'r':
      return StatusTypes.RED_PROJECTS;
    case 'y':
      return StatusTypes.YELLOW_PROJECTS;
    default:
      return StatusTypes.ALL_PROJECTS;
  }
};

export default counterSlice.reducer;
