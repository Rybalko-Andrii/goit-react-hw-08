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
    <fieldset className="fieldset bg-base-200/70 border-base-300 rounded-box w-2xs md:w-xs border p-4">
      <legend className="fieldset-legend">
        Find contacts by name or phome
      </legend>
      <div className="join">
        <input
          type="text"
          className="input join-item h-8 md:h-10 rounded-l-xl"
          name="filter"
          id="filterId"
          onChange={(e) => onFilter(e.target.value)}
        />
        <button className="btn btn-soft h-8 md:h-10 rounded-r-xl">Find</button>
      </div>
    </fieldset>
  );
};

export default SearchBox;
