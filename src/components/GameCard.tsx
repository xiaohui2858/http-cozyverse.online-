import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Play } from 'lucide-react';
import { Game } from '../types';
<<<<<<< HEAD
<<<<<<< HEAD
import { categories } from '../data/mockData';
=======
import { categories } from '../data/realGames';
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
import { categories } from '../data/realGames';
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3

interface GameCardProps {
  game: Game;
  variant?: 'default' | 'compact' | 'grid';
  showPopularity?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ 
  game, 
  variant = 'default',
  showPopularity = false 
}) => {
  const category = categories.find(cat => cat.slug === game.categories[0]);
  
  if (variant === 'grid') {
    return (
      <Link
        to={`/game/${game.slug}`}
        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {showPopularity && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span>{(game.popularityScore / 1000).toFixed(1)}k</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-2">
          <h3 className="font-semibold text-gray-900 text-xs mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {game.title}
          </h3>
          {category && (
            <p className="text-xs text-gray-500">
              {category.name}
            </p>
          )}
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/game/${game.slug}`}
        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Play className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {showPopularity && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span>{(game.popularityScore / 1000).toFixed(1)}k</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {game.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
            {game.description}
          </p>
          {category && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {category.name}
              </span>
              {showPopularity && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Users className="h-3 w-3" />
                  <span>{(game.popularityScore / 1000).toFixed(1)}k</span>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      to={`/game/${game.slug}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden"
    >
      <div className="flex">
        <div className="w-32 h-24 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex-shrink-0">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Play className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        <div className="flex-1 p-3">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {game.title}
            </h3>
            {showPopularity && (
              <div className="flex items-center gap-1 text-xs text-gray-500 ml-2">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span>{(game.popularityScore / 1000).toFixed(1)}k</span>
              </div>
            )}
          </div>
          
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
            {game.description}
          </p>
          
          <div className="flex items-center justify-between">
            {category && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            )}
            
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Users className="h-3 w-3" />
              <span>{(game.popularityScore / 1000).toFixed(1)}k players</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;