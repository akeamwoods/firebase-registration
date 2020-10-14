import React from "react";
import { Wrapper, NavLinks, Link, Button } from "./style";
import { ProfileInfo } from "./ProfileInfo";
import { useLocation, useHistory } from "react-router-dom";
import { FaLock, FaUsers } from "react-icons/fa";

export const SideMenu = () => {
  let history = useHistory();
  const location = useLocation();
  const isLoggedIn = location.pathname !== "/";
  const handleLogout = () => {
    history.push("/");
  };
  return isLoggedIn ? (
    <Wrapper>
      <ProfileInfo />
      <NavLinks>
        <Link exact to="/users" activeStyle={{ opacity: "1" }}>
          <FaUsers size="24" />
          Users
        </Link>
      </NavLinks>
      <Button onClick={handleLogout}>
        <FaLock /> Logout
      </Button>
    </Wrapper>
  ) : null;
};
