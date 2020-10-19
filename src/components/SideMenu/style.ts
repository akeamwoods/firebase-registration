import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: Yellow;
  padding: 30px;
  justify-content: space-between;
  background: #55b6a8;
  p {
    color: #fff;
    margin: 0;
    font-weight: 400;
  }
  align-items: center;
  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.07);
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 20px;
  font-weight: 0;
  opacity: 0.6;
  transition: 0.3s;
  display: flex;
  svg {
    margin-right: 10px;
  }
  :hover {
    opacity: 1;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
  color: #fff;
  svg {
    margin-right: 10px;
  }
`;

export const UsernameText = styled.p`
  margin-top: 10px;
`;

export const ProfileSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
