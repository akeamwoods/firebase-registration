import React from "react";
import { useTypedSelector } from "../../store";
import { ProfileCreationHandler } from "../ProfileCreationHandler";

import { Wrapper } from "./style";

export const HomeHandler = () => {
  const showProfileCreationPage = useTypedSelector(
    (state) => state.showProfileCreation
  );
  return (
    <Wrapper>{showProfileCreationPage && <ProfileCreationHandler />}</Wrapper>
  );
};
