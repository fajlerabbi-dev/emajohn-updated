import React from 'react';

const ReviewItem = (props) => {
  const { price, name, seller, quantity, key } = props.product
  return (
    <div
      style={{
        marginBottom: '10px',
        paddingBottom: '20px',
        borderBottom: '1px solid #f2f2f2',
      }}>
      <h4 style={{ color: '#0202ee' }}>{name}</h4>
      <strong>
        <span>price: {price}</span>
      </strong>
      <br />
      <strong>
        <small>Sold by: {seller}</small>
      </strong>
      <br />
      <br />
      <span>
        Quantity: <strong>{quantity}</strong>
      </span>
      <br />
      <br />
      <button onClick={() => props.handleRemoveCart(key)}>Remove Item</button>
    </div>
  );
};

export default ReviewItem;
