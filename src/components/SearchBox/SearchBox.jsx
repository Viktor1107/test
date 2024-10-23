import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrap}>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
      {/* <p>{filter}</p> */}
    </div>
  );
};

export default SearchBox;
