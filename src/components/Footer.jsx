import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-8">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Expense Tracker | Built with ❤️ using MERN
      </div>
    </footer>
  );
};

export default Footer;

