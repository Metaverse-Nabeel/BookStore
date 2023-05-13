// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YEm8x3LXVW0OYFTjTIM7/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(`${API_URL}books`);
  if (res.data) {
    return res.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  await axios.post(`${API_URL}books`, data);
  return data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${API_URL}books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialArray,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchBooks.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[0],
          title: element[1][0].title,
          author: element[1][0].author,
          category: element[1][0].category,
        });
        return newState;
      });
    });

    build.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    });

    build.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
  },
});

export default booksSlice.reducer;
