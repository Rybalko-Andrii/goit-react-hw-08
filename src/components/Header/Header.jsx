import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <h2>Auth</h2>
      {isLoggedIn && <h2>{user.name}</h2>}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button onClick={() => dispatch(logOut())}>Logout</button>
        )}
      </nav>
    </header>
  );
};
export default Header;
