import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart, setSelectedProduct }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;