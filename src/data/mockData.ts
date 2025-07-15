<<<<<<< HEAD
<<<<<<< HEAD


// 导入真实游戏数据
import { generateRealGames } from './realGames';

export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[];
  controls: string;
  popularityScore: number;
  status: 'published' | 'draft';
  publishedAt: string;
  iframeCode: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  gameCount: number;
}

export const categories: Category[] = [
  {
    id: 'puzzle',
    name: 'Puzzle',
    slug: 'puzzle',
    description: 'Brain-teasing games that challenge your logic and problem-solving skills',
    icon: '🧩',
    color: 'from-purple-400 to-pink-400',
    gameCount: 25
  },
  {
    id: 'simulation',
    name: 'Simulation',
    slug: 'simulation',
    description: 'Life-like experiences that let you build, manage, and create',
    icon: '🏗️',
    color: 'from-blue-400 to-cyan-400',
    gameCount: 25
  },
  {
    id: 'adventure',
    name: 'Adventure',
    slug: 'adventure',
    description: 'Peaceful exploration and discovery games',
    icon: '🗺️',
    color: 'from-green-400 to-emerald-400',
    gameCount: 25
  },
  {
    id: 'casual',
    name: 'Casual',
    slug: 'casual',
    description: 'Easy-to-play games perfect for quick relaxation breaks',
    icon: '🎯',
    color: 'from-yellow-400 to-orange-400',
    gameCount: 25
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description: 'Express yourself through art, music, and design',
    icon: '🎨',
    color: 'from-indigo-400 to-purple-400',
    gameCount: 25
  },
  {
    id: 'nature',
    name: 'Nature',
    slug: 'nature',
    description: 'Connect with the natural world through immersive experiences',
    icon: '🌲',
    color: 'from-green-400 to-teal-400',
    gameCount: 25
  }
];

// 生成所有游戏数据（150个游戏，每个分类25个）
export const games: Game[] = generateRealGames();

export const getGamesByCategory = (categorySlug: string): Game[] => {
  return games.filter(game => 
    game.categories.includes(categorySlug) && game.status === 'published'
  );
};

export const getMostPopularGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const getNewestGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.status === 'published' && (
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery)
    )
  );
=======


// 导入真实游戏数据
import { generateRealGames } from './realGames';

export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[];
  controls: string;
  popularityScore: number;
  status: 'published' | 'draft';
  publishedAt: string;
  iframeCode: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  gameCount: number;
}

export const categories: Category[] = [
  {
    id: 'puzzle',
    name: 'Puzzle',
    slug: 'puzzle',
    description: 'Brain-teasing games that challenge your logic and problem-solving skills',
    icon: '🧩',
    color: 'from-purple-400 to-pink-400',
    gameCount: 30
  },
  {
    id: 'simulation',
    name: 'Simulation',
    slug: 'simulation',
    description: 'Life-like experiences that let you build, manage, and create',
    icon: '🏗️',
    color: 'from-blue-400 to-cyan-400',
    gameCount: 30
  },
  {
    id: 'adventure',
    name: 'Adventure',
    slug: 'adventure',
    description: 'Peaceful exploration and discovery games',
    icon: '🗺️',
    color: 'from-green-400 to-emerald-400',
    gameCount: 30
  },
  {
    id: 'casual',
    name: 'Casual',
    slug: 'casual',
    description: 'Easy-to-play games perfect for quick relaxation breaks',
    icon: '🎯',
    color: 'from-yellow-400 to-orange-400',
    gameCount: 30
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description: 'Express yourself through art, music, and design',
    icon: '🎨',
    color: 'from-indigo-400 to-purple-400',
    gameCount: 30
  },
  {
    id: 'nature',
    name: 'Nature',
    slug: 'nature',
    description: 'Connect with the natural world through immersive experiences',
    icon: '🌲',
    color: 'from-green-400 to-teal-400',
    gameCount: 30
  }
];

// 生成所有游戏数据（150个游戏，每个分类25个）
export const games: Game[] = generateRealGames();

export const getGamesByCategory = (categorySlug: string): Game[] => {
  return games.filter(game => 
    game.categories.includes(categorySlug) && game.status === 'published'
  );
};

export const getMostPopularGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const getNewestGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.status === 'published' && (
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery)
    )
  );
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======


// 导入真实游戏数据
import { generateRealGames } from './realGames';

export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[];
  controls: string;
  popularityScore: number;
  status: 'published' | 'draft';
  publishedAt: string;
  iframeCode: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  gameCount: number;
}

export const categories: Category[] = [
  {
    id: 'puzzle',
    name: 'Puzzle',
    slug: 'puzzle',
    description: 'Brain-teasing games that challenge your logic and problem-solving skills',
    icon: '🧩',
    color: 'from-purple-400 to-pink-400',
    gameCount: 30
  },
  {
    id: 'simulation',
    name: 'Simulation',
    slug: 'simulation',
    description: 'Life-like experiences that let you build, manage, and create',
    icon: '🏗️',
    color: 'from-blue-400 to-cyan-400',
    gameCount: 30
  },
  {
    id: 'adventure',
    name: 'Adventure',
    slug: 'adventure',
    description: 'Peaceful exploration and discovery games',
    icon: '🗺️',
    color: 'from-green-400 to-emerald-400',
    gameCount: 30
  },
  {
    id: 'casual',
    name: 'Casual',
    slug: 'casual',
    description: 'Easy-to-play games perfect for quick relaxation breaks',
    icon: '🎯',
    color: 'from-yellow-400 to-orange-400',
    gameCount: 30
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description: 'Express yourself through art, music, and design',
    icon: '🎨',
    color: 'from-indigo-400 to-purple-400',
    gameCount: 30
  },
  {
    id: 'nature',
    name: 'Nature',
    slug: 'nature',
    description: 'Connect with the natural world through immersive experiences',
    icon: '🌲',
    color: 'from-green-400 to-teal-400',
    gameCount: 30
  }
];

// 生成所有游戏数据（150个游戏，每个分类25个）
export const games: Game[] = generateRealGames();

export const getGamesByCategory = (categorySlug: string): Game[] => {
  return games.filter(game => 
    game.categories.includes(categorySlug) && game.status === 'published'
  );
};

export const getMostPopularGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const getNewestGames = (limit: number = 12): Game[] => {
  return [...games]
    .filter(game => game.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.status === 'published' && (
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery)
    )
  );
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
}; 