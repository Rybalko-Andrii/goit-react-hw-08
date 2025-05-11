import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};

export default Navigation;
