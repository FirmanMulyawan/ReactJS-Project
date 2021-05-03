import Axios from "axios";

export const setDataItem = (page) => (dispatch) => {
  Axios.get(
    `https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=${page}&page[size]=6`
  )
    .then((result) => {
      const responseAPI = result.data;
      dispatch({
        type: "UPDATE_DATA_BLOG",
        payload: responseAPI,
      });
    })
    .catch((err) => {
      throw err;
    });
};
