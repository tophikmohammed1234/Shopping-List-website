import React from 'react';

const ProductItem = ({ product, addToCart, setSelectedProduct }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => setSelectedProduct(product)}>View Details</button>
    </div>
  );
};

export default ProductItem;