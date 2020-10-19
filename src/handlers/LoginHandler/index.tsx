import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../store";
import { Wrapper } from "./style";
import { CreateAccount } from "./CreateAccount";
import { SignIn } from "./SignIn";
import { ForgotPassword } from "./ForgotPassword";

export const LoginHandler = () => {
  let history = useHistory();
  const mode = useTypedSelector((state) => state.mode);
  const user = useTypedSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [user, history]);

  return !user ? (
    <Wrapper>
      {mode === "Sign Up" ? (
        <CreateAccount />
      ) : mode === "Sign In" ? (
        <SignIn />
      ) : (
        <ForgotPassword />
      )}
    </Wrapper>
  ) : null;
};
