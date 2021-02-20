/** @format */

import styled, { css } from "styled-components";
import { BsSearch } from "react-icons/bs";

export const InputWrapper = styled.div`
  height: 48px;
  width: 80%;
  display: flex;
  background-color: white;
  border-radius: 4px;

  ${({ isPhotoView }) =>
    isPhotoView &&
    css`
      width: 60%;
      height: 40px;
      border-radius: 24px;
      background-color: #eee;
      font-size: 14px;
      border: 1px solid transparent;
      margin: auto;
    `}
`;
export const SearcherInput = styled.input`
  border: none;
  width: 100%;
  background: #fff;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%);
  border-radius: 4px;
  ${({ isPhotoView }) =>
    isPhotoView &&
    css`
      width: 100%;
      box-shadow: none;
      border: none;
      background: transparent;
    `}
`;
export const BsSearchInput = styled(BsSearch)`
  margin: auto 15px;
  color: grey;
  cursor: pointer;
`;
