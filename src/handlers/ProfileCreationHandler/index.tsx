import React from "react";
import ReactDOM from "react-dom";
import { Wrapper } from "./style";

export const ProfileCreationHandler = () => {
  return ReactDOM.createPortal(
    <Wrapper>
      <input placeholder="First Name"></input>
      <input placeholder="Last Name"></input>
      <input placeholder="Date Of Birth"></input>
    </Wrapper>,
    document.body
  );
};
