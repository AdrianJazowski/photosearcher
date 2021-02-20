/** @format */
import styled, { css } from "styled-components";
import Dialog from "@material-ui/core/Dialog";
export const Popup = styled(Dialog)`
  height: 90vh;
  width: 80vw;
  margin: auto;
  .MuiDialog-paperWidthSm {
    max-width: none;
  }
`;

export const PopupDiv = styled.div`
  background: white;
  width: 70vw;
  height: 90vh;
  display: flex;
  justify-content: center;
`;

export const ImgPopup = styled.img`
  align-self: center;
`;

export const IconsSpan = styled.span`
  position: absolute;
  display: flex;
  width: 100px;
  height: 40px;

  ${({ righttop }) =>
    righttop &&
    css`
      right: 15px;
      top: 15px;
    `}
  svg {
    width: 55px;
    height: 35px;
    margin: 2px;
    padding: 5px 7px;
    color: #767676;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ShareOrLocationSpan = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  bottom: 15px;
  right: 15px;

  span {
    width: 55px;
    height: 35px;
    margin: 2px;
    padding: 5px 7px;
    color: #767676;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    cursor: pointer;
  }

  ${({ left }) =>
    left &&
    css`
      span {
        border: none;
      }
      left: 15px;
      bottom: 15px;

      svg {
        margin: 0 5px -2px 0px;
      }
    `}
`;
export const UserNameDiv = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  left: 15px;
  top: 15px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 1fr;
  img {
    grid-column: 1/2;
    grid-row: 1/3;
    margin: auto;
  }
  p {
    font-size: 11px;
    letter-spacing: 0.02em;
    color: grey;
  }
  h1 {
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`;
