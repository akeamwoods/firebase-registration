import React from "react";
import { Image } from "./style";

export const Avatar: React.FC<{ img: string }> = ({ img }) => {
  return <Image src={img} alt="placeholder avatar" />;
};
