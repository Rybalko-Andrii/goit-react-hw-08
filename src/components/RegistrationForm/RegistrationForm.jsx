import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const userName = useId();
  const email = useId();
  const password = useId();

  const RegistrationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(7, "Minimum 7 characters").required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(
        register({
          name: values.userName,
          email: values.email,
          password: values.password,
        })
      ).unwrap();

      actions.resetForm();
    } catch (errors) {
      const formattedErrors = {};

      if (errors.name) {
        formattedErrors.userName = errors.name.message;
      }
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
      validationSchema={RegistrationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label htmlFor={userName} className="label">
              Name
            </label>
            <Field
              className="input"
              type="text"
              name="userName"
              id={email}
              placeholder="Name"
              autoComplete="current-password"
            />

            <label htmlFor={email} className="label">
              Email
            </label>
            <Field
              className="input"
              type="text"
              name="email"
              id={email}
              placeholder="Email"
              autoComplete="current-password"
            />

            <label htmlFor={password} className="label">
              Password
            </label>
            <Field
              className="input"
              type="password"
              name="password"
              id={password}
              placeholder="Password"
              autoComplete="current-password"
            />

            <button
              type="submit"
              disabled={!isValid || !dirty}
              className="btn btn-neutral mt-4"
            >
              Login
            </button>
          </fieldset>

          {/* <label htmlFor={userName}>Name:</label>
          <Field
            type="text"
            name="userName"
            id={userName}
            placeholder="Name"
            autoComplete="current-password"
          />
          <ErrorMessage name="userName" component="span" />

          <label htmlFor={email}>Email:</label>
          <Field type="text" name="email" id={email} placeholder="Email" />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={password}>Password:</label>
          <Field
            type="password"
            name="password"
            id={password}
            placeholder="Password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="span" />

          <button type="submit" disabled={!isValid || !dirty}>
            Register
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
