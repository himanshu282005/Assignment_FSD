// ProductCardList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component
import './ProductCardList.css'; // Import CSS for styling

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Optional: For error handling

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the products
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect only once (on mount)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Show error if there was a problem fetching
  }

  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
