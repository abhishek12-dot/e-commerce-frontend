import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navbar">
      <h2>MyShop</h2>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
