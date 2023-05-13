// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Buttons';
import styles from '../styles/Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div className={styles.bookCard}>
      <div className={styles.leftSide}>
        <div>
          <p className={styles.genre}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          <ul>
            <Button
              title="Comments"
              handleClick={() => { }}
              className="btn"
            />
            <Button
              title="Remove"
              handleClick={() => {
                handleRemove(id);
              }}
              className="removeBtn"
            />
            <Button
              title="Edit"
              handleClick={() => { }}
              className="btn"
            />
          </ul>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <div>
            <p>80%</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <h3>Current Chapter</h3>
          <p>Chapter 2</p>
          <Button
            title="Update Progress"
            handleClick={() => { }}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
};

Book.defaultProps = {
  category: 'General',
};

export default Book;
