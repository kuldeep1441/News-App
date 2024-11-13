// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Add from './Add';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/3"></div>
        <div className="w-1/3 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Latest News</h2>
        </div>
        <div className="w-1/3 text-right">
          <Link to="/add">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
              Add
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
