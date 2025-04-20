import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { aboutCollection } from '../types';
import { motion } from 'framer-motion';

export function About() {
  const [aboutInfo, setAboutInfo] = useState<string>('');

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const aboutCollectionRef = collection(db, 'about');
        const aboutSnapshot = await getDocs(aboutCollectionRef);
        const aboutData = aboutSnapshot.docs[0]?.data() as aboutCollection;
        setAboutInfo(aboutData.description);
      } catch (error) {
        console.error('Error fetching about info:', error);
      }
    };

    fetchAboutInfo();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-black pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {aboutInfo || 'Loading...'}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}