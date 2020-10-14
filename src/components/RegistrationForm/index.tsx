import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Input,
  Button,
  InputSpan,
  ErrorWrapper,
  ErrorText,
  IconContainer,
} from "./style";
import { actions } from "../../store/actions";
import { RegistrationValues } from "../../store/types";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 15 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 15 characters"),
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
  const handleSignup = (values: Partial<RegistrationValues>) => {
    dispatch(actions.registerUser(values));
  };

  const initialValues: Partial<RegistrationValues> = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSignup(values);
      }}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <Form>
          <InputSpan>
            <ErrorWrapper>
              {errors.firstName && touched.firstName && (
                <ErrorText>{errors.firstName}</ErrorText>
              )}
              <IconContainer>
                <FaUser />
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  type="text"
                ></Input>
              </IconContainer>
            </ErrorWrapper>
            <ErrorWrapper>
              {errors.lastName && touched.lastName && (
                <ErrorText>{errors.lastName}</ErrorText>
              )}
              <IconContainer>
                <FaUser />
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  type="text"
                ></Input>
              </IconContainer>
            </ErrorWrapper>
          </InputSpan>
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
