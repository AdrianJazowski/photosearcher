/** @format */

import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CustomInput from "../../components/input/CustomInput";
import KeywordList from "../../components/keywordList/KeywordList";
import KeywordCarusel from "../../components/keywordsCarusel/KeywordCarusel";
import AppContext from "../../context";
import {
  PhotoViewWrapper,
  PhotoViewKeyword,
  PhotoViewSearcherWrapper,
  PhotoViewGridForPhotos,
  PhotoAndTagsWrapper,
  OneTagWrapper,
  OneTag,
  Photo,
} from "./PhotoViewStyles";
import CustomPopup from "../../components/popup/CustomPopup";

const PhotoView = () => {
  const selectedArrayOfPhotos = useSelector((state) => state.arrayOfPhotos);
  const selectedSearchWord = useSelector((state) => state.searchWord);
  const selectedTemporaryWord = useSelector((state) => state.temporaryWord);
  const selectedIsSuggestionListVisible = useSelector(
    (state) => state.isSuggestionListVisible
  );
  const value = useContext(AppContext);
  const { handleClickOpen, handleSetPhoto, arrayOfTags } = value;

  return (
    <>
      <PhotoViewWrapper>
        <PhotoViewSearcherWrapper>
          <CustomInput photoView />
          {selectedSearchWord.length >= 3 && selectedIsSuggestionListVisible ? (
            <KeywordList photoView />
          ) : null}
          <PhotoViewKeyword>{selectedTemporaryWord}</PhotoViewKeyword>
          <KeywordCarusel />
        </PhotoViewSearcherWrapper>

        <PhotoViewGridForPhotos>
          {selectedArrayOfPhotos.map((photo) => (
            <PhotoAndTagsWrapper
              key={photo.id}
              onClick={() => handleSetPhoto(photo)}
            >
              <Photo onClick={handleClickOpen} src={photo.urls.small} />
              <OneTagWrapper>
                {photo.tags.length > 0
                  ? photo.tags.map((tag) => (
                      <OneTag key={tag.title}>{tag.title}</OneTag>
                    ))
                  : arrayOfTags
                      .slice(0, 3)
                      .map((tag) => <OneTag key={tag}>{tag}</OneTag>)}
              </OneTagWrapper>
            </PhotoAndTagsWrapper>
          ))}
          <CustomPopup />
        </PhotoViewGridForPhotos>
      </PhotoViewWrapper>
    </>
  );
};

export default PhotoView;
