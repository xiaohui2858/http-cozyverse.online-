import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Filter, SlidersHorizontal, Star, Clock, TrendingUp } from 'lucide-react';
import GameCard from '../components/GameCard';
import { games, categories, Game } from '../data/mockData';

const Browse: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'newest' | 'title'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort games
  const filteredAndSortedGames = useMemo(() => {
    let filtered = games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || game.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularityScore - a.popularityScore;
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const allCategories = [
    { id: 'all', name: 'All Games', slug: 'all', icon: '🎮', gameCount: games.length },
    ...categories
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with search */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Browse Games</h1>
                <p className="text-gray-600 text-sm">Discover your next favorite cozy game</p>
              </div>

              {/* Search and controls */}
              <div className="flex flex-col sm:flex-row gap-3 lg:w-auto w-full">
                {/* Search bar */}
                <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                {/* View mode toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-white text-emerald-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                {/* Filters toggle (mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar - Categories (CrazyGames style) */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-64 w-full lg:static fixed inset-0 lg:inset-auto bg-white lg:bg-transparent z-20 lg:z-auto`}>
            <div className="lg:sticky lg:top-24">
              {/* Mobile filters header */}
              <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="p-4 lg:p-0">
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Categories</h3>
                  <div className="space-y-1">
                    {allCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.slug);
                          setShowFilters(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                          selectedCategory === category.slug
                            ? 'bg-emerald-100 text-emerald-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">{category.icon || '🎮'}</span>
                          <span>{category.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{category.gameCount}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort options */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Sort By</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSortBy('popularity')}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'popularity'
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <TrendingUp className="h-4 w-4" />
                      Most Popular
                    </button>
                    <button
                      onClick={() => setSortBy('newest')}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'newest'
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Clock className="h-4 w-4" />
                      Newest
                    </button>
                    <button
                      onClick={() => setSortBy('title')}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'title'
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="h-4 w-4 flex items-center justify-center text-xs font-bold">A-Z</span>
                      Alphabetical
                    </button>
                  </div>
                </div>

                {/* Game stats */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Game Library</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Games</span>
                      <span className="font-medium">{games.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories</span>
                      <span className="font-medium">{categories.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Showing</span>
                      <span className="font-medium text-emerald-600">{filteredAndSortedGames.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile overlay */}
          {showFilters && (
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedCategory === 'all' ? 'All Games' : 
                   categories.find(c => c.slug === selectedCategory)?.name || 'Games'}
                </h2>
                <p className="text-sm text-gray-600">
                  {filteredAndSortedGames.length} games found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
            </div>

            {/* Games grid */}
            {filteredAndSortedGames.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' 
                  : 'space-y-4'
              }>
                {filteredAndSortedGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    variant={viewMode === 'grid' ? 'grid' : 'compact'}
                    showPopularity={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No games found</h3>
                <p className="text-gray-600">
                  {searchQuery 
                    ? `No games match "${searchQuery}". Try a different search term.`
                    : 'No games available in this category.'
                  }
                </p>
                {(searchQuery || selectedCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {/* Load more (placeholder for future pagination) */}
            {filteredAndSortedGames.length > 20 && (
              <div className="text-center mt-12">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Load More Games
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse; 