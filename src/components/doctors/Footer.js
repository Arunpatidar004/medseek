import React from 'react';
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SecureMed AI</h2>
            <p className="text-gray-300">
              Revolutionizing healthcare and medical education with AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">For Doctors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">For Students</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SecureMed AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;