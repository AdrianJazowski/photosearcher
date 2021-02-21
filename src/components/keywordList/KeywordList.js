/** @format */

import React from "react";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchInputByKeyWord } from "../../actions";
import AppContext from "../../context";
import { KeyWordListLi, KeyWordListUl } from "./KeywordListStyles";

const KeywordList = ({ photoView }) => {
  const value = useContext(AppContext);
  const { handleGetPhotosFromApiSubmit } = value;
  const selectedFilteredTipsOptions = useSelector(
    (state) => state.filteredTipsOptions
  );

  const dispatch = useDispatch();

  const storeSearchInputValue = (word) => {
    dispatch(changeSearchInputByKeyWord(word));
    localStorage.setItem("searchInput", JSON.stringify(word));
  };
  return (
    <>
      <KeyWordListUl
        onClick={handleGetPhotosFromApiSubmit}
        isPhotoView={photoView}
      >
        {selectedFilteredTipsOptions.length > 0
          ? selectedFilteredTipsOptions.slice(0, 5).map((word) => {
              return (
                <KeyWordListLi
                  isPhotoView={photoView}
                  key={word}
                  onClick={() => {
                    storeSearchInputValue(word);
                  }}
                >
                  {word}
                </KeyWordListLi>
              );
            })
          : null}
      </KeyWordListUl>
    </>
  );
};

export default KeywordList;
