import React, { createRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Field, Input, Button, ErrorText, IconContainer } from "./style";
import { FaUpload, FaUser } from "react-icons/fa";
import { DatePickerInput } from "../DatePickerInput";
import { Avatar } from "../Avatar";

const Schema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Maximum 50 characters")
    .required("Please enter your name"),
  dateOfBirth: Yup.string().required("Please select your date of birth"),
  file: Yup.mixed<File>().required("File is required").nullable(),
});

export const ProfileCreation = () => {
  const initialValues: {
    name: string;
    dateOfBirth: string;
    file: File | null;
  } = {
    name: "",
    dateOfBirth: "",
    file: null,
  };
  const [file, setFile] = useState<File | null>(null);
  const ref = createRef<HTMLInputElement>();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        //dispatch action
      }}
      validationSchema={Schema}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Avatar
            img={
              file
                ? URL.createObjectURL(file)
                : process.env.PUBLIC_URL + "/placeholder.jpg"
            }
          />
          <IconContainer>
            <FaUpload />
            <Input
              ref={ref}
              name="file"
              type="file"
              accept="image/*"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files.length) {
                  setFile(event.target.files[0]);
                  setFieldValue("file", event.target.files[0]);
                } else {
                  setFile(null);
                  setFieldValue("file", null);
                }
              }}
            />
          </IconContainer>
          {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
          <IconContainer>
            <FaUser />
            <Field id="name" name="name" placeholder="Name" type="name"></Field>
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
