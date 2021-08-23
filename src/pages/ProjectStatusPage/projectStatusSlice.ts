import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export interface CounterState {
  isNavbarExpanded: boolean;
}

const initialState: CounterState = {
  isNavbarExpanded: false,
};

export const projectStatusSlice = createSlice({
  name: 'projectStatus',
  initialState,
  reducers: {
    increment: state => {
      const newValue = !state.isNavbarExpanded;

      return { ...state, isNavbarExpanded: !newValue };
    },
  },
});

export const { increment } = projectStatusSlice.actions;

export const selectCount = (state: RootState) =>
  state.projectStatus.isNavbarExpanded;

export default projectStatusSlice.reducer;
