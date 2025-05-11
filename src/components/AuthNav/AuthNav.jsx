import React from "react";

import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        to="/register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
