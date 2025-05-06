import React, { useState, useId } from "react";
import s from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const filterId = useId();
  const dispatch = useDispatch();

  const onFilter = (filter) => {
    setValue(filter);
    dispatch(changeFilter(filter));
  };

  return (
    <div className={s.div}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id={filterId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
