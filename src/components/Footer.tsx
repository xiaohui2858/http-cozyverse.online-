import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Cozyverse</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Your universe of calm and relaxing games. Discover cozy, wholesome gaming experiences 
              designed to help you unwind and find peace in your daily routine.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              <span>for peaceful gaming</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/puzzle" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Puzzle Games
                </Link>
              </li>
              <li>
                <Link to="/category/simulation" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Simulation
                </Link>
              </li>
              <li>
                <Link to="/category/adventure" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/category/creative" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Creative Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Cozyverse. All rights reserved. Find your peaceful gaming sanctuary.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;