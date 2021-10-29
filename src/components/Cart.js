import React, { useState } from "react";
import CartItem from "./CartItem";
import Header from "./Header";
import useCart from "./useCart";
import '../styles/Cart.css';

function Cart() {

  const {cart, reducePrice} = useCart();

  const [cartTotal, setCartTotal] = useState(reducePrice());

  const mappedCart = cart.map(obj => {
    return (
      <div>
        <CartItem key = {obj.id} id = {obj.id} name = {obj.name} quantity = {obj.quantity} price = {obj.price} totalPrice = {obj.totalPrice} setCartTotal={setCartTotal}/>
      </div>
   )
  }
  );


  return (
    <div className='App'>
      <Header pageHeader='My Cart'/>
      <main>
        <div className='cart'>
          <div className='cart-container'>
            <div className = 'cartItems'>
              {(cart.length===0) ? <p>Empty Cart!<br/> Add some Items!</p> : mappedCart }
            </div>
            <div className = 'cartSummary'>
              <h2>Cart Summary</h2>
              <p>Total Price: ${cartTotal}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart;