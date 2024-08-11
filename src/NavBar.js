import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (

<div className="navbar">
    <a href = "/">
    home
    </a>
    <a href = "/favorites">
    favorites
    </a>
    <a href = "/wishlist">
    wishlist
    </a>
</div>
);
};

export default Navbar;