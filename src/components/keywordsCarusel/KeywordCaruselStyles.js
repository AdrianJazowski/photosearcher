/** @format */

import styled from "styled-components";

export const OneTagWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const OneTagDiv = styled.div`
  color: grey;
  padding: 13px;
  font-size: 14px;
  margin: 10px;
  border: 1px solid grey;

  text-align: center;
  border-color: #d1d1d1;
  text-transform: capitalize;
  border-radius: 5px;
  @media screen and (max-width: 1025px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }

  &:hover {
    border-color: black;
    transition: border-color 0.3s ease-in-out;
  }
`;
