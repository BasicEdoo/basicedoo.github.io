import React from 'react';
import { Link } from 'react-router'; // Use 'react-router' based on root.tsx imports

function Header() {
  return (
    <header>
      <h1>My Name</h1> {/* Replace with your name */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;