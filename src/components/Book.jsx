// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import Button from './Buttons';
import styleModule from '../styles/Book.module.css';

const Book = ({
  genre, title, author, status, chapter,
}) => {
  const Btns = [
    {
      id: 1,
      title: 'Comments',
    },
    {
      id: 2,
      title: 'Remove',
    },
    {
      id: 3,
      title: 'Edit',
    },
  ];

  return (
    <div className={styleModule.bookCard}>
      <div className={styleModule.cardLeft}>
        <div>
          <p className={styleModule.genre}>{genre}</p>
          <h2 className={styleModule.title}>{title}</h2>
          <p className={styleModule.author}>{author}</p>
          <ul className={styleModule.utilityBtns}>
            {Btns.map((button) => (
              <Button key={button.id} title={button.title} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styleModule.cardRight}>
        <div>
          <div>
            <p>{status}</p>
            <p>Completed</p>
          </div>
        </div>
        <div className={styleModule.updateBtn}>
          <h3>Current Chapter</h3>
          <p>{chapter}</p>
          <Button title="Update progress" />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
