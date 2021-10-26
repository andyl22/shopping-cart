import React from "react";
import addToCartBtn from '../assets/icons/addToCart.png';
import '../styles/AddItemToCart.css'

function AddItemToCart() {
  return (
    <div className='add-bar'>
      <div className='quantity-control'>
        <p>+</p>
        <p>-</p>
      </div>
      <div className='add-to-cart'>
        <p>0</p>
        <img src={addToCartBtn} alt='Add to Cart'>
        </img>
      </div>
    </div>
  )
}

export default AddItemToCart;