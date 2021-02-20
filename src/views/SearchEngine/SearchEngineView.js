/** @format */

import React, { useContext } from "react";
import {
  ContentWrapper,
  SearchEngineParagraph,
  SearchEngineTitle,
  SearchEngineWrapper,
} from "./SearchEngineViewStyles";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AppContext from "../../context";
import CustomInput from "../../components/input/CustomInput";
import KeywordList from "../../components/keywordList/KeywordList";

const SearchEngine = () => {
  const value = useContext(AppContext);
  const { showRedirect } = value;
  const selectedSearchWord = useSelector((state) => state.searchWord);

  const selectedIsSuggestionListVisible = useSelector(
    (state) => state.isSuggestionListVisible
  );

  return (
    <>
      <SearchEngineWrapper>
        <ContentWrapper>
          <SearchEngineTitle>Unsplash</SearchEngineTitle>
          <SearchEngineParagraph>
            The internet’s source of freely-usable images.
          </SearchEngineParagraph>
          <SearchEngineParagraph bottomMargin>
            Powered by creators everywhere.
          </SearchEngineParagraph>
          <CustomInput />
          {selectedSearchWord.length >= 3 && selectedIsSuggestionListVisible ? (
            <KeywordList />
          ) : null}
        </ContentWrapper>
      </SearchEngineWrapper>
      {showRedirect ? <Redirect to={`/photos/${selectedSearchWord}`} /> : null}
    </>
  );
};

export default SearchEngine;
