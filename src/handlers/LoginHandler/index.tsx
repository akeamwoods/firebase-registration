import React, { useEffect } from "react";
import { useTypedSelector } from "../../store";
import { CreateAccount } from "./CreateAccount";
import { Wrapper } from "./style";
import { useHistory } from "react-router-dom";
import { SignIn } from "./SignIn";

export const LoginHandler = () => {
  let history = useHistory();
  const authetnicated = useTypedSelector((state) => state.activeUser);
  const mode = useTypedSelector((state) => state.mode);
  useEffect(() => {
    if (authetnicated) history.push("/users");
  }, [authetnicated, history]);
  return (
    <Wrapper>{mode === "Sign Up" ? <CreateAccount /> : <SignIn />}</Wrapper>
  );
};
