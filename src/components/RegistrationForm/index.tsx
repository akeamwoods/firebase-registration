import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, ErrorText, IconContainer } from "./style";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actions as rootActions } from "./../../store/actions";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must contains at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("You must confirm your password"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues: any = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(
          rootActions.registrationButtonClicked({
            email: values.email,
            password: values.password,
          })
        );
      }}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.email && touched.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
          <IconContainer>
            <FaEnvelope />
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            ></Input>
          </IconContainer>
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <IconContainer>
            <FaLock />
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            ></Input>
          </IconContainer>
          {errors.confirmPassword && touched.confirmPassword && (
            <ErrorText>{errors.confirmPassword}</ErrorText>
          )}
          <IconContainer>
            <FaLock />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            ></Input>
          </IconContainer>
          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};
