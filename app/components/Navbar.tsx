// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Show navbar when scrolling up, hide when scrolling down
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative flex items-center justify-center mt-6">
        {/* Main Nav Container */}
        <nav className="bg-white/95 backdrop-blur-sm shadow-md h-16 w-[40%] mx-auto rounded-full flex items-center justify-around px-4">
          {/* Left Nav Items */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">
                About
              </Link>
            </li>
          </ul>
          
          {/* Right Nav Items */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#projects" className="text-gray-700 hover:text-orange-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Center logo section with larger circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-orange-500">
          <div className="text-center">
            <Image 
              src="/nav-logo.png"
              alt="ProGuard Mechanical Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
