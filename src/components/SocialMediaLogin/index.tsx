import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { Wrapper, Button } from "./style";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const SocialMediaLogin = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(actions.loginWithFacebookButtonClicked())}
      >
        <FaFacebook size="50" color="#4267b2" />
      </Button>
      <Button onClick={() => dispatch(actions.loginWithGoogleButtonClicked())}>
        <FcGoogle size="50" />
      </Button>
    </Wrapper>
  );
};
