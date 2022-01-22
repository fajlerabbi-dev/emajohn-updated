import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
  const { name, img, key, price, seller, stock } = props.product;
  return (
    <div className='single-product'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-content'>
        {props.disableLink ? (
          <h4>{name}</h4>
        ) : (
          <Link to={`/product/${key}`} params={props.product}>
            <h4>{name}</h4>
          </Link>
        )}

        <div className='product-seller'>By: {seller}</div>
        <div className='product-price'>
          <strong>${price}</strong>
        </div>
        <div className='product-stock'>
          only {stock} left in stock - order soon
        </div>
        {props.showButton !== false && (
          <button onClick={() => props.handleAddToCard(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
