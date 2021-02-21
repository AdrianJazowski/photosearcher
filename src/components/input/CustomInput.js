/** @format */

import React from "react";
import { useContext } from "react";
import AppContext from "../../context";
import { BsSearchInput, InputWrapper, SearcherInput } from "./CustomInputSyles";

const CustomInput = ({ photoView }) => {
  const value = useContext(AppContext);
  const {
    handleChangeSearchWordAndArrayTips,
    handleGetPhotosFromApiSubmit,
  } = value;

  return (
    <>
      <form onSubmit={handleGetPhotosFromApiSubmit}>
        <InputWrapper isPhotoView={photoView}>
          <BsSearchInput />

          <SearcherInput
            onChange={handleChangeSearchWordAndArrayTips}
            type="text"
            name="searchPhoto"
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
