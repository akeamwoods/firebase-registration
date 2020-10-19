import styled from "styled-components";
import { animated } from "react-spring";

export const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NotificationWrapper = styled(animated.div)`
  position: relative;
  margin: 10px 10px 0 10px;
  max-width: 300px;
  padding: 20px;
  background: #ffffff;
  color: black;
  display: flex;
  flex-direction: row;
  z-index: 10;
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  text-align: left;
  align-items: center;
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #55b6a8;
  }
  h4 {
    margin: 0;
  }
`;
