import React from 'react';
import Header from './Header'
import ShopItem from './ShopItem';
import '../styles/Shop.css'
import productData from './productData';

function Shop() {
  const mappedProductData = productData.map(product => {
    return (
      <ShopItem 
        key={product.id}
        id={product.id} 
        name={product.name}
        imgSource={product.imgSource}
        description={product.description}
      />
    )
  })


  return (
    <div className='App'>
      <Header pageHeader='Decorate With These Plants'/>
      <main>
        <div className='item-container'>
          {mappedProductData}
        </div>
      </main>
    </div>
  )
}

export default Shop;