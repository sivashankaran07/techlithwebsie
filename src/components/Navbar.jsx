import React, { useState } from 'react';
import { Images } from '../assets/data/Img';
import { Nav } from '../assets/data/Navbar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="Nav-bg">
        <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            {/* Logo and Navigation Links */}
            <div className="flex flex-1 items-center justify-between md:justify-evenly sm:items-stretch sm:justify-start">
              {/* Logo Section */}
              <div>
                <img
                  src={Images.logo}
                  alt="Logo"
                  className="h-10 w-auto" 
                />
              </div>

              {/* Navigation Links */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">                  
                  {Nav.map((item) => (
                    <a
                      key={item.id} 
                      href={item.link}
                      className="rounded-md px-3 py-2 text-lg font-medium  text-black-300 hover:bg-gray-700 hover:text-white"
                    >
                      {item.title}
                    </a>    
                  ))}
                </div>
              </div>

             
              <div className="hidden sm:block">
                <button className="bg-green-600 p-2 rounded-md text-white">
                  <a href="#">Whatsapp</a>
                </button>
              </div>
            </div>

           
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block size-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`block size-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {Nav.map((item) => (
              <a
                key={item.id} 
                href={item.link}
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-bold text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
