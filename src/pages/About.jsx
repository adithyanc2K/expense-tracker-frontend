import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
        About This Expense Tracker
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Keeping track of your money can be difficult when small daily expenses start to pile up. 
        This Expense Tracker helps you easily record, organize, and review your spending — 
        so you always know where your money is going.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        You can quickly add new expenses, edit or remove old ones, and view a clear summary of your 
        daily or monthly spending. It’s designed to be simple, fast, and useful for anyone who wants 
        better control over their personal finances.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our goal is to make money management easy for everyone — helping you spend smarter, save more, 
        and stay organized with just a few clicks.
      </p>
    </div>
  );
};

export default About;
