import axios from "axios";
import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { point } from "../../assets";
import { Button, Gap, Rating, SpecialIcon, StockItem } from "../../components";
import { like } from "../../assets";

const Detail = (props) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://recruitment.dev.rollingglory.com/api/v2/gifts/${id}`)
      .then((res) => {
        setData(res?.data?.data?.attributes);
      })
      .catch((err) => {
        throw err;
      });
  }, [props]);

  if (data) {
    return (
      <Fragment>
        <div className="icon-wrapper">
          <img src={point} alt="Logo" className="image-logo" />
        </div>
        <div className="container-detail">
          <div className="left">
            <article>
              <div className="wrapper-card-SpecialIcon">
                {SpecialIcon(data?.isNew, data?.rating, data?.numOfReviews)}
              </div>
              <img
                src={data?.images}
                alt="point"
                className="image-card-detail"
              />
            </article>
          </div>

          <div className="right">
            <p className="unnamed-character-style-2">{data?.name}</p>

            <div className="container-card-point">
              <div className="wrapper-card-point">
                <div className="container-card-point">
                  <Rating value={data?.rating} />
                  <Gap width={10} />
                  <p className="unnamed-character-style-13">
                    {data?.numOfReviews} reviews
                  </p>
                </div>
                <div className="container-card-point">
                  <img src={point} alt="point" />
                  <Gap width={10} />
                  <p className="unnamed-character-style-5">
                    {data?.points} poins
                  </p>
                  <Gap width={20} />
                  {StockItem(data?.stock)}
                </div>
                <p
                  className="unnamed-character-style-10"
                  dangerouslySetInnerHTML={{ __html: data?.info }}
                ></p>
              </div>
            </div>
            <div className="container-card-point">
              <img src={like} alt="like" className="card-like" />
              <Gap width={20} />
              <Button title="Redeem" />
              <Gap width={100} />
              <Button title="Add to cart" />
            </div>
          </div>

          <div className="bottom">
            <p className="unnamed-character-style-8">Info Produk</p>
            <hr className="horizontal-line" />
            <Gap height={20} />
            <p className="unnamed-character-style-8 character-8C">Rincian</p>
            <p
              className="unnamed-character-style-10"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
          </div>
        </div>
      </Fragment>
    );
  }
  return <p>Loading</p>;
};

export default withRouter(Detail);
