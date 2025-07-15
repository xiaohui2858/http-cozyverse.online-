<<<<<<< HEAD
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import GameCard from '../components/GameCard';
import { searchGames } from '../data/realGames';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchGames(query) : [];

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
            <span className="text-gray-900 font-medium">Search Results</span>
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

        {/* Search Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-emerald-100 rounded-xl p-2">
              <Search className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Search Results
              </h1>
              <p className="text-gray-600">
                {query ? (
                  <>
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                  </>
                ) : (
                  'Enter a search term to find games'
                )}
              </p>
            </div>
          </div>
          
          {query && (
            <div className="bg-emerald-50 rounded-xl p-4">
              <p className="text-emerald-700 font-medium">Searched for: "{query}"</p>
            </div>
          )}
        </div>

        {/* Search Results */}
        {query && results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {results.map((game) => (
              <GameCard key={game.id} game={game} variant="grid" />
            ))}
          </div>
        ) : query && results.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Games Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any games matching "{query}". Try different keywords or browse our categories.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <span>Browse All Games</span>
            </Link>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Your Search</h3>
            <p className="text-gray-600 mb-6">
              Use the search bar above to find your favorite cozy games
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <span>Explore Popular Games</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

=======
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import GameCard from '../components/GameCard';
import { searchGames } from '../data/realGames';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchGames(query) : [];

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
            <span className="text-gray-900 font-medium">Search Results</span>
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

        {/* Search Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-emerald-100 rounded-xl p-2">
              <Search className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Search Results
              </h1>
              <p className="text-gray-600">
                {query ? (
                  <>
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                  </>
                ) : (
                  'Enter a search term to find games'
                )}
              </p>
            </div>
          </div>
          
          {query && (
            <div className="bg-emerald-50 rounded-xl p-4">
              <p className="text-emerald-700 font-medium">Searched for: "{query}"</p>
            </div>
          )}
        </div>

        {/* Search Results */}
        {query && results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {results.map((game) => (
              <GameCard key={game.id} game={game} variant="grid" />
            ))}
          </div>
        ) : query && results.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Games Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any games matching "{query}". Try different keywords or browse our categories.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <span>Browse All Games</span>
            </Link>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Your Search</h3>
            <p className="text-gray-600 mb-6">
              Use the search bar above to find your favorite cozy games
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <span>Explore Popular Games</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
export default SearchResults; 