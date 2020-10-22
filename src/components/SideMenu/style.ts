import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.07);
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex:1;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
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
  color: #000;
  svg {
    margin-right: 10px;
  }
`;

export const UsernameText = styled.p`
  margin-top: 5px;
`;

export const ProfileSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
