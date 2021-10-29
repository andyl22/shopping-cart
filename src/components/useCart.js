let cart = [];

const useCart = () => {

  function addToCart(item) {
    const existingObj = cart.find(obj => obj.id === item.id);
    if (existingObj) {
      existingObj.totalPrice += item.totalPrice;
      existingObj.quantity += item.quantity;
      console.log(existingObj)
      const cartIndex = cart.findIndex(obj => obj.id === existingObj.id);
      cart[cartIndex] = existingObj;
    } else {
      cart = ([...cart, item]);
    }
    
    console.log(cart)
  }

  function removeFromCart(itemID) {
    cart = cart.filter(obj => obj.id !== itemID)
  }

  return {
    cart,
    addToCart,
    removeFromCart
  }
}

export default useCart;