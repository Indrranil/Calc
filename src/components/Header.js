// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Optional, for styling

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/feedback">User Feedback</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
