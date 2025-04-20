import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../google-fonts.css';

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://res.cloudinary.com/dk7hsdijn/image/upload/c_thumb,w_200,g_face/v1741444897/Logo_dxl23c.png" alt="Logo" className="h-14 w-15" />
            <span className="montserrat-uniquifier text-2xl text-black">GLORGAMES</span>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <div className="hidden md:flex space-x-10">
            {[{
              path: '/', label: 'Home'
            }, {
              path: '/games', label: 'Games'
            }, {
              path: '/about', label: 'About'
            }].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isActive(path)
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'h-64 bg-white/90 backdrop-blur-md shadow-lg'
            : 'h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 space-y-4">
          {[{
            path: '/', label: 'Home'
          }, {
            path: '/games', label: 'Games'
          }, {
            path: '/about', label: 'About'
          }].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block text-lg font-medium ${
                isActive(path)
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
