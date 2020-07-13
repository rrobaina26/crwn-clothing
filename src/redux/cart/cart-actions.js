import { CartActionTypes } from "./cart-types";

export const toogleCart = () => {
  return {
    type: CartActionTypes.TOOGLE_DROPDOWN,
  };
};

export const add_item = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};
