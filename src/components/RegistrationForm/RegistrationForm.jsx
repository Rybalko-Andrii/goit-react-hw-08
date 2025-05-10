import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import { useState } from "react";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, options) => {
    try {
      const res = await dispatch(register(values));

      navigate("/contacts");
    } catch (error) {
      if (error.message.includes("duplicate key error collection")) {
        setErrorMessage(
          "This email is already registered. Please try another one."
        );
      } else {
        setErrorMessage("Registration failed: " + error.message);
      }
    }
  };

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <div>
        <div>
          <h1>Register now!</h1>
        </div>
        <div>
          <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset>
                  <label>Name</label>
                  <Field name="name" type="name" placeholder="Name" />
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <label className="label">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  {errorMessage && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                      {errorMessage}
                    </div>
                  )}
                  <Link to="/login">Sign in!</Link>
                  <button type="submit">Register</button>
                </fieldset>
              </Form>
            </Formik>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
