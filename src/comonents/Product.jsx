import React from 'react';

export default function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 30)}...</h3>
      <p>₹{Math.floor(product.price * 80)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
