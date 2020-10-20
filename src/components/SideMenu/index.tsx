import React from "react";
import { Wrapper, NavLinks, Link, Button } from "./style";
import { ProfileInfo } from "./ProfileInfo";
import { useLocation } from "react-router-dom";
import { FaLock, FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = location.pathname !== "/";
  return isLoggedIn ? (
    <Wrapper>
      <ProfileInfo />
      <NavLinks>
        <Link exact to="/home" activeStyle={{ opacity: "1" }}>
          <FaHome size="24" />
          Home
        </Link>
      </NavLinks>
      <Button onClick={() => dispatch(actions.logoutButtonClicked())}>
        <FaLock /> Logout
      </Button>
    </Wrapper>
  ) : null;
};
