import React from "react";
import productData from "./productData";
import NavBar from "./NavBar";
import AddItemToCart from "./AddItemToCart";

function shopDetail(props) {

  const objID = props.match.params.id;
  const product = productData.find(product => product.id===objID);

  return (
    <div className='App'>
      <header>
        <NavBar />
        <h1>{product.name}</h1>
      </header>
      <main className='shop-detail'>
        <div className='item-detail-container'>
          <img src={product.imgSource} alt={product.name}></img>
          <AddItemToCart name = {product.name} price={product.price} id={product.id}/>
        </div>
      </main>
    </div>
  )
}

export default shopDetail;