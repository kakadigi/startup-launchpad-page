
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-navy font-bold text-xl md:text-2xl">
              Karya Kami<span className="text-teal">Digital</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-teal transition duration-200">Services</a>
            <a href="#process" className="text-gray-700 hover:text-teal transition duration-200">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal transition duration-200">Testimonials</a>
            <a href="#team" className="text-gray-700 hover:text-teal transition duration-200">Team</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-teal hover:bg-teal-dark text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="text-navy hover:text-teal"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#services" 
              className="block text-gray-700 hover:text-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="block text-gray-700 hover:text-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-700 hover:text-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#team" 
              className="block text-gray-700 hover:text-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <Button asChild className="w-full bg-teal hover:bg-teal-dark text-white">
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
