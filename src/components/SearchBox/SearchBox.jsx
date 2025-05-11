import React, { useId } from "react";
import s from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filterId = useId();
  const dispath = useDispatch();

  const onFilter = (filter) => {
    dispath(changeFilter(filter));
  };

  return (
    <div className={s.div}>
      <label htmlFor={filterId}>Find contacts by name or phome</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id="filterId"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
