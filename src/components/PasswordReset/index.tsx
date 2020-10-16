import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Input,
  Button,
  ErrorText,
  IconContainer,
  BackToLoginButton,
} from "./style";
import { FaEnvelope } from "react-icons/fa";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const PasswordReset = () => {
  const dispatch = useDispatch();
  const initialValues: { email: string } = {
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(actions.resetPasswordButtonClicked(values));
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
          <BackToLoginButton
            type="button"
            onClick={() => dispatch(actions.createAccountButtonClicked())}
          >
            Back to Login
          </BackToLoginButton>
          <Button type="submit">Reset Password</Button>
        </Form>
      )}
    </Formik>
  );
};
