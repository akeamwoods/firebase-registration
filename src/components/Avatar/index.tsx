import React from "react";
import { Image } from "./style";

export const Avatar: React.FC<{
  img: string;
  size?: number;
  circle?: boolean;
}> = ({ img, size = 100, circle = false }) => {
  return (
    <Image
      circle={circle}
      height={size}
      width={size}
      src={img}
      alt="placeholder avatar"
    />
  );
};
