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
    <div className="flex gap-4">
      <p class="pt-4 text-xl">Hello, {userName}</p>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
