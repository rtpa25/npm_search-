/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  error: string | null;
  isLoading: boolean;
  data: string[];
}

const initialState: SearchState = {
  error: null,
  isLoading: false,
  data: [],
};

const RepoSlice = createSlice({
  name: 'repo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    getRepo(state, action: PayloadAction<string[]>) {
      state.data = action.payload;
    },
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { getRepo, setLoading, setError } = RepoSlice.actions;

export default RepoSlice.reducer;
