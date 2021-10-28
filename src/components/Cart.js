import React from "react";
import CartItem from "./CartItem";
import Header from "./Header";
import useCart from "./useCart";
import '../styles/Cart.css'

function Cart() {
  const {cart, addToCart, removeFromCart} = useCart();
  const mappedCart = cart.map(obj => <CartItem key = {obj.id} id = {obj.id} quantity = {obj.quantity} totalPrice = {obj.totalPrice} />)
  
  return (
    <div className='App'>
      <Header pageHeader='My Cart'/>
      <main>
        <div className='cart'>
          {(cart.length===0) ? <p>Empty Cart!<br/> Add some Items!</p> : mappedCart }
        </div>
      </main>
    </div>
  )
}

export default Cart;