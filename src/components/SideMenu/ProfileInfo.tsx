import React from "react";
import { Avatar } from "../Avatar";
import { UsernameText } from "./style";

export const ProfileInfo = () => {
  const user = { firstName: "Akeam", lastName: "Woods" };
  return (
    <span>
      <Avatar img={process.env.PUBLIC_URL + "/placeholder.jpg"} />
      <UsernameText>{`${user?.firstName} ${user?.lastName}`}</UsernameText>
    </span>
  );
};
