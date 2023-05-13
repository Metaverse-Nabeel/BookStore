import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categorySection">
      <div className="categoryDiv">
        <button
          className="categoryBtn"
          type="button"
          onClick={handleClick}
        >
          Check Status
        </button>
        <h3 className="categoryText">{category}</h3>
      </div>
    </section>
  );
};

export default Categories;
