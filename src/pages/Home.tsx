import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import GameCard from '../components/GameCard';
import { categories, getGamesByCategory } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full p-3">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Universe of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Calm and Relaxing
              </span>{' '}
              Games
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover a curated collection of cozy, wholesome games designed to help you unwind, 
              relax, and find peace in your gaming experience. No stress, no pressure – just pure, 
              gentle entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/category/puzzle"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Start Playing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="#categories"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space - Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
          <p className="text-blue-600 font-medium text-sm">Advertisement Space</p>
          <p className="text-blue-500 text-xs mt-1">Header Banner Ad (728x90)</p>
        </div>
      </div>

      {/* Browse by Category */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect gaming mood with our carefully curated categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-3 group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                  <span className="text-2xl">🎮</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Game Previews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryGames = getGamesByCategory(category.slug).slice(0, 4);
            
            if (categoryGames.length === 0) return null;
            
            return (
              <div key={category.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-3">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Cozy {category.name}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/category/${category.slug}`}
                    className="hidden sm:flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                  >
                    <span>View All</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {categoryGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
                
                <div className="text-center sm:hidden">
                  <Link
                    to={`/category/${category.slug}`}
                    className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                  >
                    <span>View All {category.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Relax and Play?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of players who have found their peaceful gaming sanctuary in Cozyverse
          </p>
          <Link
            to="/category/puzzle"
            className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            <span>Explore All Games</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;