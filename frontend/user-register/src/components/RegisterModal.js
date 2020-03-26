import React, { useReducer } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./RegisterModal.css";
const RegisterModal = ({ trigger }) => {
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Required"),
        username: Yup.string()
          .required("Required")
          .min(3, "Min. 3 characters"),
        password: Yup.string()
          .required("Required")
          .min(8, "Min. 8 characters")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <div className="modalContainer">
            <form className="registerForm" onSubmit={handleSubmit}>
              <h2>Sign up</h2>
              <span className="close" onClick={trigger} />
              <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input
                  className="registerInput"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                />
                {errors.email && touched.email && (
                  <div className="inputFeedback">{errors.email}</div>
                )}
              </div>
              <div className="inputContainer">
                <label htmlFor="username">Username</label>
                <input
                  className="registerInput"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  name="username"
                  placeholder="Enter your username"
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                />
                {errors.username && touched.username && (
                  <div className="inputFeedback">{errors.username}</div>
                )}
              </div>
              <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input
                  className="registerInput"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                />
                {errors.password && touched.password && (
                  <div className="inputFeedback">{errors.password}</div>
                )}
              </div>
              <button
                className="registerButton"
                type="submit"
                disabled={isSubmitting}
              >
                <b>Register</b>
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterModal;
