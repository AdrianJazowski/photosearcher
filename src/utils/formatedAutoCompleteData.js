/** @format */
import autoCompleteWordData from "../data/autoCompleteWordData.json";

export const formatedAutoCompleteData = [
  ...new Set(autoCompleteWordData.map((item) => item.keyword)),
];
