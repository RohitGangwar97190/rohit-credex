import { useState } from 'react';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <i className="fas fa-code text-blue-500 text-2xl mr-2"></i>
            <span className="font-bold text-xl">SoftSell</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="hover:text-blue-500">How It Works</a>
            <a href="#why-choose-us" className="hover:text-blue-500">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <button onClick={toggleDarkMode}>
              {isDark ? (
                <i className="fas fa-sun text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-gray-600"></i>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="mr-4">
              {isDark ? (
                <i className="fas fa-sun text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-gray-600"></i>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} px-4 pb-4`}>
          <a href="#how-it-works" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#why-choose-us" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
          <a href="#testimonials" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
