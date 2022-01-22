import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
  const [cart, setCart] = useState([]);

  // remove from cart
  const handleRemoveCart = (productKey) => {
    deleteFromDb(productKey);

    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    clearTheCart();
  }
  useEffect(() => {
    const productIdObject = getStoredCart();
    const productKeys = Object.keys(productIdObject);

    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = productIdObject[key];
      return product;
    });
    setCart(cartProduct);
  }, []);

  return (
    <div className='shop'>
      <div
        className='product-box'
        style={{ textAlign: 'left', padding: '20px' }}>
        {cart.map((pd) => (
          <ReviewItem
            product={pd}
            handleRemoveCart={handleRemoveCart}
            key={pd.key}
          />
        ))}
      </div>
      <div className='cart-box'>
        <Cart cart={cart}>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
