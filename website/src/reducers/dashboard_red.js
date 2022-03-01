const dashboard_red = (state = {}, action) => {
  switch (action.type) {
    case "HEADERID_API":
      return {
        ...state,
        hdrdata: action.payload,
      };
    case "PROD_API":
      return {
        ...state,
        prddata: action.payload,
      };
    default:
      return state;
  }
};

export default dashboard_red;
