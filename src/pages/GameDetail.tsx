import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Maximize, ArrowLeft, Star, Users, Calendar, Tag } from 'lucide-react';
import { games, categories } from '../data/realGames';

const GameDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const game = games.find(g => g.slug === slug);

  useEffect(() => {
    // 页面加载时自动滚动到顶部
    window.scrollTo(0, 0);
    
    if (game && gameContainerRef.current) {
      // Clear previous content
      gameContainerRef.current.innerHTML = '';
      
      // Directly set the innerHTML to render the game
      gameContainerRef.current.innerHTML = game.gameCode;
      
      // Execute any scripts in the game code
      const scripts = gameContainerRef.current.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
        // Clean up after execution
        setTimeout(() => {
          if (newScript.parentNode) {
            newScript.parentNode.removeChild(newScript);
          }
        }, 100);
      });
    }
    
    // Cleanup function
    return () => {
      if (gameContainerRef.current) {
        gameContainerRef.current.innerHTML = '';
      }
    };
  }, [game]);

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
              <div 
                ref={gameContainerRef}
                className={`game-container ${isFullscreen ? 'h-full' : 'min-h-[700px]'} w-full overflow-auto`}
                style={{
                  maxWidth: '100%',
                  width: '100%'
                }}
              >
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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
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

            {/* Leaderboard Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🏆</span>
                Leaderboard
              </h3>
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'PlayerPro', score: Math.floor(Math.random() * 50000) + 10000, avatar: '🥇' },
                  { rank: 2, name: 'GameMaster', score: Math.floor(Math.random() * 40000) + 8000, avatar: '🥈' },
                  { rank: 3, name: 'SkillLord', score: Math.floor(Math.random() * 30000) + 6000, avatar: '🥉' },
                  { rank: 4, name: 'ChallengeKing', score: Math.floor(Math.random() * 25000) + 5000, avatar: '👑' },
                  { rank: 5, name: 'TopPlayer', score: Math.floor(Math.random() * 20000) + 4000, avatar: '⭐' }
                ].map((player) => (
                  <div key={player.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{player.avatar}</span>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{player.name}</p>
                        <p className="text-xs text-gray-500">Rank #{player.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-600">{player.score.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg text-center">
                <p className="text-emerald-700 font-medium text-sm">🎯 Beat the high scores!</p>
                <p className="text-emerald-600 text-xs">Play now to join the leaderboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;