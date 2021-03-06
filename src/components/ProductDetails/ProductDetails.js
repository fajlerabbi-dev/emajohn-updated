import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
  const {productId} = useParams();
  const product = fakeData.find(pd => pd.key === productId);

  useEffect(() => {

  }, []);


  return (
    <div>
      <h1>Product details</h1>
      <Product product={product} showButton={false} disableLink={true}/>
    </div>
  );
};

export default ProductDetails;
