import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using GlorGames, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. User Accounts</h2>
            <p className="text-gray-600 mb-3">
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Maintaining the security of your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>All activities that occur under your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Promptly notifying us of any unauthorized use</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Conduct</h2>
            <p className="text-gray-600 mb-3">
              You agree not to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Violate any laws or regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Infringe upon the rights of others</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Interfere with or disrupt the service</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Attempt to gain unauthorized access</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The service and its original content, features, and functionality are owned by GlorGames and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              In no event shall GlorGames, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
            <p className="text-gray-600 mb-3">
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfService; 