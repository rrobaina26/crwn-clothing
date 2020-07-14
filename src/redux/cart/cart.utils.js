export const addItemToCart = (cartItems, itemToAdd) => {
  const item = cartItems.find((item) => item.id === itemToAdd.id);
  if (item) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToClear) => {
  const item = cartItems.find((item) => item.id === itemToClear.id);
  if (item && item.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === itemToClear.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
  return [...cartItems];
};

export const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter((i) => i.id !== itemToClear.id);
};
