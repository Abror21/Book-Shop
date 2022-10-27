import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark py-3 text-white mb-3 mb-lg-5">
      <nav className="container d-flex align-items-center justify-content-between">
        <Link to='/' className="navbar-brand">
          <h3>Book Shop</h3>
        </Link>
        <Link to='/favorites' className="nav-link">Favorites</Link>
      </nav>
    </header>
  )
}

export default Header