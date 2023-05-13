import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as bookID } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import FormStyles from '../styles/Form.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: bookID(),
      title: bookData.title,
      author: bookData.author,
      category: 'General',
    };
    dispatch(addBook(newBook));
    setBookData({ title: '', author: '' });
  };
  return (
    <div className={FormStyles.formWrapper}>
      <h3>Add New Book</h3>
      <form className={FormStyles.formStyle} onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" id="title" value={bookData.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Book Author" id="author" value={bookData.author} onChange={handleChange} required />
        <button type="submit" id="addBook">
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
