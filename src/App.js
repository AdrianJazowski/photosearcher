/** @format */

import axios from "axios";
import React, { useState } from "react";
import { apiKey } from "./api/apiKey";
import { formatedAutoCompleteData } from "./utils/formatedAutoCompleteData";
import { useDispatch, useSelector } from "react-redux";
import { changeArrayOfPhotos, changeSearchWord } from "./actions";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Router from "./routing/Router";
import AppContext from "./context";

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [showRedirect, setShowRedirect] = useState(false);
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
    localStorage.setItem("searchInput", JSON.stringify(newSearchedWord));
  };

  const handleGetPhotosFromApiSubmit = (e) => {
    let valueToApiCall;

    if (e.target.matches("form")) {
      e.preventDefault();
      valueToApiCall = e.target.searchPhoto.value;
    } else {
      valueToApiCall = e.target.innerText;
    }

    const url = `https://api.unsplash.com/search/photos?page=1&query=${valueToApiCall}&client_id=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        const newPhotoArray = response.data.results;
        const newPhotoAndKeyWord = {
          newPhotoArray,
          valueToApiCall,
        };

        dispatch(changeArrayOfPhotos(newPhotoAndKeyWord));
        localStorage.setItem("photos", JSON.stringify(newPhotoArray));
        localStorage.setItem("searchKeyword", JSON.stringify(valueToApiCall));
      })
      .then(() => setShowRedirect(true))
      .then(
        () =>
          (window.location.pathname = `/photos/${valueToApiCall.replace(
            /\s/g,
            ""
          )}`)
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AppContext.Provider
        value={{
          handleChangeSearchWordAndArrayTips,
          handleGetPhotosFromApiSubmit,
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
