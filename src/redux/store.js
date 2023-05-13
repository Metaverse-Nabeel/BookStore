import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const reducer = combineReducers({
  books: booksSlice,
  categories: categoriesSlice,
});

const store = configureStore({
  reducer,
});

export default store;
