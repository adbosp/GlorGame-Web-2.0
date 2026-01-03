import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
      {/* ===== BIG BLUE GLOW (ĐỒNG BỘ OUR GAMES / DOCUMENT / HELP) ===== */}
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* 1. INTRODUCTION */}
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
            <h2 className="text-2xl font-semibold mb-3 text-white">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to GlorGames. We respect your privacy and are committed
              to protecting your personal data. This privacy policy explains
              how we collect, use, and safeguard your information when you
              visit our website.
            </p>
          </motion.section>

          {/* 2. INFORMATION WE COLLECT */}
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
              2. Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We may collect, use, store, and transfer different kinds of
              personal data about you, including:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                "Identity Data (name, username)",
                "Contact Data (email address)",
                "Technical Data (IP address, browser type)",
                "Usage Data (how you use our website)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 3. HOW WE USE YOUR INFORMATION */}
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
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                "To provide and maintain our service",
                "To notify you about changes to our service",
                "To provide customer support",
                "To gather analysis or valuable information",
                "To monitor the usage of our service",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 4. DATA SECURITY */}
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
              4. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We have implemented appropriate security measures to prevent
              your personal data from being accidentally lost, used, or
              accessed in an unauthorized way. These measures include:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                "Encryption of data in transit and at rest",
                "Regular security assessments and updates",
                "Access controls and authentication measures",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 5. CONTACT US */}
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
              5. Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div
              className="
                inline-block px-4 py-3 rounded-xl
                bg-white/15 border border-white/20
                text-blue-300 font-medium
              "
            >
              Email: support@glorgames.com
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
