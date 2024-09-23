// ProductCard.js
import React from 'react';
import './ProductCard.css'; // Import CSS for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description.slice(0, 100)}...</p> {/* Limiting description to 100 characters */}
    </div>
  );
};

export default ProductCard;
