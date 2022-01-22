import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = ({shopData}) => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

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
        <Cart cart={cart} />
      </div>
    </div>
  );
};
export default Shop;
