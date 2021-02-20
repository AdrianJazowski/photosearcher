/** @format */

import styled, { css } from "styled-components";

export const PhotoViewWrapper = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PhotoViewGridForPhotos = styled.div`
  column-count: 3;
  line-height: 0;
  padding: 100px 0;
`;

export const PhotoAndTagsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const OneTag = styled.p`
  justify-content: center;
  margin: 0 15px 0 0;
  padding: 15px;
  color: rgb(58, 58, 58);
  background-color: rgba(206, 206, 206, 0.45);
`;
export const OneTagWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
`;

export const PhotoViewSearcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  margin-left: 18px;
`;

export const PhotoViewKeyword = styled.h2`
  font-size: 46px;
  text-align: left;
  text-transform: capitalize;
`;
