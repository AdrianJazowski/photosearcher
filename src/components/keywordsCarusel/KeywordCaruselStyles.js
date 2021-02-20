/** @format */

import styled, { css } from "styled-components";

export const OneTagWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const OneTagLi = styled.li`
  /* min-width: 145px; */
  color: grey;
  padding: 13px;
  font-size: 14px;
  margin: 10px;
  border: 1px solid grey;

  text-align: center;
  border-color: #d1d1d1;
  text-transform: capitalize;
  border-radius: 5px;
  /* overflow: hidden; */

  &:hover {
    border-color: black;
    transition: border-color 0.3s ease-in-out;
  }
`;