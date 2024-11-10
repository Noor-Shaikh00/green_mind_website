import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D2E8E2] text-[#000] py-10 px-5 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Side */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">GREENMIND</h2>
            <p className="text-sm mb-4">We help you find your dream plant</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#000] hover:text-gray-600"><i className="fab fa-facebook"></i>F</a>
              <a href="#" className="text-[#000] hover:text-gray-600"><i className="fab fa-instagram"></i>I</a>
              <a href="#" className="text-[#000] hover:text-gray-600"><i className="fab fa-twitter"></i>T</a>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="flex flex-wrap justify-between space-x-8">
            <div className="flex flex-col mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">About</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Product</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Blog</a></li>
              </ul>
            </div>
            <div className="flex flex-col mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Community</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Career</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Our story</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Getting Started</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Pricing</a></li>
                <li><a href="#" className="text-sm text-[#000] hover:text-gray-600">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-center text-sm text-[#000]">2023 all Right Reserved Term of use GREENMIND</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;