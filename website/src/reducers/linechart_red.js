const linechart_red = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_WELLDATA":
      return {
        ...state,
        selectedwelldata: action.payload,
      };

    default:
      return state;
  }
};

export default linechart_red;
