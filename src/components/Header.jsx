import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearAuth } from '../utils/api';
import { Menu, X } from 'lucide-react'; // for mobile menu icons

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    clearAuth();
    nav('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Left - Logo / App Name */}
        <div className="text-lg font-bold">Expense Tracker</div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex justify-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          {user && <Link to="/expensetrack" className="hover:text-gray-200">Track It</Link>}
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-700 text-sm px-4 pb-3 space-y-2">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          {user && <Link to="/expensetrack" className="block hover:text-gray-200">Track It</Link>}
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>

          <div className="pt-2 border-t border-blue-500">
            {user ? (
              <>
                <span className="block mb-2">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="w-full bg-red-500 py-1 rounded text-sm hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block w-full text-center bg-white text-blue-600 py-1 rounded font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
