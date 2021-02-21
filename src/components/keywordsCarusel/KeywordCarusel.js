/** @format */

import React, { useContext } from "react";
import { OneTagDiv } from "./KeywordCaruselStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppContext from "../../context";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const KeywordCarusel = () => {
  const value = useContext(AppContext);
  const { arrayOfTags } = value;

  return (
    <>
      <Carousel
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
      >
        {arrayOfTags.map((tag) => (
          <OneTagDiv key={tag}>{tag}</OneTagDiv>
        ))}
      </Carousel>
    </>
  );
};

export default KeywordCarusel;
