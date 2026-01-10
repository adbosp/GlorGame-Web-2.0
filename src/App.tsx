import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import { Navigation } from "./components/Navigation";
import CookieConsent from "./components/CookieConsent";
import { NewsDetail } from "./pages/NewsDetail";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Document from "./pages/Document";
import TermsOfService from "./pages/TermsOfService";
import Help from "./pages/Help";

import "./google-fonts.css";

/* ================= SCROLL TO TOP ON ROUTE CHANGE ================= */
/**
 * Native scroll – ổn định, không phá layout
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // ⚠️ KHÔNG dùng "smooth"
    });
  }, [pathname]);

  return null;
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* TOP CONTENT */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-x-10 gap-y-10
            text-left
          "
        >
          {/* LOGO */}
          <div className="col-span-2 md:col-span-1 flex items-start">
            <img
              src="https://res.cloudinary.com/dk7hsdijn/image/upload/v1767576939/Logo_xhvxkx.svg"
              alt="GlorGames Logo"
              className="h-9 w-auto"
            />
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Support ↗
                </Link>
              </li>
              <li>
                <Link to="/document" className="hover:text-white transition">
                  Documentation ↗
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-white transition">
                  Games ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@glorgames.com"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-3">
              Social
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://facebook.com/glorgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/glorgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/glorgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-gray-800" />

        {/* COPYRIGHT */}
        <div className="pt-6 text-center text-xs text-gray-500">
          © 2026 GLORGAMES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ================= APP ================= */
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* Scroll reset khi đổi route */}
      <ScrollToTop />

      {/* Root layout */}
      <div className="min-h-screen w-full bg-white flex flex-col">
        <Navigation />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/document" element={<Document />} />
            <Route path="/help" element={<Help />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* 🍪 COOKIE CONSENT */}
      <CookieConsent />
    </Router>
  );
}

export default App;
