import styled from "styled-components";
import { Field as FormikField } from "formik";

export const Input = styled(FormikField)`
  padding: 15px 10px;
  margin: 5px 0;
  background: #f5f5f5;
  border: none;
  padding-left: 35px;
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

export const Select = styled.select`
  border: none;
  background: none;
  font-weight: bold;
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Header = styled.div`
  margin: 10;
  display: flex;
  justify-content: space-around;
`;
