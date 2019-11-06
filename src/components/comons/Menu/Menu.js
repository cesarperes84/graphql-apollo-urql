import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sgp-apollo">Apollo</Link></li>
      <li><Link to="/sgp-urql">URQL</Link></li>
      <li><Link to="/petlibrary-urql">Javascript</Link></li>
      <li><Link to="/profile">Apollo com GITHUB</Link></li>
      <li><Link to="/todolist">List</Link></li>
    </ul>
  );
}
export default Menu;
