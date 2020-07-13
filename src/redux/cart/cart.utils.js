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
