import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
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
