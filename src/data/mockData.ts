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
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'puzzle',
    name: 'Puzzle Games',
    slug: 'puzzle',
    description: 'Brain teasing puzzles and logic games',
    icon: '🧩',
    color: 'bg-blue-500'
  },
  {
    id: 'simulation',
    name: 'Simulation Games',
    slug: 'simulation',
    description: 'Life simulation and management games',
    icon: '🏠',
    color: 'bg-green-500'
  },
  {
    id: 'adventure',
    name: 'Adventure Games',
    slug: 'adventure',
    description: 'Explore worlds and solve mysteries',
    icon: '🗺️',
    color: 'bg-purple-500'
  },
  {
    id: 'casual',
    name: 'Casual Games',
    slug: 'casual',
    description: 'Easy to play, fun for everyone',
    icon: '🎮',
    color: 'bg-yellow-500'
  },
  {
    id: 'creative',
    name: 'Creative Games',
    slug: 'creative',
    description: 'Express your creativity',
    icon: '🎨',
    color: 'bg-pink-500'
  },
  {
    id: 'nature',
    name: 'Nature Games',
    slug: 'nature',
    description: 'Connect with the natural world',
    icon: '🌿',
    color: 'bg-emerald-500'
  }
];

export const games: Game[] = [
  // === PUZZLE GAMES ===
  {
    id: 'p1',
    title: '2048 Number Puzzle Game',
    slug: '2048-number-puzzle-game',
    description: 'Classic 2048 tile matching puzzle game. Slide numbered tiles to combine them and reach the 2048 tile. Addictive brain training game with smooth gameplay.',
    coverImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Use arrow keys or swipe to move tiles',
    popularityScore: 4521,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://play2048.co/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p2',
    title: 'Sudoku Brain Training',
    slug: 'sudoku-brain-training',
    description: 'Classic Sudoku number placement puzzle with multiple difficulty levels. Train your logical thinking with helpful hints and clean interface.',
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Click cells and select numbers to fill the grid',
    popularityScore: 3892,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.247sudoku.com/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p3',
    title: 'Tetris Block Puzzle Classic',
    slug: 'tetris-block-puzzle-classic',
    description: 'Classic falling block puzzle game. Arrange Tetris pieces to complete horizontal lines. Timeless arcade gameplay with smooth controls.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle', 'casual'],
    controls: 'Arrow keys to move and rotate blocks, spacebar to drop',
    popularityScore: 5234,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://www.freetetris.org/game.php" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p4',
    title: 'Crossword Puzzle Daily',
    slug: 'crossword-puzzle-daily',
    description: 'Daily crossword puzzles with varying difficulty levels. Expand your vocabulary and test your knowledge with themed puzzles.',
    coverImage: 'https://images.unsplash.com/photo-1594736797933-d0380ba2fe65?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Click cells and type letters to fill crossword grid',
    popularityScore: 3245,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.boatloadpuzzles.com/playcrossword" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p5',
    title: 'Bubble Shooter Classic',
    slug: 'bubble-shooter-classic',
    description: 'Addictive bubble shooting puzzle game. Aim and shoot colored bubbles to create groups of 3 or more. Clear all bubbles to advance.',
    coverImage: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle', 'casual'],
    controls: 'Mouse to aim, click to shoot bubbles',
    popularityScore: 4789,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://www.bubbleshooter.net/bubble-shooter-classic/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === SIMULATION GAMES ===
  {
    id: 's1',
    title: 'Virtual Farm Life Simulator',
    slug: 'virtual-farm-life-simulator',
    description: 'Build and manage your own virtual farm. Plant crops, raise animals, and expand your agricultural empire with realistic farming mechanics.',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation'],
    controls: 'Mouse to interact with farm elements, keyboard for movement',
    popularityScore: 4234,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/goodgame-big-farm" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's2',
    title: 'Cozy Coffee Shop Manager',
    slug: 'cozy-coffee-shop-manager',
    description: 'Run your own charming coffee shop. Serve customers, manage inventory, and create the perfect cozy atmosphere.',
    coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'casual'],
    controls: 'Click to serve customers and manage shop operations',
    popularityScore: 3567,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/papas-freezeria" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's3',
    title: 'Dream Home Designer',
    slug: 'dream-home-designer',
    description: 'Design and decorate beautiful homes. Choose furniture, colors, and layouts to create stunning interior spaces.',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'creative'],
    controls: 'Drag furniture and decorations to design rooms',
    popularityScore: 4123,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/homescapes" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's4',
    title: 'City Builder Tycoon',
    slug: 'city-builder-tycoon',
    description: 'Build and manage your own thriving city. Construct buildings, manage resources, and keep citizens happy.',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation'],
    controls: 'Mouse to place buildings and manage city infrastructure',
    popularityScore: 4567,
    status: 'published',
    publishedAt: '2024-01-10T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/little-big-city-2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's5',
    title: 'Pet Care Hotel Tycoon',
    slug: 'pet-care-hotel-tycoon',
    description: 'Operate a luxury pet hotel and spa. Care for adorable animals, provide grooming services, and keep pets happy.',
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'casual'],
    controls: 'Click pets to interact and provide care services',
    popularityScore: 3892,
    status: 'published',
    publishedAt: '2024-01-13T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/pet-salon-kitty-care" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === ADVENTURE GAMES ===
  {
    id: 'a1',
    title: 'Peaceful Forest Explorer',
    slug: 'peaceful-forest-explorer',
    description: 'Explore tranquil forests, listen to nature sounds, and discover hidden paths. A relaxing nature adventure experience.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'nature'],
    controls: 'WASD to move, mouse to look around, E to interact',
    popularityScore: 3124,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/slendrina-must-die-the-forest" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a2',
    title: 'Cozy Mystery Island',
    slug: 'cozy-mystery-island',
    description: 'Explore a mysterious but friendly island, solve gentle puzzles, and meet charming characters in this relaxing adventure.',
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'casual'],
    controls: 'Click to move and interact, drag to solve puzzles',
    popularityScore: 2876,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/raft-wars" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a3',
    title: 'Gentle Ocean Explorer',
    slug: 'gentle-ocean-explorer',
    description: 'Dive into peaceful ocean depths, observe marine life, and discover underwater treasures in this calming sea adventure.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'nature'],
    controls: 'WASD to swim, mouse to look around, E to interact',
    popularityScore: 2987,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/fishdom" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a4',
    title: 'Mountain Hiking Adventure',
    slug: 'mountain-hiking-adventure',
    description: 'Hike through beautiful mountain trails, enjoy scenic views, and find hidden waterfalls in this peaceful outdoor adventure.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'nature'],
    controls: 'WASD to move, mouse to look around, E to take photos',
    popularityScore: 2567,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/getting-over-it" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a5',
    title: 'Cozy Village Life',
    slug: 'cozy-village-life',
    description: 'Experience peaceful village life, chat with friendly villagers, and participate in community events.',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'casual'],
    controls: 'Click to move and talk, drag items to interact',
    popularityScore: 3567,
    status: 'published',
    publishedAt: '2024-01-16T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/stardew-valley" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === CASUAL GAMES ===
  {
    id: 'c1',
    title: 'Match 3 Gems Paradise',
    slug: 'match-3-gems-paradise',
    description: 'Classic match-3 puzzle with colorful gems. Swap adjacent gems to create matches and clear hundreds of relaxing levels.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click and drag to swap adjacent gems',
    popularityScore: 4156,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/game/bejeweled" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c2',
    title: 'Snake Game Classic',
    slug: 'snake-game-classic',
    description: 'Classic snake game with modern graphics. Eat fruits to grow longer while avoiding walls and your own tail.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['casual'],
    controls: 'Arrow keys to control snake direction',
    popularityScore: 3789,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://playsnake.org/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c3',
    title: 'Solitaire Card Game',
    slug: 'solitaire-card-game',
    description: 'Classic Klondike Solitaire card game. Arrange cards in sequence to clear the board in this timeless card game.',
    coverImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click and drag cards to move them',
    popularityScore: 4234,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://www.solitr.com/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  }
];

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
};