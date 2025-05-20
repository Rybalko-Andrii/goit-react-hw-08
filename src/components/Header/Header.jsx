import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      {isLoggedIn && <h2>{user.name}</h2>}
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>

        {!isLoggedIn ? (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        ) : (
          <button onClick={() => dispatch(logOut())}>Logout</button>
        )}
      </nav>
    </header>
  );
};
export default Header;
