import React from 'react';

const Navbar = ({ onSearch, toggleCart, showCart }) => {
  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={toggleCart}>
        {showCart ? "Hide Cart" : "Show Cart"}
      </button>
    </nav>
  );
};

export default Navbar;
