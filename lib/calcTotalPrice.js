const calcTotalPrice = (cart) =>
  cart.reduce((tally, cartItem) => {
    // Products can be deleted, but they could still be in the cart
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);

export default calcTotalPrice;
