import React from "react";
import { useTypedSelector } from "../../store";
import { CreateAccount } from "./CreateAccount";
import { Wrapper } from "./style";
import { SignIn } from "./SignIn";

export const LoginHandler = () => {
  const mode = useTypedSelector((state) => state.mode);

  return (
    <Wrapper>{mode === "Sign Up" ? <CreateAccount /> : <SignIn />}</Wrapper>
  );
};
