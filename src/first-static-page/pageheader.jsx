import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <div className="navbar-logo">🍳</div>
        <div>
          <div className="navbar-title">RecipeCraft</div>
          <div className="navbar-tagline">AI-Powered Cooking</div>
        </div>
      </Link>

      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/" className="navbar-cta">Try Free</Link></li>
      </ul>
    </nav>
  );
}

export default Header;