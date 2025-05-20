import React, { useId } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const email = useId();
  const password = useId();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(7, "Minimum 7 characters").required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      ).unwrap();

      actions.resetForm();
    } catch (errors) {
      const formattedErrors = {};

      if (errors.email) {
        formattedErrors.email = errors.email.message;
      }
      if (errors.password) {
        formattedErrors.password = errors.password.message;
      }

      actions.setErrors(formattedErrors);
    }
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
          <fieldset className="fieldset bg-base-200/50 border-base-300 rounded-box w-2xs md:w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label htmlFor={email} className="label">
              Email
            </label>
            <Field
              className="input h-8 md:h-10 rounded-xl opacity-70"
              type="text"
              name="email"
              id={email}
              placeholder="Enter your email here"
              autoComplete="current-password"
            />

            <label htmlFor={password} className="label">
              Password
            </label>
            <Field
              className="input h-8 md:h-10 rounded-xl opacity-70"
              type="password"
              name="password"
              id={password}
              placeholder="Enter your password here"
              autoComplete="current-password"
            />

            <button
              type="submit"
              disabled={!isValid || !dirty}
              className="btn btn-neutral mt-4 rounded-xl"
            >
              Login
            </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
