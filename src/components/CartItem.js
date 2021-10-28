import React from "react";
import productData from "./productData";
import '../styles/CartItem.css'

function CartItem(props) {
  const product = productData.find(obj => obj.id === props.id)

  return (
    <div className = 'cart-item'>
      <img src= {product.imgSource} alt = {product.name} />
      <div className = 'cart-price-info'>
        <p> {product.name } </p>
        <p> Quantity: {props.quantity} </p>
        <p> Price Each: ${product.price} </p>
        <p><strong>Total Price: ${props.totalPrice} </strong></p>
      </div>
    </div>
  )
}

export default CartItem