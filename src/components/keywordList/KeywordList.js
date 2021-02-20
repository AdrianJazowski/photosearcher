/** @format */

import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AppContext from "../../context";
import { KeyWordListLi, KeyWordListUl } from "./KeywordListStyles";

const KeywordList = ({ photoView }) => {
  const value = useContext(AppContext);
  const {
    handleDownloadPhotosFromApiSubmit,
    handleChangeKeywordFromTheTipsList,
  } = value;
  const selectedFilteredTipsOptions = useSelector(
    (state) => state.filteredTipsOptions
  );

  return (
    <>
      <KeyWordListUl isPhotoView={photoView}>
        {selectedFilteredTipsOptions.length > 0
          ? selectedFilteredTipsOptions.slice(0, 5).map((word) => {
              return (
                <KeyWordListLi
                  isPhotoView={photoView}
                  key={word}
                  onClick={(e) => {
                    handleChangeKeywordFromTheTipsList(e);
                    handleDownloadPhotosFromApiSubmit(e);
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
