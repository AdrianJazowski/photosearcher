/** @format */

import axios from "axios";
import React, { useState } from "react";
import { apiKey } from "./api/apiKey";
import { formatedAutoCompleteData } from "./utils/formatedAutoCompleteData";
import { useDispatch, useSelector } from "react-redux";
import {
  changeArrayOfPhotos,
  changeKeyword,
  changeSearchWord,
} from "./actions";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Router from "./routing/Router";
import AppContext from "./context";
import store from "./store";
import { saveStoreState } from "./util/localStorage";

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [showRedirect, setShowRedirect] = useState(false);
  const selectedSearchWord = useSelector((state) => state.searchWord);
  const dispatch = useDispatch();
  const selectedArrayOfPhotos = useSelector((state) => state.arrayOfPhotos);

  const formatedArrayOfTags = selectedArrayOfPhotos.flatMap(
    (item) => item.tags
  );

  const arrayOfTags = formatedArrayOfTags.map((tag) => tag.title);

  const handleClickOpen = () => {
    setOpenPopup(!openPopup);
  };
  const handleSetPhoto = (photo) => {
    setCurrentPhoto(photo);
  };

  const handleChangeSearchWordAndArrayTips = (e) => {
    const newSearchedWord = e.target.value;
    const filteredArrayOptions = formatedAutoCompleteData.filter((data) => {
      let keyword = data
        .toLocaleLowerCase()
        .includes(newSearchedWord.toLocaleLowerCase());
      return keyword;
    });

    const newValueFromInput = {
      newSearchedWord,
      filteredArrayOptions,
    };
    dispatch(changeSearchWord(newValueFromInput));
  };

  const handleDownloadPhotosFromApiSubmit = (e) => {
    e.preventDefault();

    const url = `https://api.unsplash.com/search/photos?page=1&query=${selectedSearchWord}&client_id=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        const newPhotoArray = response.data.results;

        dispatch(changeArrayOfPhotos(newPhotoArray));
      })
      .then(() => setShowRedirect(true))
      .catch((err) => console.log(err));

    // saveStoreState(store.getState());
  };

  const handleChangeKeywordFromTheTipsList = (e) => {
    const inputValue = {
      searchWord: e.target.innerText,
      selectedFilteredTipsOptions: [],
    };
    dispatch(changeKeyword(inputValue));
  };

  return (
    <>
      <AppContext.Provider
        value={{
          handleChangeSearchWordAndArrayTips,
          handleDownloadPhotosFromApiSubmit,
          handleChangeKeywordFromTheTipsList,
          showRedirect,
          openPopup,
          handleClickOpen,
          handleSetPhoto,
          currentPhoto,
          arrayOfTags,
        }}
      >
        <GlobalStyles />
        <Router />
      </AppContext.Provider>
    </>
  );
};

export default App;
