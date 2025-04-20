import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { Game, HeroContent } from '../types';
import loadingIcon from '../icon_Loading.gif';

export function Home() {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesCollection = collection(db, 'featuredGames');
        const gamesQuery = query(gamesCollection, orderBy('rating', 'desc'), limit(3));
        const gamesSnapshot = await getDocs(gamesQuery);
        const gamesList = gamesSnapshot.docs.map((doc) => doc.data() as Game);
        setFeaturedGames(gamesList);

        const heroCollection = collection(db, 'heroSection');
        const heroSnapshot = await getDocs(heroCollection);
        const heroData = heroSnapshot.docs[0]?.data() as HeroContent;
        setHeroContent(heroData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src={loadingIcon} alt="Loading..." className="w-20 h-20" />
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      {heroContent && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen"
        >
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-70"
            >
              <source
                src={heroContent.videoUrl}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700">
              {heroContent.description}
            </p>
            <Link
              to="/games"
              className="group inline-flex items-center px-8 py-4 text-lg rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
            >
              Play Now
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Games
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredGames.map((game, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card-hover"
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-[400px] object-cover rounded-2xl mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
