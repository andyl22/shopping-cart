import React, { useEffect, useState } from "react";
import '../styles/AddItemToCart.css';
import {FaCartPlus, FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import useCart from './useCart'


function AddItemToCart(props) {
  const { addToCart, reducePrice } = useCart();
  let [quantity, setQuantity] = useState(parseInt(props.quantity));
  const [totalPrice, setTotalPrice] = useState(0);

  function addItemToCart() {
    addToCart({name: props.name, totalPrice: totalPrice, quantity: quantity, id: props.id, price: props.price});
    if (props.setCartTotal) {props.setCartTotal(reducePrice())};
  }

  function incQuantity() {
    if (quantity>=99) {
      setQuantity(99);
    } else {
      setQuantity(quantity +1);
    }
  }

  function decQuantity() {
    if (quantity>0) {
      setQuantity(quantity - 1);
    }
  }

  function setInputQuantity(e) {
    const value = parseInt(e.target.value);
    if (value) {
      (value >= 99) ? setQuantity(99) : setQuantity(value);
    } else {
      setQuantity(0);
    }
  }

  useEffect(() => {
    setTotalPrice(props.price*quantity);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [quantity]
  )

  return (
    <div className='add-bar'>
      <div className='quantity-control'>
        <button><FaMinusCircle size="1.5em" color="#1c1200" className='fa-quantity' onClick={decQuantity}/></button>
        <input type='text' value = { quantity } onChange = {setInputQuantity}/>
        <button><FaPlusCircle size="1.5em" color="#1c1200" className='fa-quantity' onClick={incQuantity} /></button>
      </div>
      <div className='item-name'><h2>{props.name}</h2></div>
      <div className='add-to-cart'>
        <p>${totalPrice}</p>
        <button className='add-cart-button'>
          <FaCartPlus size="2em" color="#1c1200" className='fa-cart' onClick={addItemToCart}/>
        </button>
      </div>
    </div>
  )
}

export default AddItemToCart;