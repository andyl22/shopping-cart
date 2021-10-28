import React from "react";
import Header from "./Header";
import useCart from "./useCart";

function Cart() {
  const {cart, addToCart, removeFromCart} = useCart();
  console.log(cart);
  
  return (
    <div className='App'>
      <Header pageHeader='My Cart'/>
      <main>
        <div className='cart'>
          {(cart.length===0) ? <p>Empty Cart!<br/> Add some Items!</p> : <p>Cart has items</p>}
        </div>
      </main>
    </div>
  )
}

export default Cart;