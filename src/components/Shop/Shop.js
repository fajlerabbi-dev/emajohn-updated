import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = ({ shopData }) => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  // get data from localstorage
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

  const handleAddToCard = (product) => {
    // Quantity Count
    const cartProduct = cart.find((pd) => pd.key === product.key);
    let newCart;
    if (cartProduct) {
      const count = cartProduct.quantity + 1;
      cartProduct.quantity = count;

      const others = cart.filter((pd) => pd.key !== product.key);
      newCart = [...others, cartProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);

    // utilities localStorage function
    addToDb(product.key);
  };

  return (
    <div className='shop'>
      <div className='product-box'>
        {products.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
      <div className='cart-box'>
        <Cart cart={cart}>
          <Link to='/order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};
export default Shop;
