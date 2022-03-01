const setTopbarSandDropdown = (userObj) => {
  return {
    type: "TOPBAR_SAND",
    payload: userObj,
  };
};

export default {
  setTopbarSandDropdown,
};
