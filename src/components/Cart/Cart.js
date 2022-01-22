import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, pdp) => {
    // console.log(typeof pdp.price, pdp.quantity);
    return total + pdp.price * pdp.quantity;
  }, 0);

  // round the number function
  const rtn = (num) => {
    const numToFixed = num.toFixed(2);
    return Number(numToFixed);
  };
  const shippingCost = totalPrice < 30 ? 0 : 4.99;
  const tax = rtn(totalPrice / 10);
  return (
    <div className='cart-body'>
      <h2>Cart</h2>
      <h5>total ordered item: {cart.length}</h5>
      <div>product price: ${rtn(totalPrice)}</div>
      <div>
        <small>shipping cost: {shippingCost}</small>
      </div>
      <div>
        <small>Tax + VAT:{tax}</small>
      </div>
      <div>
        <strong>
          Total Product Price: ${rtn(totalPrice + shippingCost + tax)}
        </strong>
        <br />
        <br />
      {
        props.children
      }
      </div>
    </div>
  );
};

export default Cart;
