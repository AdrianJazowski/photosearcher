/** @format */

export const getPhotosFromLocalStorage = () => {
  let localStoragePhotos;

  if (localStorage.getItem("photos")) {
    localStoragePhotos = JSON.parse(localStorage.getItem("photos"));
  } else {
    localStoragePhotos = [];
  }

  return localStoragePhotos;
};

export const getSearchInputFormLocalStorage = () => {
  let localStorageSearchInput;

  if (localStorage.getItem("searchInput")) {
    localStorageSearchInput = JSON.parse(localStorage.getItem("searchInput"));
  } else {
    localStorageSearchInput = "";
  }

  return localStorageSearchInput;
};
export const getSearchKeywordFromLocalStorage = () => {
  let localStorageSearchKeyword;

  if (localStorage.getItem("searchKeyword")) {
    localStorageSearchKeyword = JSON.parse(
      localStorage.getItem("searchKeyword")
    );
  } else {
    localStorageSearchKeyword = "";
  }

  return localStorageSearchKeyword;
};
