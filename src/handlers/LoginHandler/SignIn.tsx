import React from "react";
import { LoginForm } from "../../components/LoginForm";
import {
  SectionWrapper,
  MainContainer,
  SubContainer,
  SignInButton,
} from "./style";

export const SignIn = () => {
  return (
    <SectionWrapper>
      <SubContainer>
        <h1>Welcome, Friend!</h1>
        <p>Never been here before? Click below to create an account!</p>
        <SignInButton onClick={() => void {}}>Sign Up</SignInButton>
      </SubContainer>
      <MainContainer>
        <h1>Sign In</h1>
        <LoginForm />
      </MainContainer>
    </SectionWrapper>
  );
};
