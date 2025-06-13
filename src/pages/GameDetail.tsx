import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Maximize, ArrowLeft, Star, Users, Calendar, Tag } from 'lucide-react';
import { games } from '../data/mockData';

const GameDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const game = games.find(g => g.slug === slug);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Game Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

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
            <span className="text-gray-600">Games</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{game.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Games</span>
            </Link>

            {/* Game Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{game.title}</h1>

            {/* Game Stats */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                <span className="font-medium">{game.popularityScore.toLocaleString()}</span>
                <span>plays</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Added {new Date(game.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {game.categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category}`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm font-medium rounded-full transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  <span className="capitalize">{category}</span>
                </Link>
              ))}
            </div>

            {/* Game Frame */}
            <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden mb-8 ${
              isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
            }`}>
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Now Playing: {game.title}</h3>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center space-x-2 px-3 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Maximize className="h-4 w-4" />
                  <span>{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
                </button>
              </div>
              <div className={`${
                isFullscreen ? 'h-full' : 'h-96 sm:h-[500px]'
              }`}>
                <iframe 
                  className="w-full h-full border-0"
                  src={game.iframeCode.match(/src="([^"]*)"/)![1]}
                  title={`Play ${game.title}`}
                  allowFullScreen
                  allow="gamepad; microphone; camera; clipboard-read; clipboard-write; fullscreen; autoplay"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation allow-modals"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Game Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Game</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{game.description}</p>
              
              {game.controls && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How to Play</h3>
                  <p className="text-gray-600 text-sm">{game.controls}</p>
                </div>
              )}
            </div>

            {/* Ad Space - In-Content */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 mb-8">
              <p className="text-purple-600 font-medium text-sm">Advertisement Space</p>
              <p className="text-purple-500 text-xs mt-1">In-Content Ad (728x90)</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Ad Space - Sidebar */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100 mb-8 sticky top-4">
              <p className="text-blue-600 font-medium text-sm">Advertisement Space</p>
              <p className="text-blue-500 text-xs mt-1">Sidebar Ad (300x250)</p>
              <div className="mt-4 bg-white bg-opacity-50 rounded-lg p-8">
                <div className="w-full h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-sm">Ad Content</span>
                </div>
              </div>
            </div>

            {/* Game Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Game Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Popularity Score</span>
                  <span className="font-semibold text-gray-900">{game.popularityScore.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-semibold text-gray-900">{game.categories.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full capitalize">
                    {game.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;