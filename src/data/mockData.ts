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
    gameCount: 8
  },
  {
    id: 'simulation',
    name: 'Simulation',
    slug: 'simulation',
    description: 'Life-like experiences that let you build, manage, and create',
    icon: '🏡',
    color: 'from-blue-400 to-cyan-400',
    gameCount: 8
  },
  {
    id: 'adventure',
    name: 'Adventure',
    slug: 'adventure',
    description: 'Peaceful exploration and discovery games',
    icon: '🌲',
    color: 'from-green-400 to-emerald-400',
    gameCount: 8
  },
  {
    id: 'casual',
    name: 'Casual',
    slug: 'casual',
    description: 'Easy-to-play games perfect for quick relaxation breaks',
    icon: '🎮',
    color: 'from-yellow-400 to-orange-400',
    gameCount: 8
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description: 'Express yourself through art, music, and design',
    icon: '🎨',
    color: 'from-indigo-400 to-purple-400',
    gameCount: 6
  },
  {
    id: 'nature',
    name: 'Nature',
    slug: 'nature',
    description: 'Connect with the natural world through immersive experiences',
    icon: '🌿',
    color: 'from-green-400 to-teal-400',
    gameCount: 6
  }
];

export const games: Game[] = [
  // === PUZZLE GAMES ===
  {
    id: 'p1',
    title: '2048 Challenge',
    slug: '2048-challenge',
    description: 'Classic 2048 tile matching puzzle game. Slide numbered tiles to combine them and reach the 2048 tile. Addictive brain training game with smooth gameplay.',
    coverImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Use arrow keys or swipe to move tiles',
    popularityScore: 4521,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/2048" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p2',
    title: 'Words of Wonders',
    slug: 'words-of-wonders',
    description: 'Crossword puzzle adventure around the world. Expand your vocabulary and test your knowledge with themed puzzles.',
    coverImage: 'https://images.unsplash.com/photo-1594736797933-d0380ba2fe65?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Swipe letters to form words and fill crossword grid',
    popularityScore: 3245,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/words-of-wonders" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p3',
    title: 'Mahjongg Solitaire',
    slug: 'mahjongg-solitaire',
    description: 'Classic Mahjong tile matching puzzle with beautiful graphics. Match identical tiles to clear the board in this relaxing puzzle game.',
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Click matching tiles to remove them from the board',
    popularityScore: 3892,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/mahjongg-solitaire" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p4',
    title: 'Candy Riddles',
    slug: 'candy-riddles',
    description: 'Sweet match-3 puzzle adventure. Match colorful candies to solve hundreds of delicious levels with power-ups and bonuses.',
    coverImage: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle', 'casual'],
    controls: 'Swipe to match 3 or more candies in a row',
    popularityScore: 4789,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/candy-riddles" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p5',
    title: 'Tetris HTML5',
    slug: 'tetris-html5',
    description: 'Classic falling block puzzle game. Arrange Tetris pieces to complete horizontal lines. Timeless arcade gameplay with smooth controls.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle', 'casual'],
    controls: 'Arrow keys to move and rotate blocks, spacebar to drop',
    popularityScore: 5234,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/tetris" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p6',
    title: 'Sudoku Master',
    slug: 'sudoku-master',
    description: 'Classic number puzzle with multiple difficulty levels. Train your logical thinking with helpful hints and clean interface.',
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Click cells and select numbers to fill the grid',
    popularityScore: 3567,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/sudoku-master" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p7',
    title: 'Block Puzzle Gems',
    slug: 'block-puzzle-gems',
    description: 'Addictive block puzzle game. Drag blocks to fill lines and clear the board in this relaxing yet challenging puzzle experience.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle', 'casual'],
    controls: 'Drag blocks from the bottom to the grid',
    popularityScore: 4123,
    status: 'published',
    publishedAt: '2024-01-09T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/block-puzzle-gems" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'p8',
    title: 'Nonogram Picture Cross',
    slug: 'nonogram-picture-cross',
    description: 'Solve nonogram puzzles to reveal hidden pictures. Use logic and number clues to fill in grid squares and create beautiful pixel art.',
    coverImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center',
    categories: ['puzzle'],
    controls: 'Click squares to fill them based on number clues',
    popularityScore: 2987,
    status: 'published',
    publishedAt: '2024-01-08T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/nonogram" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === SIMULATION GAMES ===
  {
    id: 's1',
    title: 'Farm Merge Valley',
    slug: 'farm-merge-valley',
    description: 'Peaceful farm simulation with merge mechanics. Grow crops, raise animals, and expand your cozy valley farm.',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation'],
    controls: 'Drag items to merge and manage your farm',
    popularityScore: 4234,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/farm-merge-valley" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's2',
    title: 'Idle Restaurant Empire',
    slug: 'idle-restaurant-empire',
    description: 'Build and manage your restaurant empire. Start with a small café and expand to multiple locations worldwide.',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'casual'],
    controls: 'Click to upgrade and automate your restaurants',
    popularityScore: 4123,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/idle-restaurant-empire" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's3',
    title: 'City Island 5',
    slug: 'city-island-5',
    description: 'Build and manage your own thriving city. Construct buildings, manage resources, and keep citizens happy in this city builder.',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation'],
    controls: 'Tap to place buildings and manage city infrastructure',
    popularityScore: 4567,
    status: 'published',
    publishedAt: '2024-01-10T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/city-island-5" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's4',
    title: 'Coffee Shop Tycoon',
    slug: 'coffee-shop-tycoon',
    description: 'Run your own charming coffee shop. Serve customers, manage inventory, and create the perfect cozy atmosphere.',
    coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'casual'],
    controls: 'Click to serve customers and manage shop operations',
    popularityScore: 3567,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/coffee-shop" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's5',
    title: 'Pet Hotel Story',
    slug: 'pet-hotel-story',
    description: 'Operate a luxury pet hotel and spa. Care for adorable animals, provide grooming services, and keep pets happy.',
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'casual'],
    controls: 'Click pets to interact and provide care services',
    popularityScore: 3892,
    status: 'published',
    publishedAt: '2024-01-13T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/pet-hotel" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's6',
    title: 'Cooking Fever',
    slug: 'cooking-fever',
    description: 'Master the art of cooking in this restaurant simulation. Prepare delicious meals and serve customers in various themed restaurants.',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation'],
    controls: 'Click to cook and serve dishes',
    popularityScore: 3245,
    status: 'published',
    publishedAt: '2024-01-08T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/cooking-fever" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's7',
    title: 'Garden Designer',
    slug: 'garden-designer',
    description: 'Design beautiful gardens and landscapes. Plant flowers, trees, and create peaceful outdoor spaces.',
    coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'nature'],
    controls: 'Click and drag to design your garden',
    popularityScore: 2567,
    status: 'published',
    publishedAt: '2024-01-06T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/garden-designer" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 's8',
    title: 'Virtual Aquarium',
    slug: 'virtual-aquarium',
    description: 'Create and maintain your own virtual aquarium. Choose fish, decorations, and watch your underwater world come to life.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
    categories: ['simulation', 'nature'],
    controls: 'Click to add fish and decorations',
    popularityScore: 2876,
    status: 'published',
    publishedAt: '2024-01-07T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/virtual-aquarium" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === ADVENTURE GAMES ===
  {
    id: 'a1',
    title: 'Mystery Mansion Escape',
    slug: 'mystery-mansion-escape',
    description: 'Explore a mysterious mansion and solve puzzles to escape. Discover hidden secrets in this atmospheric adventure.',
    coverImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c97a?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'puzzle'],
    controls: 'WASD to move, mouse to look around and interact',
    popularityScore: 3124,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/mystery-mansion-puzzle-escape" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a2',
    title: 'Forest Quest',
    slug: 'forest-quest',
    description: 'Embark on a peaceful journey through enchanted forests. Discover magical creatures and solve nature puzzles.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'nature'],
    controls: 'Arrow keys to move, mouse to interact with objects',
    popularityScore: 2876,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/forest-quest" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a3',
    title: 'Ocean Explorer',
    slug: 'ocean-explorer',
    description: 'Dive into peaceful ocean depths, observe marine life, and discover underwater treasures in this calming sea adventure.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'nature'],
    controls: 'WASD to swim, mouse to look around, E to interact',
    popularityScore: 2987,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/ocean-explorer" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a4',
    title: 'Castle Craft',
    slug: 'castle-craft',
    description: 'Explore medieval castles and solve mystical puzzles. Merge resources and uncover ancient mysteries.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'puzzle'],
    controls: 'Mouse to explore and drag items to merge',
    popularityScore: 2567,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/castle-craft" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a5',
    title: 'Prison Escape',
    slug: 'prison-escape',
    description: 'Plan and execute the perfect escape from prison. Solve puzzles and avoid guards in this thrilling adventure.',
    coverImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c97a?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure'],
    controls: 'WASD to move, mouse to interact',
    popularityScore: 3567,
    status: 'published',
    publishedAt: '2024-01-16T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/prison-escape" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a6',
    title: 'Computer Office Escape',
    slug: 'computer-office-escape',
    description: 'Escape from a modern office filled with computers and technology. Use your problem-solving skills to find the way out.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'puzzle'],
    controls: 'Click to move and search for clues',
    popularityScore: 2234,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/computer-office-escape" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a7',
    title: 'Magic World',
    slug: 'magic-world',
    description: 'Journey through a mystical world filled with magic and wonder. Solve puzzles and defeat enemies using magical powers.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure'],
    controls: 'Arrow keys to explore, mouse to cast spells',
    popularityScore: 2789,
    status: 'published',
    publishedAt: '2024-01-13T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/magic-world" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'a8',
    title: 'Daily Room Escape',
    slug: 'daily-room-escape',
    description: 'Solve daily escape room challenges. Each day brings a new room with unique puzzles and mysteries to solve.',
    coverImage: 'https://images.unsplash.com/photo-1520637736862-4d197d17c97a?w=400&h=300&fit=crop&crop=center',
    categories: ['adventure', 'puzzle'],
    controls: 'Click to examine objects and solve puzzles',
    popularityScore: 2456,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/daily-room-escape" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === CASUAL GAMES ===
  {
    id: 'c1',
    title: 'Bubble Shooter Classic',
    slug: 'bubble-shooter-classic',
    description: 'Addictive bubble shooter game. Aim and shoot colored bubbles to create groups of 3 or more and clear the board.',
    coverImage: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop&crop=center',
    categories: ['casual'],
    controls: 'Mouse to aim and click to shoot bubbles',
    popularityScore: 3456,
    status: 'published',
    publishedAt: '2024-01-10T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/bubble-shooter-classic" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c2',
    title: 'Snake Game',
    slug: 'snake-game',
    description: 'Classic snake game with modern graphics. Eat fruits to grow longer while avoiding walls and your own tail.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['casual'],
    controls: 'Arrow keys to control snake direction',
    popularityScore: 3789,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/snake-classic" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c3',
    title: 'Solitaire Collection',
    slug: 'solitaire-collection',
    description: 'Multiple solitaire variants in one game. Enjoy Klondike, Spider, and FreeCell solitaire with beautiful cards.',
    coverImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click and drag cards to move them',
    popularityScore: 4234,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/solitaire-collection" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c4',
    title: 'Word Search Relaxing',
    slug: 'word-search-relaxing',
    description: 'Find hidden words in letter grids. Multiple themes and difficulty levels for endless word-finding fun.',
    coverImage: 'https://images.unsplash.com/photo-1594736797933-d0380ba2fe65?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click and drag to select words in the grid',
    popularityScore: 2987,
    status: 'published',
    publishedAt: '2024-01-09T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/word-search" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c5',
    title: 'Memory Card Match',
    slug: 'memory-card-match',
    description: 'Classic memory matching game with beautiful cards. Flip cards to find matching pairs and improve your memory.',
    coverImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click cards to flip and find matching pairs',
    popularityScore: 2678,
    status: 'published',
    publishedAt: '2024-01-07T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/memory-cards" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c6',
    title: 'Color Match Zen',
    slug: 'color-match-zen',
    description: 'Relaxing color matching game. Match colors to create beautiful patterns and achieve zen-like focus.',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&crop=center',
    categories: ['casual'],
    controls: 'Click on colors to create matching patterns',
    popularityScore: 2345,
    status: 'published',
    publishedAt: '2024-01-08T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/color-zen" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c7',
    title: 'Bejeweled Classic',
    slug: 'bejeweled-classic',
    description: 'Match colorful gems in this classic puzzle game. Swap adjacent gems to create matches and score points.',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    categories: ['casual', 'puzzle'],
    controls: 'Click and drag to swap adjacent gems',
    popularityScore: 4156,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/bejeweled" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'c8',
    title: 'Dots and Boxes',
    slug: 'dots-and-boxes',
    description: 'Classic pen and paper game. Connect dots to form boxes and score points in this simple yet strategic game.',
    coverImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    categories: ['casual'],
    controls: 'Click to draw lines between dots',
    popularityScore: 1987,
    status: 'published',
    publishedAt: '2024-01-06T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/dots-boxes" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === CREATIVE GAMES ===
  {
    id: 'cr1',
    title: 'Pixel Art Studio',
    slug: 'pixel-art-studio',
    description: 'Create beautiful pixel art with easy-to-use tools. Draw, color, and animate your own pixel masterpieces.',
    coverImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Mouse to draw and select colors from palette',
    popularityScore: 3456,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/123456789/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'cr2',
    title: 'Music Maker',
    slug: 'music-maker',
    description: 'Compose your own music with virtual instruments. Create melodies, beats, and full songs with intuitive tools.',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Click instruments and keys to make music',
    popularityScore: 2987,
    status: 'published',
    publishedAt: '2024-01-13T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/234567890/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'cr3',
    title: 'Digital Drawing Canvas',
    slug: 'digital-drawing-canvas',
    description: 'Express yourself with digital brushes and colors. Paint landscapes, portraits, or abstract art with realistic tools.',
    coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a04?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Mouse to paint, keyboard shortcuts for tools',
    popularityScore: 2345,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/digital-painting" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'cr4',
    title: 'Animation Workshop',
    slug: 'animation-workshop',
    description: 'Learn to create simple animations. Draw frames and bring your characters to life with easy animation tools.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Draw frames and use timeline controls',
    popularityScore: 2123,
    status: 'published',
    publishedAt: '2024-01-10T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/456789012/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'cr5',
    title: 'Fashion Designer',
    slug: 'fashion-designer',
    description: 'Design clothing and create fashion collections. Mix and match patterns, colors, and styles to create unique outfits.',
    coverImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Drag clothing items and accessories to design',
    popularityScore: 2456,
    status: 'published',
    publishedAt: '2024-01-09T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/fashion-designer" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'cr6',
    title: 'Story Builder',
    slug: 'story-builder',
    description: 'Create interactive stories and adventures. Build branching narratives with characters, scenes, and choices.',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
    categories: ['creative'],
    controls: 'Type to write, click to add interactive elements',
    popularityScore: 1876,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/345678901/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },

  // === NATURE GAMES ===
  {
    id: 'n1',
    title: 'Virtual Garden Zen',
    slug: 'virtual-garden-zen',
    description: 'Create and tend to a peaceful virtual garden. Plant flowers, water plants, and watch your garden bloom.',
    coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
    categories: ['nature', 'simulation'],
    controls: 'Click to plant and water, drag to arrange garden',
    popularityScore: 3234,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/virtual-garden" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'n2',
    title: 'Wildlife Photography',
    slug: 'wildlife-photography',
    description: 'Explore natural habitats and photograph amazing wildlife. Learn about different animals and their environments.',
    coverImage: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=400&h=300&fit=crop&crop=center',
    categories: ['nature', 'adventure'],
    controls: 'Move with WASD, click to take photos',
    popularityScore: 2567,
    status: 'published',
    publishedAt: '2024-01-13T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/wildlife-photography" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'n3',
    title: 'Forest Meditation',
    slug: 'forest-meditation',
    description: 'Relax in a peaceful forest environment with calming sounds and gentle activities. Perfect for stress relief.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
    categories: ['nature'],
    controls: 'Mouse to interact with peaceful forest elements',
    popularityScore: 1987,
    status: 'published',
    publishedAt: '2024-01-12T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/567890123/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'n4',
    title: 'Butterfly Garden',
    slug: 'butterfly-garden',
    description: 'Attract and observe beautiful butterflies in your garden. Learn about different species and their life cycles.',
    coverImage: 'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop&crop=center',
    categories: ['nature', 'simulation'],
    controls: 'Click to plant flowers and watch butterflies',
    popularityScore: 2234,
    status: 'published',
    publishedAt: '2024-01-11T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/butterfly-garden" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'n5',
    title: 'Ocean Conservation',
    slug: 'ocean-conservation',
    description: 'Learn about ocean conservation while cleaning up marine environments and protecting sea life.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
    categories: ['nature', 'adventure'],
    controls: 'Click to clean up and help marine animals',
    popularityScore: 1876,
    status: 'published',
    publishedAt: '2024-01-10T10:00:00Z',
    iframeCode: '<iframe src="https://scratch.mit.edu/projects/678901234/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
  },
  {
    id: 'n6',
    title: 'Bird Watching Simulator',
    slug: 'bird-watching-simulator',
    description: 'Observe and identify various bird species in their natural habitats. Learn bird calls and behaviors.',
    coverImage: 'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop&crop=center',
    categories: ['nature'],
    controls: 'Use binoculars with mouse, click to identify birds',
    popularityScore: 1654,
    status: 'published',
    publishedAt: '2024-01-09T10:00:00Z',
    iframeCode: '<iframe src="https://gamedistribution.com/games/bird-watching" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
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
