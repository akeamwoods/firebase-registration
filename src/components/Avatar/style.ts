import styled from "styled-components";

export const Image = styled.img<{circle: boolean}>`
${props => props.circle && `
    border-radius: 50%;
  `}
  padding: 0;
  margin: 0;
  vertical-align: middle;
  object-fit: cover;
  object-position: 50% 50%;
  align-self:center;
`;