const setSelectedWellData = (userObj) => {
  return {
    type: "SELECTED_WELLDATA",
    payload: userObj,
  };
};

export default {
  setSelectedWellData,
};
