import FormStyles from '../styles/Form.module.css';

const AddBook = () => (
  <div className={FormStyles.formWrapper}>
    <h3>Add New Book</h3>
    <form className={FormStyles.formStyle}>
      <input type="text" name="title" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Book Author" />
      <button type="submit" id="addBook">
        Add book
      </button>
    </form>
  </div>
);

export default AddBook;
