import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } catch (error) {
      console.log("Login error:", error);
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1>Login now!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sequi
            exercira necessitatibus perspiciatis!
          </p>
        </div>
        <div>
          <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset>
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <div>
                    <Link to="/register">You don't have account? Sign UP!</Link>
                  </div>
                  <button type="submit">Login</button>
                </fieldset>
              </Form>
            </Formik>
            <div></div>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
