import React, { useId } from "react";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filterId = useId();
  const dispath = useDispatch();

  const onFilter = (filter) => {
    dispath(changeFilter(filter));
  };

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name or phome</label>
      <input
        type="text"
        name="filter"
        id="filterId"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
