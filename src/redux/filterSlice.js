import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, action) {},
  },
});

export const filterReducer = filterSlice.reducer;

export const { updateFilter } = filterSlice.actions;
