import SHOP_DATA from "./shopping-data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReduccer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReduccer;
