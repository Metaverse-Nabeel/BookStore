import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const combineBothReducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  combineBothReducers,
});

export default store;