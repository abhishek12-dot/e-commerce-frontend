import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../comonents/Product';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!");
  };

  return (
    <div className="product-grid">
      {products.map(p => (
        <Product key={p.id} product={p} onAddToCart={addToCart} />
      ))}
    </div>
  );
}
