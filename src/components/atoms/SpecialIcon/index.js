import React from "react";
import { newItem, hotItem, bestSeller } from "../../../assets";

const SpecialIcon = (isNew = 0, valueItem = 0, reviewsItem = 0) => {
  if (isNew === 1 && valueItem >= 4.0 && reviewsItem > 25) {
    return <img src={hotItem} alt="newItem" />;
  } else if (valueItem >= 4.0 && reviewsItem > 25) {
    return <img src={bestSeller} alt="newItem" />;
  } else if (isNew === 1) {
    return <img src={newItem} alt="newItem" />;
  }
};

export default SpecialIcon;
