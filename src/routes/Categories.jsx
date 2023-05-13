import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categoriesContainer">
      <div className="categoriesDiv">
        <button
          className="categoriesButton"
          type="button"
          onClick={handleClick}
        >
          Check Status
        </button>
        <h3 className="categoriesText">{category}</h3>
      </div>
    </section>
  );
};

export default Categories;
