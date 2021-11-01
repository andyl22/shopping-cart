import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar(props) {
  return (
    <nav className='nav-bar'>
      <div className='text-links'>
        <Link to='/shopping-cart'>Home</Link>
        <Link to='/shopping-cart/shop'>Shop</Link>
      </div>
      <h1>{props.pageHeader}</h1>
      <div>
        <Link to='/shopping-cart/cart'>
          <FaShoppingCart className='cart-icon' size='1.5em'/>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;