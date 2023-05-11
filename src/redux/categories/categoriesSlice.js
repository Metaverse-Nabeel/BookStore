import { createSlice } from '@reduxjs/toolkit';

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesReducer.actions;
export default categoriesReducer;
