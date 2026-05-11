import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white text-green-800 font-bold rounded-lg px-2 py-1">
              মাদরাসা
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              আমাদের গ্রাম মাদরাসা
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-300 transition">হোম</Link>
            {/* এখানে পাথ /funds করা হয়েছে */}
            <Link to="/funds" className="hover:text-green-300 transition">ফান্ড</Link>
            <Link to="/notice" className="hover:text-green-300 transition">নোটিশ</Link>
            <Link to="/teachers" className="hover:text-green-300 transition">শিক্ষক</Link>
            <Link to="/admission" className="hover:text-green-300 transition">ভর্তি</Link>
            <Link to="/login" className="bg-yellow-500 text-green-900 px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition">
              লগইন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 text-center animate-fade-in-down">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-green-700 rounded">হোম</Link>
            <Link to="/funds" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-green-700 rounded">ফান্ড</Link>
            <Link to="/notice" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-green-700 rounded">নোটিশ</Link>
            <Link to="/teachers" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-green-700 rounded">শিক্ষক</Link>
            <Link to="/admission" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-green-700 rounded">ভর্তি</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 bg-yellow-500 text-green-900 rounded font-bold mx-4">লগইন</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;