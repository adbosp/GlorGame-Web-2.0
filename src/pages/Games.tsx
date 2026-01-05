import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { GameCard } from "../components/GameCard";
import { Game } from "../types";
import { motion } from "framer-motion";

export function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchGames = async () => {
      const gamesCollection = collection(db, "featuredGames");
      const gamesSnapshot = await getDocs(gamesCollection);
      const gamesList = gamesSnapshot.docs.map(
        (doc) => doc.data() as Game
      );
      setGames(gamesList);
    };

    fetchGames();
  }, []);

  const filteredGames =
    selectedCategory === "all"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 overflow-hidden">
      {/* ===== BIG BLUE GLOW BACKGROUND ===== */}
      <div
        className="
          pointer-events-none
          absolute -top-[300px] left-1/2
          -translate-x-1/2
          w-[1800px] h-[1100px]
          bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.28),_transparent_70%)]
          blur-[160px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* TITLE */}
        <h2 className="text-5xl font-bold mb-12 text-center">
          Our Games
        </h2>

        {/* CATEGORY FILTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {["all", "action", "strategy", "puzzle", "adventure"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium capitalize
                  backdrop-blur-md border transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-white/20 text-white border-white/30"
                      : "bg-white/10 text-gray-300 border-white/15 hover:bg-white/20"
                  }
                `}
              >
                {category}
              </button>
            )
          )}
        </motion.div>

        {/* GAME GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
