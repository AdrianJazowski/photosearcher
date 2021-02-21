/** @format */

import { actionsTypes } from "./actionsTypes";

export const changeSearchWord = (word) => ({
  type: actionsTypes.CHANGE_SEARCH_WORD_AND_ARRAY_TIPS,
  payload: word,
});
export const changeArrayOfPhotos = (photos) => ({
  type: actionsTypes.GET_PHOTOS_FROM_API,
  payload: photos,
});

export const changeSearchInputByKeyWord = (word) => ({
  type: actionsTypes.CHANGE_INPUT,
  payload: word,
});
