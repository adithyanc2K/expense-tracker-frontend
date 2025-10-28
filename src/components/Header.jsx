import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearAuth } from '../utils/api';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const nav = useNavigate();

  const logout = () => {
    clearAuth();
    nav('/login');
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left - Website Name */}
        <div className="text-lg font-bold">Expense Tracker</div>

        {/* Center - Navigation */}
        <nav className="flex justify-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>

          {/* Show Track It only if user is logged in */}
          {user && (
            <Link
              to="/expensetrack"
              className="hover:text-gray-200"
            >
              Track It
            </Link>
          )}

          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        {/* Right - Auth Links */}
        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <span className="hidden sm:inline">Hi, {user.name}</span>
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
    </header>
  );
}
