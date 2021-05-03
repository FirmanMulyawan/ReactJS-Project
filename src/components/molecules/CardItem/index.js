import React, { Fragment } from "react";
import Card from "../Card";

const CardItem = (props) => {
  let endItem = <div></div>;

  if (props.isEndItem) {
    <div className="end-items">
      <span>{props.state.page > 1 ? "End of Item" : "Data Not Found"}</span>
    </div>;
  }
  return (
    <Fragment>
      <article className="items-list">
        {props?.data?.map((data) => {
          const {
            images,
            name,
            rating,
            points,
            numOfReviews,
            stock,
            isNew,
          } = data?.attributes;

          return (
            <Card
              key={data?.id}
              imageItem={images}
              nameItem={name}
              valueItem={rating}
              pointItem={points}
              reviewsItem={numOfReviews}
              stockItem={stock}
              isNew={isNew}
              _id={data?.id}
            />
          );
        })}
      </article>
      <article className="loading-list">{endItem}</article>
    </Fragment>
  );
};

export default CardItem;
