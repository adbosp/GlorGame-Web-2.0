import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { About } from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Document from './pages/Document';
import TermsOfService from './pages/TermsOfService';
import Help from './pages/Help';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './google-fonts.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://res.cloudinary.com/dk7hsdijn/image/upload/c_thumb,w_200,g_face/v1741444897/Logo_dxl23c.png" alt="GlorGames Logo" className="h-16 w-17" />
          <span className="montserrat-uniquifier text-2xl">GLORGAMES</span>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} GlorGames. All rights reserved.</p>
          <p className="text-sm flex items-center space-x-2">
            Follow us on social media:&nbsp;
            <a href="https://facebook.com/glorgames" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center space-x-1">
              <FaFacebook /> <span>Facebook</span>
            </a>
            <a href="https://x.com/glorgames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline flex items-center space-x-1">
              <FaSquareXTwitter /> <span>X</span>
            </a>
            <a href="https://youtube.com/glorgames" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline flex items-center space-x-1">
              <FaYoutube /> <span>Youtube</span>
            </a>
          </p>
          <p className="text-sm">
            <Link to="/privacy-policy" className="text-gray-300 hover:underline">Privacy Policy</Link> |
            <Link to="/terms-of-service" className="text-gray-300 hover:underline"> Terms of Service</Link> |
            <Link to="/document" className="text-gray-300 hover:underline"> Documentation</Link> |
            <Link to="/help" className="text-gray-300 hover:underline"> Help</Link>
          </p>
          <p className="text-sm">Contact us: support@glorgames.com</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/document" element={<Document />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
