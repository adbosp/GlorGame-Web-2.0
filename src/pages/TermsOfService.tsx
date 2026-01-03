import React from "react";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
      {/* ===== BIG BLUE GLOW (ĐỒNG BỘ TOÀN SITE) ===== */}
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* 1. ACCEPTANCE OF TERMS */}
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using GlorGames, you accept and agree to be bound
              by these Terms of Service. If you do not agree to all of the terms,
              please do not use this service.
            </p>
          </motion.section>

          {/* 2. USER ACCOUNTS */}
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
              2. User Accounts
            </h2>
            <p className="text-gray-300 mb-4">
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                "Maintaining the security of your account",
                "All activities that occur under your account",
                "Promptly notifying us of any unauthorized use",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 3. USER CONDUCT */}
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
              3. User Conduct
            </h2>
            <p className="text-gray-300 mb-4">
              You agree not to engage in any of the following prohibited
              activities:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                "Violate any laws or regulations",
                "Infringe upon the rights of others",
                "Interfere with or disrupt the service",
                "Attempt to gain unauthorized access",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 4. INTELLECTUAL PROPERTY */}
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
              4. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The service and its original content, features, and functionality
              are owned by GlorGames and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
          </motion.section>

          {/* 5. LIMITATION OF LIABILITY */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall GlorGames, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages,
              including loss of profits, data, or goodwill.
            </p>
          </motion.section>

          {/* 6. CONTACT US */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="
              rounded-2xl p-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
            "
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              6. Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
