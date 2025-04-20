import React from 'react';
import { motion } from 'framer-motion';

const Document: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Documentation</h1>
          <p className="text-lg text-gray-600">User Guide and Documentation</p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Getting Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to GlorGames! This guide will help you get started with our platform and make the most of your gaming experience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Create your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Set up your profile</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Explore available games</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Game Features</h2>
            <p className="text-gray-600 mb-3">
              Our platform offers a variety of features to enhance your gaming experience:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Multiplayer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Leaderboards and achievements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Custom game settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Social features and friend system</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Account Management</h2>
            <p className="text-gray-600 mb-3">
              Learn how to manage your account and settings:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Update profile information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Change password and security settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Manage privacy preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Link social media accounts</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Troubleshooting</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Common issues and their solutions:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Game not loading - Clear cache and cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Connection issues - Check internet connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Performance problems - Update browser</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Need Help?</h2>
            <p className="text-gray-600 mb-3">
              If you need additional assistance, please contact our support team:
            </p>
            <div className="bg-blue-50 rounded-lg p-4 inline-block">
              <p className="text-blue-600 font-medium">Email: support@glorgames.com</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Document; 