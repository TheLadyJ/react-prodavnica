import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item';
import "./cart.css";

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Proizvodi u tvojoj korpi</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
        <p> Ukupno: {totalAmount} RSD </p>
        <button onClick={() => navigate('/')}> Nastavi sa kupovinom </button>
        <button> Zavrsi sa kupovinom </button>
      </div>
      ) : (
        <h1> Tvoja korpa je prazna </h1>
      )}
    </div>
  )
}
