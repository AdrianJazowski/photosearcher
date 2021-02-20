/** @format */
import background from "../../assets/background.jpg";
import styled, { css } from "styled-components";

export const SearchEngineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  color: white;
`;
export const ContentWrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchEngineTitle = styled.h2`
  font-size: 46px;
`;
export const SearchEngineParagraph = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-top: 16px;

  ${({ bottomMargin }) =>
    bottomMargin &&
    css`
      margin-bottom: 24px;
    `}
`;
