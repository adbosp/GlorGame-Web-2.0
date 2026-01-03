import React from "react";
import { motion } from "framer-motion";

const Help: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
      {/* ===== BIG BLUE GLOW (GIỐNG OUR GAMES / DOCUMENT) ===== */}
      <div
        className="
          pointer-events-none
          absolute -top-[320px] left-1/2
          -translate-x-1/2
          w-[1800px] h-[1100px]
          bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.28),_transparent_70%)]
          blur-[160px]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold mb-3">
            Help Center
          </h1>
          <p className="text-lg text-gray-300">
            How can we help you today?
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* 1. FAQ */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              hover:bg-white/15
              transition-all duration-300
            "
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {[
                {
                  q: "How do I create an account?",
                  a: 'Click on the "Sign Up" button in the top right corner, fill in your details, and follow the verification process.',
                },
                {
                  q: "How can I reset my password?",
                  a: 'Click on "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox.',
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and various local payment methods depending on your region.",
                },
              ].map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {item.q}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2. TECHNICAL SUPPORT */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              hover:bg-white/15
              transition-all duration-300
            "
          >
            <h2 className="text-2xl font-semibold mb-3 text-white">
              2. Technical Support
            </h2>
            <p className="text-gray-300 mb-4">
              Having technical issues? Try these troubleshooting steps:
            </p>

            <ul className="space-y-2 text-gray-300">
              {[
                "Clear your browser cache and cookies",
                "Update your browser to the latest version",
                "Check your internet connection",
                "Disable any ad-blockers or VPNs",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 3. GAME SUPPORT */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              hover:bg-white/15
              transition-all duration-300
            "
          >
            <h2 className="text-2xl font-semibold mb-3 text-white">
              3. Game Support
            </h2>
            <p className="text-gray-300 mb-4">
              Need help with specific games? Here are some common solutions:
            </p>

            <ul className="space-y-2 text-gray-300">
              {[
                "Check game requirements and compatibility",
                "Verify game files integrity",
                "Update graphics drivers",
                "Check server status",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 4. ACCOUNT SECURITY */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              hover:bg-white/15
              transition-all duration-300
            "
          >
            <h2 className="text-2xl font-semibold mb-3 text-white">
              4. Account Security
            </h2>
            <p className="text-gray-300 mb-4">
              Tips to keep your account secure:
            </p>

            <ul className="space-y-2 text-gray-300">
              {[
                "Use a strong, unique password",
                "Enable two-factor authentication",
                "Regularly update your security settings",
                "Be cautious of phishing attempts",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 5. CONTACT SUPPORT */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
            "
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Contact Support
            </h2>
            <p className="text-gray-300 mb-4">
              Still need help? Our support team is available 24/7:
            </p>

            <div className="space-y-3">
              <div className="inline-block px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-blue-300">
                Email: support@glorgames.com
              </div>
              <div className="inline-block px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-green-300">
                Live Chat: Available 24/7
              </div>
              <div className="inline-block px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-purple-300">
                Phone: +1 (555) 123-4567
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Help;
