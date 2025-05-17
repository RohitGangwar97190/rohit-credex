
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
      
        <div>
          <h2 className="text-xl font-semibold mb-4">LicensePro Inc.</h2>
          <p className="text-sm text-gray-400">
            Your trusted partner for managing and selling digital licenses securely and efficiently.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:underline text-gray-300">About Us</a></li>
            <li><a href="/licenses" className="hover:underline text-gray-300">Licenses</a></li>
            <li><a href="/support" className="hover:underline text-gray-300">Support</a></li>
            <li><a href="/contact" className="hover:underline text-gray-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@licensepro.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 License St, New York, NY</li>
          </ul>
        </div>
      </div>

 
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LicensePro Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
