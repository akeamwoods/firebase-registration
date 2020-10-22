import React from "react";
import { Image } from "./style";

export const Avatar: React.FC<{ img: string; size?: number }> = ({
  img,
  size = 100,
}) => {
  return (
    <Image height={size} width={size} src={img} alt="placeholder avatar" />
  );
};
