import React from "react";
import ReactDOM from "react-dom";
import { ProfileCreation } from "../../components/ProfileCreation";
import { Wrapper, Container } from "./style";

export const ProfileCreationHandler = () => {
  return ReactDOM.createPortal(
    <Wrapper>
      <Container>
        <ProfileCreation />
      </Container>
    </Wrapper>,
    document.body
  );
};
