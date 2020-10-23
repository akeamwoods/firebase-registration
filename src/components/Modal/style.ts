import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 15px;
  max-width: 300px;
  h2 {
    margin: 30px 0 0 0;
  }
`;

export const MessageText = styled.p`
  color: gray;
  margin: 30px 0;
`;

export const ButtonContainer = styled.span`
  display: flex;
  justify-content: stretch;

  button {
    display: flex;
    flex: 1;
    padding: 15px 10px;
    border: none;
  }

  button:first-child {
    margin-right: 5px;
    background: red;
    color: #fff;
  }
  button:last-child {
    margin-left: 5px;
  }
`;
