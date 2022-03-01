const scatterchart_red = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_SANDDATA":
      return {
        ...state,
        selectedsanddata: action.payload,
      };

    default:
      return state;
  }
};

export default scatterchart_red;
