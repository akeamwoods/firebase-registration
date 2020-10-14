import React from "react";
import { useDispatch } from "react-redux";
import { RegistrationForm } from "../../components/RegistrationForm";
import { actions } from "../../store/actions";
import {
  SectionWrapper,
  MainContainer,
  SubContainer,
  SignInButton,
} from "./style";

export const CreateAccount = () => {
  const dispatch = useDispatch();
  return (
    <SectionWrapper>
      <SubContainer>
        <h1>Welcome Back!</h1>
        <p>Already have an account? Click below to login!</p>
        <SignInButton
          onClick={() => dispatch(actions.createAccountButtonClicked())}
        >
          Sign In
        </SignInButton>
      </SubContainer>
      <MainContainer>
        <h1>Create Account</h1>
        <RegistrationForm />
      </MainContainer>
    </SectionWrapper>
  );
};
