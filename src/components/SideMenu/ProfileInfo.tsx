import React from "react";
import { useTypedSelector } from "../../store";
import { Avatar } from "../Avatar";
import { UsernameText, ProfileSpan } from "./style";

export const ProfileInfo = () => {
  const profileInfo = useTypedSelector((state) => state.userProfile);
  return (
    <ProfileSpan>
      <Avatar
        circle={true}
        img={
          profileInfo?.img
            ? profileInfo.img
            : process.env.PUBLIC_URL + "/placeholder.jpg"
        }
      />
      <UsernameText>{profileInfo?.name}</UsernameText>
    </ProfileSpan>
  );
};
