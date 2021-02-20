/** @format */

import styled, { css } from "styled-components";

export const KeyWordListUl = styled.ul`
  background: #fff;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding-top: 8px;
  margin-top: 8px;
  padding-bottom: 8px;
  width: 80%;
  list-style: none;
  z-index: 100;
  color: black;
  

  ${({ isPhotoView }) =>
    isPhotoView &&
    css`
      position: absolute;
      top: 40px;
      width: 40%;
      align-self: center;
    `}
`;
export const KeyWordListLi = styled.li`
  color: #111;
  padding: 8px 16px;
  line-height: 1.4;
  max-width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  ${({ isPhotoView }) =>
    isPhotoView &&
    css`
      text-align: left;
    `}
`;
