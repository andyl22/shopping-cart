import React from 'react';
import NavBar from './NavBar';
import ShopItem from './ShopItem';
import '../styles/Shop.css'

function Shop() {
  return (
    <div>
      <header>
        <NavBar />
        <h1>Shop</h1>
      </header>
      <main>
        <ShopItem name='Cookies' imgSource='https://i2.wp.com/www.alattefood.com/wp-content/uploads/2015/11/Choco-Cherry-Chip-Cookies-99.jpg?fit=3456%2C5184&ssl=1' description='Cookies Are Moist'/>
        <ShopItem name='Cookies' imgSource='https://i2.wp.com/www.alattefood.com/wp-content/uploads/2015/11/Choco-Cherry-Chip-Cookies-99.jpg?fit=3456%2C5184&ssl=1' description='Cookies Are Moist'/>
        <ShopItem name='Cookies' imgSource='https://i2.wp.com/www.alattefood.com/wp-content/uploads/2015/11/Choco-Cherry-Chip-Cookies-99.jpg?fit=3456%2C5184&ssl=1' description='Cookies Are Moist'/>
        <ShopItem name='Cookies' imgSource='https://i2.wp.com/www.alattefood.com/wp-content/uploads/2015/11/Choco-Cherry-Chip-Cookies-99.jpg?fit=3456%2C5184&ssl=1' description='Cookies Are Moist'/>
      </main>
    </div>
  )
}

export default Shop;