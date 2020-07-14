import { CartActionTypes } from "./cart-types";
import { addItemToCart, clearItem, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
