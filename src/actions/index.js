/** @format */

import { actionsTypes } from "./actionsTypes";

export const changeSearchWord = (word) => ({
  type: actionsTypes.CHANGE_SEARCH_WORD_AND_ARRAY_TIPS,
  payload: word,
});
export const changeArrayOfPhotos = (photos) => ({
  type: actionsTypes.DOWNLOAND_PHOTOS_FROM_API,
  payload: photos,
});
export const changeKeyword = (word) => ({
  type: actionsTypes.CHANGE_KEYWORD_FROM_THE_TIPS_LIST,
  payload: word,
});

export const showSuggestionList = () => ({
  type: actionsTypes.SHOW_SUGGESTION_LIST,
});

export const hideSuggestionList = () => ({
  type: actionsTypes.HIDE_SUGGESTION_LIST,
});
