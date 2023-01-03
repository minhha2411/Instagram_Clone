import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import handler from "../../pages/api/login";
import Router from "next/router";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialErrors: {
      userName: "",
      userPassword: "",
    },
    initialValues: {
      userName: "",
      userPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .email("Invalid email address")
        .required("Username Required"),
      userPassword: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Password Required"),
    }),
    onSubmit: async (values) => {
      const statusCode = await handler(values, null, null);
      if (statusCode === 201) {
        Router.push("/home");
      }
    },
  });

  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <h2 className="base--center">Instagram</h2>
        <form className="base--center" onSubmit={formik.handleSubmit}>
          <div className={styles.login__userName}>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="userName">
              <span className={styles.floatingLabel}>
                Phone number, username, or email
              </span>
            </label>
          </div>
          <div className="base--mt2"></div>
          <div className={styles.login__passWord}>
            <input
              type={showPassword ? "text" : "password"}
              name="userPassword"
              id="userPassword"
              onChange={formik.handleChange}
              value={formik.values.userPassword}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="password">
              <span className={styles.floatingLabel}>Password</span>
            </label>
            <div
              className={styles.passwordShow}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </div>
          </div>
          <div className="base--mt3"></div>
          <button
            type="submit"
            className={
              Object.keys(formik.errors).length === 0
                ? "base--button__active"
                : "base--button__disable"
            }
          >
            Log in
          </button>
          {formik.touched.userName && formik.errors.userName ? (
            <div className={styles.login__error}>{formik.errors.userName}</div>
          ) : null}
          {formik.touched.userPassword && formik.errors.userPassword ? (
            <div className={styles.login__error}>
              {formik.errors.userPassword}
            </div>
          ) : null}
        </form>
      </div>
      <div className={`${styles.signup__form} base--center`}>
        <p>
          Dont have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
