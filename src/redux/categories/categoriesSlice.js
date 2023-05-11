import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload === 'Under construction' ? 'Under construction' : state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
