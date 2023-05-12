import { createSlice } from '@reduxjs/toolkit';

const initialArray = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialArray,
  reducers: {
    addBook(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
