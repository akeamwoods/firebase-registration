import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { Wrapper } from "./style";

export const SocialMediaLogin = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        onClick={() => dispatch(actions.loginWithFacebookButtonClicked())}
      >
        fb
      </button>
      <button>google</button>
    </Wrapper>
  );
};
