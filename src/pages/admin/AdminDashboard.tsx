import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Gamepad2, 
  FolderOpen, 
  Settings, 
  TrendingUp,
  Users,
  Star,
  Calendar
} from 'lucide-react';
import { games, categories } from '../../data/realGames';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const publishedGames = games.filter(g => g.status === 'published');
  const draftGames = games.filter(g => g.status === 'draft');
  const totalPlays = games.reduce((sum, game) => sum + game.popularityScore, 0);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'ads', label: 'Advertisements', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
                ← Back to Site
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-100 rounded-full p-2">
                <Settings className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Administrator</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 rounded-xl p-2">
                        <Gamepad2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Games</p>
                        <p className="text-2xl font-bold text-gray-900">{games.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 rounded-xl p-2">
                        <FolderOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Categories</p>
                        <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 rounded-xl p-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Plays</p>
                        <p className="text-2xl font-bold text-gray-900">{totalPlays.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-xl p-2">
                        <Star className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Published</p>
                        <p className="text-2xl font-bold text-gray-900">{publishedGames.length}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Games */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Games</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {games.slice(0, 5).map((game) => (
                        <div key={game.id} className="flex items-center space-x-4">
                          <img
                            src={game.coverImage}
                            alt={game.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{game.title}</h3>
                            <p className="text-sm text-gray-600">
                              {game.popularityScore.toLocaleString()} plays
                            </p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            game.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {game.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'games' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Game Management</h2>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                    Add New Game
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {games.map((game) => (
                      <div key={game.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-xl">
                        <img
                          src={game.coverImage}
                          alt={game.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{game.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-1">{game.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs text-gray-500">
                              {game.popularityScore.toLocaleString()} plays
                            </span>
                            <span className="text-xs text-gray-500">
                              {game.categories.join(', ')}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          game.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {game.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'categories' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Category Management</h2>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                    Add New Category
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <div key={category.id} className="p-4 border border-gray-100 rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-medium text-gray-900">{category.name}</h3>
                          <div className="flex space-x-2">
                            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Slug: {category.slug}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                            {games.filter(g => g.categories.includes(category.slug)).length} games
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ads' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Advertisement Management</h2>
                    <p className="text-sm text-gray-600 mt-1">Manage ad placements across your site</p>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Header Banner Ad */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Header Banner Ad</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          728x90
                        </span>
                      </div>
                      <textarea
                        placeholder="Paste your ad code here..."
                        className="w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        defaultValue="<!-- AdSense Header Banner Code -->"
                      />
                      <div className="flex justify-end mt-3">
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </div>

                    {/* Sidebar Ad */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Sidebar Ad</h3>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          300x250
                        </span>
                      </div>
                      <textarea
                        placeholder="Paste your ad code here..."
                        className="w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        defaultValue="<!-- AdSense Sidebar Code -->"
                      />
                      <div className="flex justify-end mt-3">
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </div>

                    {/* In-Content Ad */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">In-Content Ad</h3>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          728x90
                        </span>
                      </div>
                      <textarea
                        placeholder="Paste your ad code here..."
                        className="w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        defaultValue="<!-- AdSense In-Content Code -->"
                      />
                      <div className="flex justify-end mt-3">
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;