import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import GameCard from '../components/GameCard';
import { categories, getGamesByCategory } from '../data/realGames';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  const games = slug ? getGamesByCategory(slug) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Categories</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white bg-opacity-20 rounded-xl p-3">
              <span className="text-3xl">🎮</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Cozy {category.name}</h1>
              <p className="text-emerald-100 mt-2">{games.length} games available</p>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Games Grid */}
        {games.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} variant="grid" />
          ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Games Found</h3>
            <p className="text-gray-600 mb-6">
              We're still adding games to this category. Check back soon!
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <span>Explore Other Categories</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;