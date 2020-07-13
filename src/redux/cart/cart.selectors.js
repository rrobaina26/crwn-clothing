import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const selectCountTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce(
    (acumulatedQuantity, item) => acumulatedQuantity + item.quantity,
    0
  )
);
export const selectHiddenCart = createSelector([selectCart], (cart) => cart.hidden);
