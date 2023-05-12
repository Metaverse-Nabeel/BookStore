import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import FormStyles from '../styles/Form.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBooks] = useState({
    title: '',
    author: '',
  });

  const numberOfBooks = useSelector((state) => state.books.length);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'title':
        setBooks({ ...bookData, title: e.target.value });
        break;
      case 'author':
        setBooks({ ...bookData, author: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: numberOfBooks === 0 ? 0 : numberOfBooks + 1,
      title: bookData.title,
      author: bookData.author,
    };
    dispatch(addBook(newBook));
    setBooks({ title: '', author: '' });
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
