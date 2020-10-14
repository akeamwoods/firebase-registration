import React from "react";
import { useTypedSelector } from "../../store";
import { Avatar } from "../Avatar";
import { UsernameText } from "./style";

export const ProfileInfo = () => {
  const user = useTypedSelector((state) => state.user);
  return (
    <span>
      <Avatar img={process.env.PUBLIC_URL + "/placeholder.jpg"} />
      <UsernameText>{user?.email}</UsernameText>
    </span>
  );
};
