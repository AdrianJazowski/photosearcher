/** @format */

import { actionsTypes } from "../actions/actionsTypes";
import {
  getPhotosFromLocalStorage,
  getSearchInputFormLocalStorage,
  getSearchKeywordFromLocalStorage,
} from "../utils/localStorageGetter";

const initialState = {
  searchWord: getSearchInputFormLocalStorage(),
  filteredTipsOptions: [],
  arrayOfPhotos: getPhotosFromLocalStorage(),
  isSuggestionListVisible: false,
  temporaryWord: getSearchKeywordFromLocalStorage(),
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.CHANGE_SEARCH_WORD_AND_ARRAY_TIPS:
      return {
        ...state,
        searchWord: payload.newSearchedWord,
        filteredTipsOptions: payload.filteredArrayOptions,
        isSuggestionListVisible: true,
      };
    case actionsTypes.GET_PHOTOS_FROM_API:
      return {
        ...state,
        temporaryWord: payload.valueToApiCall,
        arrayOfPhotos: payload.newPhotoArray,
        isSuggestionListVisible: false,
      };

    case actionsTypes.CHANGE_INPUT:
      return {
        ...state,
        searchWord: payload,
      };

    default:
      return state;
  }
};

export default reducer;
