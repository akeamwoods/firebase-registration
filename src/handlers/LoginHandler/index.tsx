import React, { useEffect } from "react";
import { useTypedSelector } from "../../store";
import { CreateAccount } from "./CreateAccount";
import { Wrapper } from "./style";
import { SignIn } from "./SignIn";
import { useHistory } from "react-router-dom";

export const LoginHandler = () => {
  let history = useHistory();
  const mode = useTypedSelector((state) => state.mode);
  const user = useTypedSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      history.push("/users");
    }
  }, [user, history]);

  return !user ? (
    <Wrapper>{mode === "Sign Up" ? <CreateAccount /> : <SignIn />}</Wrapper>
  ) : null;
};
