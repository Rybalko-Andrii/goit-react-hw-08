import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import React, { useId } from "react";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};

const re = /^\+\d{10,15}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required field"),
  number: Yup.string()
    .matches(re, "The number must be between 10 and 15 characters long")
    .required("Required field"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={FormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {({ isValid, dirty, touched, errors }) => (
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <label className={s.lable} htmlFor={nameId}>
              Name
            </label>
            <Field className={s.input} type="text" name="name" id={nameId} />
            {touched.name && errors.name && (
              <span className={s.error}>{errors.name}</span>
            )}
          </div>
          <div className={s.fieldWrapper}>
            <label className={s.lable} htmlFor={numberId}>
              Number
            </label>
            <Field
              className={s.input}
              type="text"
              name="number"
              id={numberId}
              placeholder="+380"
            />
            {touched.number && errors.number && (
              <span className={s.error}>{errors.number}</span>
            )}
          </div>

          <button
            className={s.button}
            type="submit"
            disabled={!isValid || !dirty}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
