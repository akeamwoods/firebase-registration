import React from "react";
import { Container, MessageText, ButtonContainer } from "./style";

export const Modal: React.FC<{
  heading: string;
  message: string;
  onContinue: () => void;
  onCancel: () => void;
}> = ({ heading, message, onContinue, onCancel }) => {
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "/warning.svg"}
        height="72px"
        alt="Warning Icon"
      />
      <h2>{heading}</h2>
      <MessageText>{message}</MessageText>
      <ButtonContainer>
        <button onClick={onContinue}>Continue</button>
        <button onClick={onCancel}>Cancel</button>
      </ButtonContainer>
    </Container>
  );
};
