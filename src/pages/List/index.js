import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { point } from "../../assets";
import { Button, CardItem, Gap } from "../../components";
import { setDataItem } from "../../config/Redux/action";
import "./List.css";

const List = () => {
  const [page, setPage] = useState(1);
  const { dataItem } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataItem(page));
  }, [dispatch, page]);

  const handlePrev = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const handleNext = () => {
    setPage(
      page === dataItem?.meta?.totalPages
        ? dataItem?.meta?.totalPages
        : page + 1
    );
  };

  return (
    <Fragment>
      <div className="icon-wrapper">
        <img src={point} alt="Logo" className="image-logo" />
      </div>
      <div className="container-list">
        <header>
          <p className="unnamed-character-style-4">Product list</p>
          <hr className="horizontal-line" />
        </header>
        <nav className="filter">
          <p className="unnamed-character-style-4">Filter</p>
          <hr className="horizontal-line" />
        </nav>
        <div className="aside-gride">
          <div className="wrapper-aside">
            <label class="container-checkbox">
              <p className="unnamed-character-style-12">Rating 4 ke atas</p>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container-checkbox">
              <p className="unnamed-character-style-12">Stock Tersedia</p>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="content-wrapper">
          <CardItem data={dataItem?.data} />
        </div>
      </div>
      <div className="pagination">
        <Button title="prev" onClick={handlePrev} />
        <Gap width={20} />
        <p className="text-page">
          {dataItem?.meta?.currentPage}/{dataItem?.meta?.totalPages}
        </p>
        <Gap width={20} />
        <Button title="next" onClick={handleNext} />
      </div>
    </Fragment>
  );
};

export default List;
