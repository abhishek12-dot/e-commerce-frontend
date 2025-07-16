import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : cart.map((item, i) => (
        <div key={i} className="cart-item">
          <span>{item.title.slice(0, 30)}...</span>
          <span>₹{Math.floor(item.price * 80)}</span>
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
