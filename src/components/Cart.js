import React from "react";
import CartItem from "./CartItem";
import Header from "./Header";
import useCart from "./useCart";
import '../styles/Cart.css'

function Cart() {
  const {cart, addToCart, removeFromCart} = useCart();
  const mappedCart = cart.map(obj => <CartItem key = {obj.id} id = {obj.id} quantity = {obj.quantity} totalPrice = {obj.totalPrice} />);
  const totalPrice = cart.reduce((rollingSum, obj) => {
    return rollingSum += obj.totalPrice;
  },0);
  const listOfItems = cart.map(obj => <p key={obj.id}>{obj.name}: {obj.quantity}</p>);
  console.log(cart)


  return (
    <div className='App'>
      <Header pageHeader='My Cart'/>
      <main>
        <div className='cart'>
          <div className = 'cartItems'>
            {(cart.length===0) ? <p>Empty Cart!<br/> Add some Items!</p> : mappedCart }
          </div>
          <div className = 'cartSummary'>
            <h2>Cart Summary</h2>
            <p>Total Price: ${totalPrice}</p>
            {listOfItems}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart;