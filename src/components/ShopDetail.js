import React from "react";
import productData from "./productData";
import Header from "./Header";
import AddItemToCart from "./AddItemToCart";

function shopDetail(props) {

  const objID = props.match.params.id;
  const product = productData.find(product => product.id===objID);

  return (
    <div className='App'>
      <Header pageHeader={product.name}/>
      <main className='shop-detail'>
        <div className='item-detail-container'>
          <img src={product.imgSource} alt={product.name}></img>
          <AddItemToCart name = {product.name} price={product.price} id={product.id} quantity='1'/>
        </div>
      </main>
    </div>
  )
}

export default shopDetail;