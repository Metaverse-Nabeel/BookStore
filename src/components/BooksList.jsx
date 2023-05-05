import Book from './Book';

const Books = () => {
  const booksArray = [
    {
      id: 1,
      genre: 'Spirtual',
      title: 'Khuda Aur Mohabbat',
      author: 'Humaira Ahmed',
      status: '60%',
      chapter: 'Chapter 5',
    },
    {
      id: 2,
      genre: 'Spirtual',
      title: 'Zaaviya',
      author: 'Ishfaq Ahmed',
      status: '80%',
      chapter: 'Chapter 6',
    },
  ];

  return (
    <section className="books-container">
      <div className="book-list">
        {booksArray.map((book) => (
          <Book
            key={book.id}
            genre={book.genre}
            title={book.title}
            author={book.author}
            status={book.status}
            chapter={book.chapter}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
