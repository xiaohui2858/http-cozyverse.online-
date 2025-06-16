import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Clock, TrendingUp, Gamepad2 } from 'lucide-react';
import GameCard from '../components/GameCard';
import { categories, games, Game } from '../data/mockData';

const AllGames: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'name'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [displayCount, setDisplayCount] = useState(20);

  const filteredAndSortedGames = useMemo(() => {
    let filtered = games.filter(game => game.status === 'published');

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(game => game.categories.includes(selectedCategory));
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'popular':
          return b.popularityScore - a.popularityScore;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const displayedGames = filteredAndSortedGames.slice(0, displayCount);

  const isNew = (game: Game) => {
    const publishDate = new Date(game.publishedAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return publishDate > weekAgo;
  };

  const isHot = (game: Game) => {
    return game.popularityScore > 4000;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Gamepad2 className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-900">All Games</h1>
              <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                {filteredAndSortedGames.length} games
              </span>
            </div>
            
            {/* Search */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar - CrazyGames style */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Categories
              </h3>
              
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-emerald-100 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">🎯</span>
                  All Games
                  <span className="float-right text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {games.length}
                  </span>
                </button>
                
                {categories.map((category) => {
                  const categoryGames = games.filter(game => game.categories.includes(category.slug));
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                      <span className="float-right text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        {categoryGames.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              <hr className="my-4" />
              
              <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
              <div className="space-y-1">
                {[
                  { value: 'popular', label: 'Most Popular', icon: TrendingUp },
                  { value: 'newest', label: 'Newest', icon: Clock },
                  { value: 'name', label: 'A-Z', icon: Filter },
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => setSortBy(value as any)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center ${
                      sortBy === value
                        ? 'bg-emerald-100 text-emerald-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Category Tabs - Scratch style */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('compact')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'compact' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Games Grid */}
            <div className={`grid gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
            }`}>
              {displayedGames.map((game) => (
                <div key={game.id} className="relative">
                  {/* Status badges */}
                  <div className="absolute top-2 left-2 z-10 flex gap-1">
                    {isNew(game) && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {isHot(game) && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        HOT
                      </span>
                    )}
                  </div>
                  
                  {viewMode === 'grid' ? (
                    <GameCard game={game} showPopularity={true} />
                  ) : (
                    <CompactGameCard game={game} />
                  )}
                </div>
              ))}
            </div>

            {/* Load More Button - Scratch style */}
            {displayedGames.length < filteredAndSortedGames.length && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setDisplayCount(prev => prev + 20)}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Load More Games
                </button>
              </div>
            )}

            {/* No results */}
            {filteredAndSortedGames.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No games found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Game Card Component
const CompactGameCard: React.FC<{ game: Game }> = ({ game }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200">
      <Link to={`/game/${game.slug}`} className="block">
        <div className="relative">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
              <Star className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors text-sm line-clamp-1">
            {game.title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-500 capitalize">
              {game.categories[0]}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
              <span className="text-xs text-gray-600">{(game.popularityScore / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllGames; 