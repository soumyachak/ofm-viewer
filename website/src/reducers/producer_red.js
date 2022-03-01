const producer_red = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_SAND":
      return {
        ...state,
        selectedsanddata: action.payload,
      };

    default:
      return state;
  }
};

export default producer_red;
