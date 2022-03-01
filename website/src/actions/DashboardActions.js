const setHeader = (userObj) => {
  return {
    type: "HEADERID_API",
    payload: userObj,
  };
};

const setProd = (userObj) => {
  return {
    type: "PROD_API",
    payload: userObj,
  };
};

export default {
  setHeader,
  setProd,
};
