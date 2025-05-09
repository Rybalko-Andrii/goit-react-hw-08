import { Route, Routes } from "react-router-dom";

import SharedLayout from "../SharedLayout/SharedLayout";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictRoute/RestrictRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={<HomePage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />

        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </>
  );
};
export default App;
