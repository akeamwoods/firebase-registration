import React from "react";
import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm";
import { SocialMediaLogin } from "../../components/SocialMediaLogin";
import { actions } from "../../store/actions";
import {
  SectionWrapper,
  MainContainer,
  SubContainer,
  SignInButton,
} from "./style";

export const SignIn = () => {
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
        <h1>Sign In</h1>
        <SocialMediaLogin />
        <LoginForm />
      </MainContainer>
    </SectionWrapper>
  );
};
