import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='text-links'>
        <Link to='/shopping-cart'>Home</Link>
        <Link to='/shopping-cart/shop'>Shop</Link>
      </div>
      <div>
        <Link to='/shopping-cart/cart'>
          <FaShoppingCart className='cart-icon' size='1.5em'/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;