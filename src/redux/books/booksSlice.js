import { createSlice } from '@reduxjs/toolkit';

const booksReducer = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook(state, action) {
      state.push({
        id: action.payload.id,
        genre: action.payload.genre,
        title: action.payload.title,
        author: action.payload.author,
        status: action.payload.status,
        chapter: action.payload.chapter,
      });
    },
    removeBook(state, action) {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksReducer.actions;
export default booksReducer.reducer;