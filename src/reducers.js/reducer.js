/** @format */

import { act } from "react-dom/test-utils";
import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  searchWord: "",
  filteredTipsOptions: [],
  arrayOfPhotos: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.CHANGE_SEARCH_WORD_AND_ARRAY_TIPS:
      return {
        ...state,
        searchWord: payload.newSearchedWord,
        filteredTipsOptions: payload.filteredArrayOptions,
      };
    case actionsTypes.DOWNLOAND_PHOTOS_FROM_API:
      return {
        ...state,
        arrayOfPhotos: payload,
      };
    case actionsTypes.CHANGE_KEYWORD_FROM_THE_TIPS_LIST:
      return {
        ...state,
        searchWord: payload.searchWord,
        filteredTipsOptions: payload.selectedFilteredTipsOptions,
      };
    default:
      return state;
  }
};

export default reducer;
