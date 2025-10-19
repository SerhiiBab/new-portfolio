import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">Serhii Babych</Link>

      <nav>
        <ul>
          <li>
            <Link to="/layers">Layers Section</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
