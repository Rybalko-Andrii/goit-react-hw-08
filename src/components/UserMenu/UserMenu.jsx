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
    <>
      <p>Hello, {userName}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default UserMenu;
