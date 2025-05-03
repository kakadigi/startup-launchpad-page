
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              Karya Kami<span className="text-teal">Digital</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Transforming startup ideas into market-ready products with expert software engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">MVP Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Backend Engineering</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#team" className="text-gray-300 hover:text-teal transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-teal transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-teal transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">hello@karyakamidigital.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-300">123 Tech Avenue, San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Karya Kami Digital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-teal transition-colors flex items-center"
            >
              Back to Top <ArrowUp className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
