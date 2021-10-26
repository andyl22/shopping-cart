import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

function NavBar() {
  return (
    <div className='navBar'>
      <Link to='/shop'>Shop</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default NavBar;