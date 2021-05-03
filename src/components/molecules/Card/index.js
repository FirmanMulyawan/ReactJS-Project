import React, { Fragment } from "react";
import { Rating, Gap, SpecialIcon, StockItem } from "../../atoms";
import { point, like } from "../../../assets";
import { useHistory } from "react-router-dom";

const Card = ({
  nameItem,
  imageItem,
  valueItem,
  pointItem,
  reviewsItem,
  stockItem,
  isNew,
  _id,
}) => {
  const history = useHistory();

  return (
    <Fragment>
      <article
        className="card-item"
        onClick={() => history.push(`/detail/${_id}`)}
      >
        {StockItem(stockItem)}
        <div className="wrapper-card-SpecialIcon">
          {SpecialIcon(isNew, valueItem, reviewsItem)}
        </div>
        <img src={imageItem} alt="imageItem" className="image-card" />

        <div>
          <p className="unnamed-character-style-1">{nameItem}</p>
          <div className="container-card-point">
            <div className="wrapper-card-point">
              <div className="container-card-point">
                <img src={point} alt="point" />
                <Gap width={10} />
                <p className="unnamed-character-style-5">{pointItem} poins</p>
              </div>
              <div className="container-card-point">
                <Rating value={valueItem} />
                <Gap width={10} />
                <p className="unnamed-character-style-13">
                  {reviewsItem} reviews
                </p>
              </div>
            </div>
            <div className="wrapper-card-point-right">
              <img src={like} alt="like" className="card-like" />
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Card;
