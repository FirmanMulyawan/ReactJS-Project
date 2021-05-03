const initialStateHome = {
  dataItem: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataItem: action.payload,
    };
  }
  return state;
};

export default homeReducer;
