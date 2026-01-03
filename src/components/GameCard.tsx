import { Star } from "lucide-react";
import { Game } from "../types";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div
      className="
        relative
        rounded-2xl overflow-hidden
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        transition-all duration-300
        hover:bg-white/15
        hover:border-white/30
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-48 object-cover"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {game.title}
        </h3>

        <p className="text-gray-300 text-sm mb-5 line-clamp-2">
          {game.description}
        </p>

        <div className="flex items-center justify-between">
          {/* CATEGORY */}
          <span
            className="
              px-3 py-1 rounded-full text-xs font-medium capitalize
              bg-white/15 text-gray-200
              border border-white/20
            "
          >
            {game.category}
          </span>

          {/* RATING */}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              {game.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
