import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-indigo-600">StudentEats</h1>
            <span className="text-sm text-gray-600 hidden sm:block">Save More, Eat Better</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#home" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
            <a 
              href="#coupons" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'coupons' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleNavClick('coupons')}
            >
              Coupons
            </a>
            <a 
              href="#restaurants" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'restaurants' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleNavClick('restaurants')}
            >
              Restaurants
            </a>
            <a 
              href="#about" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </div>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
