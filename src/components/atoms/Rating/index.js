import React from "react";
import { Greystar, halfStar, fullStar } from "../../../assets";

const getStar = (value) => {
  switch (value) {
    case 0:
      return Greystar;
    case 50:
      return halfStar;
    case 100:
      return fullStar;
    default:
      return Greystar;
  }
};

const roundByNum = (num) => {
  var multiplier = 1 / 0.5;
  return Math.round(num * multiplier) / multiplier;
};

const getStars = (value) => {
  switch (roundByNum(value)) {
    case 0.0:
      return [0, 0, 0, 0, 0];
    case 0.5:
      return [50, 0, 0, 0, 0];
    case 1.0:
      return [100, 0, 0, 0, 0];
    case 1.5:
      return [100, 50, 0, 0, 0];
    case 2.0:
      return [100, 100, 0, 0, 0];
    case 2.5:
      return [100, 100, 50, 0, 0];
    case 3.0:
      return [100, 100, 100, 0, 0];
    case 3.5:
      return [100, 100, 100, 50, 0];
    case 4.0:
      return [100, 100, 100, 100, 0];
    case 4.5:
      return [100, 100, 100, 100, 50];
    case 5.0:
      return [100, 100, 100, 100, 100];
    default:
      return [0, 0, 0, 0, 0];
  }
};

const Rating = ({ value }) => {
  return (
    <div>
      {getStars(value).map((value, index) => {
        return (
          <img
            src={getStar(value)}
            alt="start"
            key={index}
            className="rating-image"
          />
        );
      })}
    </div>
  );
};

export default Rating;
