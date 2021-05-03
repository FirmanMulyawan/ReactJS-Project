import React from "react";

const StockItem = (stockItem) => {
  if (stockItem >= 5) {
    return <p className="unnamed-character-style-8">In Stock</p>;
  } else if (stockItem < 5 && stockItem !== 0) {
    return (
      <p className="unnamed-character-style-8 character-8B">Stock &lt; 5</p>
    );
  } else if (stockItem === 0) {
    return <p className="unnamed-character-style-8 character-8B">Sold Out</p>;
  }
};

export default StockItem;
