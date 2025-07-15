import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';
import GameCard from '../components/GameCard';
import AdSense from '../components/AdSense';
import { categories, getGamesByCategory, games } from '../data/mockData';

const Home: React.FC = () => {
  // Get featured games (most popular)
  const featuredGames = games
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, 16);

  // Get newest games
  const newestGames = games
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - More compact */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Welcome to{' '}
              <span className="text-emerald-300">
                Cozyverse
              </span>
            </h1>
            <p className="text-base text-emerald-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Discover cozy, relaxing games designed to help you unwind. 
              No stress, no pressure – just pure, gentle entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/browse"
                className="bg-white text-emerald-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Browse All Games</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-4 text-emerald-200 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-white">{games.length}</span>
                  <span>Games</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-white">{categories.length}</span>
                  <span>Categories</span>
=======
import { ArrowRight, TrendingUp, Clock, Star } from 'lucide-react';
import GameCard from '../components/GameCard';
import { categories, games, getFeaturedGames, getNewestGames, getGamesByCategory } from '../data/realGames';

const Home: React.FC = () => {
  // 取最受欢迎的15个游戏
  const featuredGames = getFeaturedGames(15);
  
  // 取最新的12个游戏
  const newestGames = getNewestGames(12);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Cozyverse
                  </span>
                </h1>
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                  Your peaceful gaming sanctuary. Discover carefully curated games designed for relaxation, creativity, and gentle fun - no stress, no pressure - just pure, gentle entertainment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/browse"
                    className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Browse All Games</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  
                  <div className="flex items-center gap-6 text-emerald-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{games.length}</div>
                      <div className="text-sm">Games</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{categories.length}</div>
                      <div className="text-sm">Categories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
import { ArrowRight, TrendingUp, Clock, Star } from 'lucide-react';
import GameCard from '../components/GameCard';
import { categories, games, getFeaturedGames, getNewestGames, getGamesByCategory } from '../data/realGames';

const Home: React.FC = () => {
  // 取最受欢迎的15个游戏
  const featuredGames = getFeaturedGames(15);
  
  // 取最新的12个游戏
  const newestGames = getNewestGames(12);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Cozyverse
                  </span>
                </h1>
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                  Your peaceful gaming sanctuary. Discover carefully curated games designed for relaxation, creativity, and gentle fun - no stress, no pressure - just pure, gentle entertainment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/browse"
                    className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Browse All Games</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  
                  <div className="flex items-center gap-6 text-emerald-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{games.length}</div>
                      <div className="text-sm">Games</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{categories.length}</div>
                      <div className="text-sm">Categories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Game Categories
                </h2>
                
                <div className="space-y-2">
                  <Link
                    to="/browse"
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors bg-emerald-50 text-emerald-700 font-medium border border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">🎯</span>
                      <span>All Games</span>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{games.length}</span>
                  </Link>
                  
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{category.gameCount}</span>
                    </Link>
                  ))}
                </div>

                {/* Game Stats */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Game Library</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Games</span>
                      <span className="font-medium">{games.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories</span>
                      <span className="font-medium">{categories.length}</span>
                    </div>
                  </div>
<<<<<<< HEAD
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-emerald-600">🎮</span>
                  Game Categories
                </h2>
                
                <div className="space-y-2">
                  <Link
                    to="/browse"
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors bg-emerald-50 text-emerald-700 font-medium border border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">🎯</span>
                      <span>All Games</span>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{games.length}</span>
                  </Link>
                  
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{category.gameCount}</span>
                    </Link>
                  ))}
                </div>

                {/* Game Stats */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Game Library</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Games</span>
                      <span className="font-medium">{games.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories</span>
                      <span className="font-medium">{categories.length}</span>
                    </div>
                  </div>
                </div>


=======
=======
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Game Categories
              </h3>
              
              <div className="space-y-2">
                <Link
                  to="/browse"
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors bg-emerald-50 text-emerald-700 font-medium border border-emerald-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">🎯</span>
                    <span>All Games</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{games.length}</span>
                </Link>
                
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{category.gameCount}</span>
                  </Link>
                ))}
              </div>

              {/* Game Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Game Library</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Games</span>
                    <span className="font-medium">{games.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categories</span>
                    <span className="font-medium">{categories.length}</span>
                  </div>
                </div>
<<<<<<< HEAD
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
              </div>
            </div>
          </div>

          {/* Main Content */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex-1 min-w-0">
=======
          <div className="lg:col-span-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
          <div className="lg:col-span-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
            {/* Featured Games Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-100 rounded-lg p-1.5">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Most Popular</h2>
                    <p className="text-gray-600 text-xs">The games everyone's playing</p>
                  </div>
                </div>
                <Link
                  to="/browse?sort=popularity"
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm"
                >
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
=======
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
                {featuredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    variant="grid"
                    showPopularity={true}
                  />
                ))}
              </div>
            </section>

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
            {/* New Games Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 rounded-lg p-1.5">
                    <Clock className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
                    <p className="text-gray-600 text-xs">Fresh games just added</p>
                  </div>
                </div>
                <Link
                  to="/browse?sort=newest"
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm"
                >
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
=======
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
                {newestGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    variant="compact"
                    showPopularity={true}
                  />
                ))}
              </div>
            </section>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Category Previews - 显示所有6个分类 */}
=======
            {/* Category Previews - 显示所有6个分类，每行5个游戏 */}
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
            {/* Category Previews - 显示所有6个分类，每行5个游戏 */}
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
            <section>
              <div className="space-y-8">
                {categories.map((category) => {
                  const categoryGames = getGamesByCategory(category.slug).slice(0, 10);
                  
                  if (categoryGames.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-50 rounded-lg p-1.5">
                            <span className="text-base">{category.icon}</span>
                          </div>
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">
                              {category.name} Games
                            </h2>
                            <p className="text-gray-600 text-xs">{category.description}</p>
                          </div>
                        </div>
                        <Link
                          to={`/category/${category.slug}`}
                          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm"
                        >
                          View All
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3">
=======
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
                        {categoryGames.map((game) => (
                          <GameCard 
                            key={game.id} 
                            game={game} 
                            variant="grid"
                            showPopularity={false}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-center text-white">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <Star className="h-5 w-5 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Ready to Start Playing?
            </h2>
            <p className="text-emerald-100 mb-4">
              Join thousands of players in our cozy gaming community
            </p>
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <span>Explore All Games</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;