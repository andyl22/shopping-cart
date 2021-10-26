import React from "react";
import '../styles/ShopItem.css'
import './AddItemToCart'
import AddItemToCart from "./AddItemToCart";

function ShopItem(props) {
  return (
    <div className='shop-item'>
      <img src={props.imgSource} alt = {props.name} className='item-img'></img>
      <h3 className='item-name'>{props.name}</h3>
      <p className='item-description'>{props.description}</p>
      <AddItemToCart />
    </div>
  )
}

export default ShopItem;