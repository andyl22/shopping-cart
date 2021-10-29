import React, { useEffect, useState } from "react";
import '../styles/AddItemToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useCart from './useCart'


function AddItemToCart(props) {
  const price = props.price;
  const { addToCart } = useCart();
  let [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0)

  function addItemToCart() {
    addToCart({name: props.name, totalPrice: totalPrice, quantity: quantity, id: props.id, price: props.price});
  }

  function incQuantity() {
    if (quantity>=999) {
      setQuantity(999)
    } else {
      setQuantity(quantity +1)
    }
  }

  function decQuantity() {
    if (quantity>1) {
      quantity = quantity -1
    }
  }

  function setInputQuantity(e) {
    const value = parseInt(e.target.value);
    if (value) {
      (value >= 999) ? setQuantity(999) : setQuantity(value);
    } else {
      setQuantity(1)
    }
  }

  useEffect(() => {
    setTotalPrice(price*quantity)
  },
  []
  )

  return (
    <div className='add-bar'>
      <div className='quantity-control'>
        <button><FontAwesomeIcon icon={ faMinus } className='fa-quantity' onClick={decQuantity}/></button>
        <input type='text' value = {quantity} onChange = {setInputQuantity}/>
        <button><FontAwesomeIcon icon={ faPlus } className='fa-quantity' onClick={incQuantity}/></button>
      </div>
      <h2>{props.name}</h2>
      <div className='add-to-cart'>
        <p>${totalPrice}</p>
        <button>
          <FontAwesomeIcon icon={ faShoppingCart } className='fa-cart' onClick={addItemToCart}/>
        </button>
      </div>
    </div>
  )
}

export default AddItemToCart;