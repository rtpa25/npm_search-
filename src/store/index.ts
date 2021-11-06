/** @format */

import { configureStore } from '@reduxjs/toolkit';
import RepoSliceActions from './slice/repo-slice';

const store = configureStore({
  reducer: {
    repo: RepoSliceActions,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
