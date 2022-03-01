const setSelectedSandData = (userObj) => {
  return {
    type: "SELECTED_SANDDATA",
    payload: userObj,
  };
};

export default {
  setSelectedSandData,
};
