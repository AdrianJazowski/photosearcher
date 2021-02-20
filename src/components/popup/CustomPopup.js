/** @format */

import React, { useContext } from "react";
import AppContext from "../../context";
import { AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import {
  IconsSpan,
  ImgPopup,
  Popup,
  PopupDiv,
  ShareOrLocationSpan,
  UserNameDiv,
} from "./CustomPopupStyles";

const CustomPopup = () => {
  const value = useContext(AppContext);
  const { handleClickOpen, currentPhoto, openPopup } = value;

  return (
    <>
      <Popup onClick={handleClickOpen} open={openPopup}>
        {currentPhoto ? (
          <PopupDiv>
            <ImgPopup src={currentPhoto.urls.small} />
            <UserNameDiv>
              {<img src={currentPhoto.user.profile_image.small} />}
              <h1 name>{currentPhoto.user.name}</h1>
              <p twittername>@{currentPhoto.user.twitter_username}</p>
            </UserNameDiv>
            <IconsSpan righttop>
              <AiFillHeart />
              <BsPlus />
            </IconsSpan>
            <ShareOrLocationSpan left>
              <span>
                <GoLocation />
                {currentPhoto.user.location}
              </span>
            </ShareOrLocationSpan>
            <ShareOrLocationSpan>
              <span>
                <IoIosShareAlt /> Share
              </span>
              <span>
                <AiFillInfoCircle /> Info
              </span>
            </ShareOrLocationSpan>
          </PopupDiv>
        ) : null}
      </Popup>
    </>
  );
};

export default CustomPopup;
