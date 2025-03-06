// import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/articles" className="mr-4">Articles</Link>
      <Link to="/about" className="mr-4">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
