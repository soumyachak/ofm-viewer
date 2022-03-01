const setSelectedSand = (userObj) => {
  return {
    type: "SELECTED_SAND",
    payload: userObj,
  };
};

export default {
  setSelectedSand,
};
