/** @format */

import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { OneTagLi, OneTagWrapper } from "./KeywordCaruselStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./test.css";
import AppContext from "../../context";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const KeywordCarusel = () => {
  const value = useContext(AppContext);
  const { arrayOfTags } = value;

  // const array = new Set(arrayOfTags);

  return (
    <>
      <Carousel
        swipeable={true}
        centerMode={true}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        style={{ width: "100vw" }}
        arrows={false}
      >
        {arrayOfTags.map((tag) => (
          <OneTagLi>{tag}</OneTagLi>
        ))}
      </Carousel>
    </>
  );
};

export default KeywordCarusel;
