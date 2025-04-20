import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to GlorGames. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 mb-3">
              We may collect, use, store and transfer different kinds of personal data about you, including:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Identity Data (name, username)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Contact Data (email address)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Technical Data (IP address, browser type)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Usage Data (how you use our website)</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-3">
              We use your personal data for the following purposes:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>To provide and maintain our service</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>To notify you about changes to our service</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>To provide customer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>To gather analysis or valuable information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>To monitor the usage of our service</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way. Our security measures include:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Encryption of data in transit and at rest</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Regular security assessments and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Access controls and authentication measures</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Contact Us</h2>
            <p className="text-gray-600 mb-3">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
