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
    <div className="dFlex flexSpace bookCard">
      <div className={styles.leftSide}>
        <div>
          <p className={styles.category}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          <ul className={styles.buttonsContainer}>
            <Button
              title="Comments"
              handleClick={() => { }}
              className={styles.button}
            />
            <Button
              title="Remove"
              handleClick={() => {
                handleRemove(id);
              }}
              className={styles.button}
            />
            <Button
              title="Edit"
              handleClick={() => { }}
              className={styles.button}
            />
          </ul>
        </div>
      </div>
      <div className="dFlex flexSpace cardRight">
        <div className="mainCardRight">
          <div className="dFlex flexSpace">
            <div className={styles.ovalShape} />
            <div className={styles.numbers}>
              <p className={styles.percentNumber}>80%</p>
              <p className={styles.percentText}>Completed</p>
            </div>
          </div>
        </div>
        <div className={styles.currentChapter}>
          <h3 className={styles.currentTitle}>Current Chapter</h3>
          <p className={styles.chapter}>Chapter 2</p>
          <Button
            title="Update Progress"
            handleClick={() => { }}
            className={styles.chapterButton}
          />
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
