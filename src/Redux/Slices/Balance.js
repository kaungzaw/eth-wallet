import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    requested: (state) => {
      state.isLoading = true;
    },
    failed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loaded: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    reset: (state) => {
      state.data = undefined;
      state.error = undefined;
      state.isLoading = false;
    },
  },
});

export const { requested, failed, loaded, reset } = balanceSlice.actions;

export const selectBalance = (state) => state.balance;

export default balanceSlice.reducer;
