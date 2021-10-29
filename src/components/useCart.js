let cart = [];

const useCart = () => {

  function addToCart(item) {
    const existingObj = cart.find(obj => obj.id === item.id);
    if (existingObj) {
      existingObj.totalPrice = item.totalPrice;
      existingObj.quantity = item.quantity;
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

  const reducePrice = () => {
    return cart.reduce((rollingSum, obj) => {
      return rollingSum += obj.totalPrice;
    },0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    reducePrice
  }
}

export default useCart;