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
          <label htmlFor={email}>Email:</label>
          <Field
            type="text"
            name="email"
            id={email}
            placeholder="Enter your email here"
            autoComplete="current-password"
          />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={password}>Password:</label>
          <Field
            type="password"
            name="password"
            id={password}
            placeholder="Enter your password here"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="span" />

          <button type="submit" disabled={!isValid || !dirty}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
