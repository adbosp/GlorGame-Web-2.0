import React from "react";
import { motion } from "framer-motion";

const Document: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
      {/* ===== BIG BLUE GLOW (GIỐNG OUR GAMES) ===== */}
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
            Documentation
          </h1>
          <p className="text-lg text-gray-300">
            User Guide and Documentation
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* SECTION CARD */}
          {[
            {
              title: "1. Getting Started",
              desc:
                "Welcome to GlorGames! This guide will help you get started with our platform and make the most of your gaming experience.",
              items: [
                "Create your account",
                "Set up your profile",
                "Explore available games",
              ],
            },
            {
              title: "2. Game Features",
              desc:
                "Our platform offers a variety of features to enhance your gaming experience:",
              items: [
                "Multiplayer support",
                "Leaderboards and achievements",
                "Custom game settings",
                "Social features and friend system",
              ],
            },
            {
              title: "3. Account Management",
              desc:
                "Learn how to manage your account and settings:",
              items: [
                "Update profile information",
                "Change password and security settings",
                "Manage privacy preferences",
                "Link social media accounts",
              ],
            },
            {
              title: "4. Troubleshooting",
              desc:
                "Common issues and their solutions:",
              items: [
                "Game not loading – Clear cache and cookies",
                "Connection issues – Check internet connection",
                "Performance problems – Update browser",
              ],
            },
          ].map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {section.desc}
              </p>
              <ul className="space-y-2 text-gray-300">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}

          {/* NEED HELP */}
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
            <h2 className="text-2xl font-semibold mb-3 text-white">
              5. Need Help?
            </h2>
            <p className="text-gray-300 mb-4">
              If you need additional assistance, please contact our support team:
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

export default Document;
