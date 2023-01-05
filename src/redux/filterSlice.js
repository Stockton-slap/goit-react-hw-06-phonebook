import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, action) {
      state = action.payload;

      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { updateFilter } = filterSlice.actions;
