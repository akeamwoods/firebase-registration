import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled(FormikField)`
  padding: 15px 10px;
  margin: 5px 0;
  background: #f5f5f5;
  border: none;
  padding-left: 35px;
`;

export const Input = styled.input`
  padding: 15px 10px;
  margin: 5px 0;
  background: #f5f5f5;
  border: none;
  padding-left: 35px;
`;

export const Button = styled.button`
  background: #55b6a8;
  color: #fff;
  margin-top: 5px;
  padding: 15px 10px;
  border: none;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
  text-align: left !important;
`;

export const IconContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 20px;
    left: 10px;
  }
  flex: 1;
  display: flex;
  input {
    flex: 1;
  }
`;
