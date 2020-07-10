import { CartActionTypes } from "./cart-types";

export const toogleCart = () => {
  return {
    type: CartActionTypes.TOOGLE_DROPDOWN,
  };
};
