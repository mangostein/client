import React from 'react';
import { Link } from 'react-router-dom';

const rule = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-evenly'

};

function Navbar() {
  return (
    <nav>
      <ul style={rule}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
};


export default Navbar;
