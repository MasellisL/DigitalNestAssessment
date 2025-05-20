import React from 'react';
import './nav-bar-component.css';

function NavBar() {
    return(
      <nav className="navbar">
        <div className="navbar__logo">Digital Nest Shop</div>
        <div className="navbar__cart">
          🛒
        </div>
      </nav>  
    )
}

export default NavBar;