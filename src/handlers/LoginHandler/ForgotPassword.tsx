import React from "react";
import { useDispatch } from "react-redux";
import { PasswordReset } from "../../components/PasswordReset";
import { actions } from "../../store/actions";
import {
  SectionWrapper,
  MainContainer,
  SubContainer,
  SignInButton,
} from "./style";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  return (
    <SectionWrapper>
      <SubContainer>
        <h1>Welcome, Friend!</h1>
        <p>Never been here before? Click below to create an account!</p>
        <SignInButton onClick={() => dispatch(actions.signUpButtonClicked())}>
          Sign Up
        </SignInButton>
      </SubContainer>
      <MainContainer>
        <h1>Password Reset</h1>
        <PasswordReset />
      </MainContainer>
    </SectionWrapper>
  );
};
