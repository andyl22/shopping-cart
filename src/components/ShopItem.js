import React from "react";
import '../styles/ShopItem.css'
import './AddItemToCart'
import { Link } from "react-router-dom";
import '../styles/ShopDetail.css'

function ShopItem(props) {
  return (
    <Link to={{
      pathname: `/shop/${props.id}`,
      state: {
        props: props,
      }
    }}>
      <div className='shop-item'>
        <img src={props.imgSource} alt = {props.name} className='item-img'></img>
        <h3 className='item-name'>{props.name}</h3>
        <p className='price'>{props.price}</p>
      </div>
    </Link>
  )
}

export default ShopItem;