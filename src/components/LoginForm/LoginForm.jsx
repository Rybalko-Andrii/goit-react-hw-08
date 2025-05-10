import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
      setError("");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1>Login now!</h1>
      </div>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

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
              <Link to="/register">Sign UP!</Link>
            </div>
            <button type="submit">Login</button>
          </fieldset>
        </Form>
      </Formik>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default LoginForm;
