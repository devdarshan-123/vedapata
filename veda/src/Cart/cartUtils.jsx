export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {
  const cart = getCart();

  const exists = cart.find(item => item.id === product.id);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};