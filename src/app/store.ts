import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tableReducer from '../features/table/tableSlice';
import projectStatusReducer from 'pages/ProjectStatusPage/projectStatusSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    table: tableReducer,
    projectStatus: projectStatusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
