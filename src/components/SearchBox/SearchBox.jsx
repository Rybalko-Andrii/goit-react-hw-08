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
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">
        Find contacts by name or phome
      </legend>
      <div className="join">
        <input
          type="text"
          className="input join-item"
          name="filter"
          id="filterId"
          onChange={(e) => onFilter(e.target.value)}
        />
        <button className="btn join-item">Find</button>
      </div>
    </fieldset>
  );
};

export default SearchBox;
