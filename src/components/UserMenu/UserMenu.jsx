import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectName);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="flex gap-2 items-center">
      <p className=" text-sm sm:text-base md:text-lg text-black">
        Hello, {userName}
      </p>
      <button
        className="cursor-pointer border border-white-500 text-white-500 bg-transparent 
       px-4 py-2 text-sm 
       sm:px-5 sm:py-2.5 sm:text-base 
       md:px-6 md:py-3 md:text-lg 
       rounded-3xl hover:bg-gray-800 hover:text-white 
       transition duration-300"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
