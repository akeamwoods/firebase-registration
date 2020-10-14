import React from "react";
import { Avatar } from "../Avatar";
import { useTypedSelector } from "../../store";
import { UsernameText } from "./style";

export const ProfileInfo = () => {
  const user = useTypedSelector((state) =>
    state.registeredUsers.find((user) => user.id === state.activeUser)
  );
  return (
    <span>
      <Avatar img={process.env.PUBLIC_URL + "/placeholder.jpg"} />
      <UsernameText>{`${user?.firstName} ${user?.lastName}`}</UsernameText>
    </span>
  );
};
