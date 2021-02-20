/** @format */

import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AppContext from "../../context";
import { BsSearchInput, InputWrapper, SearcherInput } from "./CustomInputSyles";

const CustomInput = ({ photoView }) => {
  const value = useContext(AppContext);
  const {
    handleChangeSearchWordAndArrayTips,
    handleDownloadPhotosFromApiSubmit,
  } = value;
  const selectedSearchWord = useSelector((state) => state.searchWord);

  return (
    <>
      <form onSubmit={handleDownloadPhotosFromApiSubmit}>
        <InputWrapper isPhotoView={photoView}>
          <BsSearchInput />

          <SearcherInput
            onChange={handleChangeSearchWordAndArrayTips}
            type="text"
            name="photo"
            placeholder="type flower..."
            autoComplete="off"
            isPhotoView={photoView}
          />
        </InputWrapper>
      </form>
    </>
  );
};

export default CustomInput;
