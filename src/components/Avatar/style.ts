import styled from "styled-components";

type AvatarProps = {circle:boolean};

export const Image = styled.img.attrs((props: AvatarProps) => ({}))<
AvatarProps
>`
  padding: 0;
  margin: 0;
  vertical-align: middle;
  object-fit: cover;
  object-position: 50% 50%;
  align-self:center;
  border-radius: ${(props) => (props.circle ? "50%" : "none")};
`;


