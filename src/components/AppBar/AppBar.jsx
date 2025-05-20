import React from "react";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <nav className="justify-between px-2">
      <ul className="flex justify-between">
        <li>
          <Navigation />
        </li>
        <li>{isLogged ? <UserMenu /> : <AuthNav />}</li>
      </ul>
    </nav>
  );
};

export default AppBar;
