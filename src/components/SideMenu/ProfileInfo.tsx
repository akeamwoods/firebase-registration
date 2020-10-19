import React from "react";
import { useTypedSelector } from "../../store";
import { Avatar } from "../Avatar";
import { UsernameText, ProfileSpan } from "./style";

export const ProfileInfo = () => {
  const user = useTypedSelector((state) => state.user);
  return (
    <ProfileSpan>
      <Avatar img={process.env.PUBLIC_URL + "/placeholder.jpg"} />
      <UsernameText>{user?.email}</UsernameText>
    </ProfileSpan>
  );
};
