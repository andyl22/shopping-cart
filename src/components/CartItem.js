import React from "react";
import productData from "./productData";
import '../styles/CartItem.css'
import AddItemToCart from "./AddItemToCart";

function CartItem(props) {
  const product = productData.find(obj => obj.id === props.id)

  return (
    <div className = 'cart-item'>
      <div className = 'line'></div>
      <div className = 'product-details'>
        <img src= {product.imgSource} alt = {product.name} />
        <div className = 'cart-price-info'>
          <AddItemToCart name={props.name} price={props.price} id={props.id} quantity= {props.quantity} setCartTotal={props.setCartTotal}/>
        </div>
      </div>
      <div className = 'line'></div>
    </div>
  )
}

export default CartItem