import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const fetchedBooks = useRef(true);
  useEffect(() => {
    if (fetchedBooks.current) {
      fetchedBooks.current = false;
      dispatch(fetchBooks());
    }
  }, []);
  const booksArray = useSelector((state) => state.books);
  return (
    <section className="booksContainer">
      <div className="bookList">
        {booksArray.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
