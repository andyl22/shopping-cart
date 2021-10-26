import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'
import cartIcon from '../assets/icons/shoppingCart.png';

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='text-links'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div>
        <Link to='/cart'>
          <img src={cartIcon} alt='Shopping Cart' className = 'cart-icon'></img>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;