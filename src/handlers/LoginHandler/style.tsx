import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 15%;
  justify-content: center;
  color: #55b6a8;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #55b6a8;
  color: #fff;
  width: 300px;
  h1 {
    margin: 0;
  }
  p {
    margin: 20px 0;
  }
  button {
    padding: 15px 30px;
  }
`;

export const SignInButton = styled.button`
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  margin-top: 5px;
  padding: 15px 10px;
`;
