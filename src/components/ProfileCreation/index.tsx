import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, ErrorText, IconContainer } from "./style";
import { FaUser } from "react-icons/fa";
import { DatePickerInput } from "../DatePickerInput";

const Schema = Yup.object().shape({
  name: Yup.string().max(50, "Maximum 50 characters").required("Name required"),
  dateOfBirth: Yup.string(),
});

export const ProfileCreation = () => {
  const initialValues: { name: string; dateOfBirth: string } = {
    name: "",
    dateOfBirth: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        //dispatch action
      }}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
          <IconContainer>
            <FaUser />
            <Input id="name" name="name" placeholder="Name" type="name"></Input>
          </IconContainer>
          {errors.dateOfBirth && touched.dateOfBirth && (
            <ErrorText>{errors.dateOfBirth}</ErrorText>
          )}
          <DatePickerInput name="dateOfBirth" />
          <Button type="submit">Update Profile</Button>
        </Form>
      )}
    </Formik>
  );
};
