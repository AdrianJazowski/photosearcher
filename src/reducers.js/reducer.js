/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  searchWord: "",
  filteredTipsOptions: [],
  arrayOfPhotos: [],
  isSuggestionListVisible: false,
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
    case actionsTypes.DOWNLOAND_PHOTOS_FROM_API:
      return {
        ...state,
        arrayOfPhotos: payload,
        isSuggestionListVisible: false,
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
