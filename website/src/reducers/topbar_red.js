const topbar_red = (state = {}, action) => {
  switch (action.type) {
    case "TOPBAR_SAND":
      return {
        ...state,
        topbarsanddata: action.payload,
      };

    default:
      return state;
  }
};

export default topbar_red;
