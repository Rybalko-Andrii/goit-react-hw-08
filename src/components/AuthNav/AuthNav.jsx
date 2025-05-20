import React from "react";

import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink
        className="border border-white-500 text-white-500 bg-transparent 
        px-4 py-2 text-sm 
        sm:px-5 sm:py-2.5 sm:text-base 
        md:px-6 md:py-3 md:text-lg 
        rounded-3xl hover:bg-gray-800 hover:text-white 
        transition duration-300"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="border border-white-500 text-white-500 bg-transparent 
        px-4 py-2 text-sm 
        sm:px-5 sm:py-2.5 sm:text-base 
        md:px-6 md:py-3 md:text-lg 
        rounded-3xl hover:bg-gray-800 hover:text-white 
        transition duration-300"
        to="/register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
