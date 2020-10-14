import React from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import {
  SectionWrapper,
  MainContainer,
  SubContainer,
  SignInButton,
} from "./style";

export const CreateAccount = () => {
  return (
    <SectionWrapper>
      <SubContainer>
        <h1>Welcome Back!</h1>
        <p>Already have an account? Click below to login!</p>
        <SignInButton onClick={() => void {}}>Sign In</SignInButton>
      </SubContainer>
      <MainContainer>
        <h1>Create Account</h1>
        <RegistrationForm />
      </MainContainer>
    </SectionWrapper>
  );
};
