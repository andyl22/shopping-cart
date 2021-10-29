import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='text-links'>
        <Link to='/shopping-cart'>Home</Link>
        <Link to='/shopping-cart/shop'>Shop</Link>
      </div>
      <div>
        <Link to='/shopping-cart/cart'>
          <FontAwesomeIcon icon={ faShoppingCart } className='cart-icon' color='red'/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;