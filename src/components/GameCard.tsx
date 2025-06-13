import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  showPopularity?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, showPopularity = false }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <Link to={`/game/${game.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
              <Play className="h-6 w-6 text-emerald-600" fill="currentColor" />
            </div>
          </div>
          {showPopularity && (
            <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
              <span className="text-xs font-medium text-gray-700">{game.popularityScore.toLocaleString()}</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-1">
            {game.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {game.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {game.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full capitalize"
              >
                {category}
              </span>
            ))}
            {game.categories.length > 2 && (
              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{game.categories.length - 2}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;