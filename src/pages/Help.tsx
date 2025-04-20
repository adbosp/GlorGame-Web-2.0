import React from 'react';
import { motion } from 'framer-motion';

const Help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Help Center</h1>
          <p className="text-lg text-gray-600">How can we help you today?</p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How do I create an account?</h3>
                <p className="text-gray-600">
                  Click on the "Sign Up" button in the top right corner, fill in your details, and follow the verification process.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How can I reset my password?</h3>
                <p className="text-gray-600">
                  Click on "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and various local payment methods depending on your region.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Technical Support</h2>
            <p className="text-gray-600 mb-3">
              Having technical issues? Try these troubleshooting steps:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Clear your browser cache and cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Update your browser to the latest version</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Check your internet connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Disable any ad-blockers or VPNs</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Game Support</h2>
            <p className="text-gray-600 mb-3">
              Need help with specific games? Here are some common solutions:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Check game requirements and compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Verify game files integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Update graphics drivers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Check server status</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Account Security</h2>
            <p className="text-gray-600 mb-3">
              Tips to keep your account secure:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Use a strong, unique password</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Enable two-factor authentication</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Regularly update your security settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Be cautious of phishing attempts</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Contact Support</h2>
            <p className="text-gray-600 mb-3">
              Still need help? Our support team is available 24/7:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-600 font-medium">Email: support@glorgames.com</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-600 font-medium">Live Chat: Available 24/7</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-600 font-medium">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Help; 