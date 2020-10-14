import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, ErrorText, IconContainer } from "./style";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must contains at least 6 characters"),
});

export const LoginForm = () => {
  const initialValues: { email: string; password: string } = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {}}
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
          <p>Forgot your password?</p>
          <Button type="submit">Sign In</Button>
        </Form>
      )}
    </Formik>
  );
};
