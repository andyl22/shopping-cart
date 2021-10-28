import React, { useEffect, useState } from "react";
import '../styles/AddItemToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useCart from './useCart'


function AddItemToCart(props) {
  const price = props.price;
  const { addToCart } = useCart();
  const [quantity, setquantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0)

  function addItemToCart() {
    addToCart({name: props.name, totalPrice: totalPrice, quantity: quantity, id: props.id, price: props.price});
    console.log("Added to cart");
  }

  function incQuantity() {
    setquantity(quantity +1)
  }

  function decQuantity() {
    if (quantity>1) {
      setquantity(quantity -1)
    }
  }

  useEffect(() => {
    setTotalPrice(price*quantity)
  },
  [quantity]
  )

  return (
    <div className='add-bar'>
      <div className='quantity-control'>
        <FontAwesomeIcon icon={ faMinus } className='fa-quantity' onClick={decQuantity}/>
        <p>{quantity}</p>
        <FontAwesomeIcon icon={ faPlus } className='fa-quantity' onClick={incQuantity}/>
      </div>
      <h2>{props.name}</h2>
      <div className='add-to-cart'>
        <p>${totalPrice}</p>
        <FontAwesomeIcon icon={ faShoppingCart } className='fa-cart' onClick={addItemToCart}/>
      </div>
    </div>
  )
}

export default AddItemToCart;