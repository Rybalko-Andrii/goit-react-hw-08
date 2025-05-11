import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div className="flex gap-4">
      <NavLink
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        to="/"
      >
        Home
      </NavLink>
      {isLogged && (
        <NavLink
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
