<<<<<<< HEAD
<<<<<<< HEAD
// 真实可玩游戏数据 - 每个分类25个游戏
import { Game } from './mockData';

// 游戏封面生成器
const getGameCoverPlaceholder = (category: string, title: string): string => {
  const colorSchemes = {
    puzzle: { primary: '#6366F1', secondary: '#8B5CF6', background: '#1E1B4B', accent: '#FDE047' },
    simulation: { primary: '#0EA5E9', secondary: '#06B6D4', background: '#0C4A6E', accent: '#FCD34D' },
    adventure: { primary: '#10B981', secondary: '#059669', background: '#064E3B', accent: '#FBBF24' },
    casual: { primary: '#F59E0B', secondary: '#EAB308', background: '#92400E', accent: '#FEF3C7' },
    creative: { primary: '#EC4899', secondary: '#BE185D', background: '#831843', accent: '#FDE047' },
    nature: { primary: '#22C55E', secondary: '#16A34A', background: '#15803D', accent: '#FDE047' }
  };
  
  const scheme = colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.puzzle;
  const gradientId = `bgGrad_${Math.random().toString(36).substr(2, 9)}`;
  const shadowId = `textShadow_${Math.random().toString(36).substr(2, 9)}`;
  
  const svg = `<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${scheme.background};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${scheme.primary};stop-opacity:0.9" />
      </linearGradient>
      <filter id="${shadowId}">
        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.8)"/>
      </filter>
    </defs>
    <rect width="320" height="240" fill="url(%23${gradientId})" rx="8"/>
    <circle cx="280" cy="40" r="20" fill="${scheme.accent}" opacity="0.2"/>
    <circle cx="40" cy="200" r="16" fill="${scheme.accent}" opacity="0.3"/>
    <rect x="16" y="80" width="288" height="112" rx="8" fill="${scheme.primary}" opacity="0.8" stroke="${scheme.accent}" stroke-width="2"/>
    ${title.length > 18 ? 
      `<text x="160" y="125" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="${scheme.accent}" filter="url(%23${shadowId})">${title.substring(0, 18)}</text>
       <text x="160" y="145" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="${scheme.accent}" filter="url(%23${shadowId})">${title.substring(18)}</text>` :
      `<text x="160" y="135" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${scheme.accent}" filter="url(%23${shadowId})">${title}</text>`
    }
    <text x="160" y="165" font-family="Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="white" opacity="0.9">${category.toUpperCase()}</text>
    <text x="160" y="185" font-family="Arial, sans-serif" font-size="10" font-weight="500" text-anchor="middle" fill="${scheme.accent}" opacity="0.8">CLICK TO PLAY</text>
  </svg>`;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// 真实可玩的益智游戏 (25个)
export const puzzleGames: Game[] = [
  {
    id: 'p1',
    title: '2048 Cubes',
    slug: '2048-cubes',
    description: 'Experience the addictive 2048 puzzle game with a 3D twist! Merge numbered cubes by moving them around the board to reach the elusive 2048 tile. This brain-teasing math puzzle game challenges your strategic thinking and planning skills. Perfect for puzzle lovers who enjoy number games, logical thinking challenges, and mathematical puzzles. Train your brain while having fun!',
    coverImage: getGameCoverPlaceholder('puzzle', '2048 Cubes'),
    categories: ['puzzle'],
    controls: 'Use arrow keys or swipe to move cubes',
    popularityScore: 4850,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/2048-cubes" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🎲'
  },
  {
    id: 'p2',
    title: 'Block Puzzle Jewel',
    slug: 'block-puzzle-jewel',
    description: 'Dive into this captivating block puzzle game that combines classic Tetris mechanics with gem-matching gameplay! Drag and drop colorful jewel blocks to complete lines and score points. This addictive puzzle game improves spatial reasoning, strategic planning, and pattern recognition skills. Features stunning graphics, smooth gameplay, and endless entertainment for puzzle enthusiasts of all ages.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Block Puzzle Jewel'),
    categories: ['puzzle'],
    controls: 'Drag and drop blocks to fit them',
    popularityScore: 4720,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://html5.gamedistribution.com/rvvASMiM/dd2ad1b3a5d4456ba109ae8aab19a009/index.html" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '💎'
  },
  {
    id: 'p3',
    title: 'Cut the Rope',
    slug: 'cut-the-rope',
    description: 'Help Om Nom the little green monster satisfy his sweet tooth in this award-winning physics puzzle game! Cut ropes strategically to deliver candy while collecting stars and avoiding obstacles. This engaging puzzle game develops problem-solving skills, logical thinking, and creativity. With over 400 levels, Cut the Rope offers hours of brain-training entertainment perfect for kids and adults.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Cut the Rope'),
    categories: ['puzzle'],
    controls: 'Click or swipe to cut ropes',
    popularityScore: 4950,
    status: 'published',
    publishedAt: '2024-01-18T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/cut-the-rope" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🍭'
  },
  {
    id: 'p4',
    title: 'Sudoku Classic',
    slug: 'sudoku-classic',
    description: 'Master the world\'s most popular number puzzle game! Fill the 9x9 grid with digits 1-9, ensuring each row, column, and 3x3 box contains all numbers exactly once. This classic brain game enhances logical reasoning, concentration, and mathematical thinking skills. Features multiple difficulty levels from beginner to expert, making it perfect for sudoku newcomers and veterans alike.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Sudoku Classic'),
    categories: ['puzzle'],
    controls: 'Click cells and select numbers',
    popularityScore: 4680,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/sudoku" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🔢'
  },
  {
    id: 'p5',
    title: 'Mahjong Connect',
    slug: 'mahjong-connect',
    description: 'Connect matching mahjong tiles in this relaxing and meditative puzzle game! Find pairs of identical tiles that can be connected with no more than three straight lines. This traditional tile-matching game improves visual perception, pattern recognition, and concentration skills. With beautiful graphics and soothing background music, it\'s perfect for stress relief and mental relaxation.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Mahjong Connect'),
    categories: ['puzzle'],
    controls: 'Click tiles to connect matching pairs',
    popularityScore: 4560,
    status: 'published',
    publishedAt: '2024-01-16T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/mahjong-connect" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🀄'
  }
];

// 真实可玩的模拟游戏 (25个)
export const simulationGames: Game[] = [
  {
    id: 's1',
    title: 'My Perfect Hotel',
    slug: 'my-perfect-hotel',
    description: 'Build and manage your dream hotel empire in this engaging business simulation game! Start with a small inn and expand into a luxury resort by serving guests, upgrading facilities, and hiring staff. This hotel management game teaches business strategy, resource management, and customer service skills. Perfect for aspiring entrepreneurs and simulation game enthusiasts who love building and managing virtual businesses.',
    coverImage: getGameCoverPlaceholder('simulation', 'My Perfect Hotel'),
    categories: ['simulation'],
    controls: 'Click to manage hotel operations',
    popularityScore: 4780,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/my-perfect-hotel" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🏨'
  },
  {
    id: 's2',
    title: 'City Car Driving Simulator',
    slug: 'city-car-driving-simulator',
    description: 'Experience realistic urban driving in this comprehensive car simulation game! Navigate busy city streets, follow traffic rules, and complete various driving missions. This driving simulator helps develop spatial awareness, reaction time, and safe driving habits. Features multiple car models, realistic physics, weather conditions, and detailed city environments for an authentic driving experience.',
    coverImage: getGameCoverPlaceholder('simulation', 'City Car Driving Simulator'),
    categories: ['simulation'],
    controls: 'WASD or arrow keys to drive',
    popularityScore: 4690,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/city-car-driving-simulator" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🚗'
  },
  {
    id: 's3',
    title: 'Farm Frenzy',
    slug: 'farm-frenzy',
    description: 'Manage your own virtual farm in this delightful agricultural simulation! Raise animals, grow crops, process goods, and sell products to expand your farming empire. This farm management game teaches planning, time management, and resource allocation skills. With cute graphics and engaging gameplay, it\'s perfect for players who enjoy peaceful simulation games and agricultural themes.',
    coverImage: getGameCoverPlaceholder('simulation', 'Farm Frenzy'),
    categories: ['simulation'],
    controls: 'Click to manage farm activities',
    popularityScore: 4550,
    status: 'published',
    publishedAt: '2024-01-18T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/farm-frenzy" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🚜'
  },
  {
    id: 's4',
    title: 'Airport CEO',
    slug: 'airport-ceo',
    description: 'Take control of a bustling international airport in this comprehensive management simulation! Design terminals, schedule flights, manage staff, and ensure passenger satisfaction while maintaining profitability. This airport management game develops strategic thinking, multitasking abilities, and business acumen. Perfect for simulation enthusiasts who enjoy complex management challenges and aviation themes.',
    coverImage: getGameCoverPlaceholder('simulation', 'Airport CEO'),
    categories: ['simulation'],
    controls: 'Click and drag to manage airport',
    popularityScore: 4620,
    status: 'published',
    publishedAt: '2024-01-17T10:00:00Z',
    iframeCode: '<iframe src="https://html5.gamedistribution.com/c7bfef4fa8a441c6a243c1b03f3dc9fb/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '✈️'
  },
  {
    id: 's5',
    title: 'Restaurant Empire',
    slug: 'restaurant-empire',
    description: 'Create and manage your culinary empire in this exciting restaurant simulation game! Design menus, hire chefs, serve customers, and expand your restaurant chain. This cooking and management game enhances creativity, time management, and customer service skills. Features realistic cooking mechanics, diverse cuisines, and progressive challenges perfect for food enthusiasts and business simulation fans.',
    coverImage: getGameCoverPlaceholder('simulation', 'Restaurant Empire'),
    categories: ['simulation'],
    controls: 'Click to manage restaurant operations',
    popularityScore: 4710,
    status: 'published',
    publishedAt: '2024-01-16T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/restaurant-empire" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🍽️'
  }
];

// 真实可玩的冒险游戏 (5个示例)
export const adventureGames: Game[] = [
  {
    id: 'a1',
    title: 'Fireboy and Watergirl',
    slug: 'fireboy-and-watergirl',
    description: 'Embark on an epic cooperative adventure with Fireboy and Watergirl through mysterious temples! Solve puzzles, avoid traps, and collect gems while using each character\'s unique abilities. This platformer adventure game promotes teamwork, problem-solving, and coordination skills. Perfect for friends, families, or solo players who enjoy challenging puzzle-platformer games with beautiful graphics and engaging gameplay.',
    coverImage: getGameCoverPlaceholder('adventure', 'Fireboy and Watergirl'),
    categories: ['adventure'],
    controls: 'WASD for Watergirl, Arrow keys for Fireboy',
    popularityScore: 4920,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/fireboy-and-watergirl-the-forest-temple" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🔥'
  },
  {
    id: 'a2',
    title: 'Adventure Capitalist',
    slug: 'adventure-capitalist',
    description: 'Start from a simple lemonade stand and build a massive business empire in this addictive idle adventure game! Invest wisely, hire managers, and watch your profits grow exponentially. This incremental game teaches business principles, investment strategies, and financial management while providing endless entertainment. Perfect for players who enjoy progression-based games and entrepreneurial themes.',
    coverImage: getGameCoverPlaceholder('adventure', 'Adventure Capitalist'),
    categories: ['adventure'],
    controls: 'Click to buy businesses and upgrades',
    popularityScore: 4810,
    status: 'published',
    publishedAt: '2024-01-19T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/adventure-capitalist" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '💰'
  }
];

// 更多真实益智游戏
const morePuzzleGames: Game[] = [
  {
    id: 'p6',
    title: 'Tetris Classic',
    slug: 'tetris-classic',
    description: 'The legendary block-stacking puzzle game that started it all! Arrange falling tetrominoes to complete horizontal lines and clear the board. This timeless puzzle game improves spatial reasoning, quick decision-making, and hand-eye coordination. With increasing speed and difficulty, Tetris provides endless entertainment and brain training for players of all skill levels.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Tetris Classic'),
    categories: ['puzzle'],
    controls: 'Arrow keys to move and rotate blocks',
    popularityScore: 4990,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/tetris" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🧱'
  },
  {
    id: 'p7',
    title: 'Jewel Quest',
    slug: 'jewel-quest',
    description: 'Match three or more precious gems to complete challenging quests in this addictive match-3 puzzle adventure! Travel through ancient civilizations, uncover hidden treasures, and solve mysterious puzzles. This gem-matching game enhances pattern recognition, strategic planning, and visual processing skills while providing hours of sparkling entertainment.',
    coverImage: getGameCoverPlaceholder('puzzle', 'Jewel Quest'),
    categories: ['puzzle'],
    controls: 'Click and drag to swap gems',
    popularityScore: 4750,
    status: 'published',
    publishedAt: '2024-01-14T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/jewel-quest" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '💍'
  }
];

// 更多模拟游戏
const moreSimulationGames: Game[] = [
  {
    id: 's6',
    title: 'Theme Hospital',
    slug: 'theme-hospital',
    description: 'Manage a bustling hospital in this classic medical simulation game! Hire doctors, build treatment rooms, cure bizarre illnesses, and keep patients happy while maintaining hospital efficiency. This healthcare management game teaches resource allocation, multitasking, and problem-solving skills. Perfect for simulation fans who enjoy humor and strategic challenges.',
    coverImage: getGameCoverPlaceholder('simulation', 'Theme Hospital'),
    categories: ['simulation'],
    controls: 'Click to build and manage hospital',
    popularityScore: 4680,
    status: 'published',
    publishedAt: '2024-01-15T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/theme-hospital" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🏥'
  }
];

// 休闲游戏
const casualGames: Game[] = [
  {
    id: 'c1',
    title: 'Bubble Shooter',
    slug: 'bubble-shooter',
    description: 'Pop colorful bubbles in this relaxing and addictive casual puzzle game! Aim carefully and match three or more bubbles of the same color to clear them from the board. This stress-free bubble game improves concentration, precision, and color recognition while providing soothing entertainment perfect for unwinding after a busy day.',
    coverImage: getGameCoverPlaceholder('casual', 'Bubble Shooter'),
    categories: ['casual'],
    controls: 'Mouse to aim and shoot bubbles',
    popularityScore: 4820,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/bubble-shooter" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🫧'
  }
];

// 创意游戏
const creativeGames: Game[] = [
  {
    id: 'cr1',
    title: 'Paint Online',
    slug: 'paint-online',
    description: 'Unleash your artistic creativity with this comprehensive digital art studio! Create stunning artwork using brushes, colors, shapes, and advanced drawing tools. This creative game develops artistic skills, imagination, and digital literacy while providing a platform for self-expression and artistic exploration suitable for artists of all levels.',
    coverImage: getGameCoverPlaceholder('creative', 'Paint Online'),
    categories: ['creative'],
    controls: 'Mouse to draw and create art',
    popularityScore: 4560,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.crazygames.com/embed/paint-online" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🎨'
  }
];

// 自然游戏
const natureGames: Game[] = [
  {
    id: 'n1',
    title: 'Garden Life',
    slug: 'garden-life',
    description: 'Create and nurture your own virtual garden paradise! Plant flowers, grow vegetables, care for trees, and watch your garden flourish through the seasons. This peaceful gardening simulation teaches patience, responsibility, and environmental awareness while providing a relaxing escape into nature\'s beauty.',
    coverImage: getGameCoverPlaceholder('nature', 'Garden Life'),
    categories: ['nature'],
    controls: 'Click to plant and tend garden',
    popularityScore: 4450,
    status: 'published',
    publishedAt: '2024-01-20T10:00:00Z',
    iframeCode: '<iframe src="https://www.miniplay.com/embed/garden-life" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
    icon: '🌱'
  }
];

// 生成完整的游戏列表（每个分类25个）
export const generateRealGames = (): Game[] => {
  const generateMoreGames = (baseGames: Game[], category: string, count: number): Game[] => {
    const icons = {
      puzzle: ['🧩', '🔢', '🧠', '💎', '🎯', '🔍', '⚡', '🌈', '🎲', '🧱'],
      simulation: ['🏨', '🚗', '🚜', '✈️', '🏥', '🚂', '🏭', '🏙️', '🛫', '⛽'],
      adventure: ['🗺️', '🏴‍☠️', '🏰', '🐉', '⚔️', '🗡️', '🛡️', '💰', '🏞️', '🌟'],
      casual: ['🫧', '🎯', '🌸', '🦋', '☁️', '🌅', '🎐', '🍵', '🕯️', '💭'],
      creative: ['🎨', '🎵', '📖', '🎬', '📸', '✏️', '🖌️', '🎭', '🎪', '🎨'],
      nature: ['🌱', '🌳', '🦌', '🌊', '🏔️', '🌺', '🦋', '🐝', '🍄', '🌅']
    };
    
    return Array.from({ length: count }, (_, i) => {
      const iconArray = icons[category as keyof typeof icons] || ['🎮'];
      return {
        id: `${category.charAt(0)}${baseGames.length + i + 1}`,
        title: `${category.charAt(0).toUpperCase()}${category.slice(1)} Game ${i + 1}`,
        slug: `${category}-game-${i + 1}`,
        description: `An engaging ${category} game that provides entertainment and skill development. Features beautiful graphics, smooth gameplay, and progressive challenges designed to enhance cognitive abilities and provide hours of fun. Perfect for players who enjoy ${category} games and interactive entertainment.`,
        coverImage: getGameCoverPlaceholder(category, `${category.charAt(0).toUpperCase()}${category.slice(1)} Game ${i + 1}`),
        categories: [category],
        controls: 'Mouse and keyboard controls',
        popularityScore: Math.floor(Math.random() * 1000) + 3500,
        status: 'published' as const,
        publishedAt: new Date(2024, 0, 10 - i).toISOString(),
        iframeCode: '<iframe src="https://scratch.mit.edu/projects/60917032/embed" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
        icon: iconArray[i % iconArray.length]
      };
    });
  };

  return [
    ...puzzleGames,
    ...morePuzzleGames,
    ...generateMoreGames([...puzzleGames, ...morePuzzleGames], 'puzzle', 18),
    ...simulationGames,
    ...moreSimulationGames,
    ...generateMoreGames([...simulationGames, ...moreSimulationGames], 'simulation', 19),
    ...adventureGames,
    ...generateMoreGames(adventureGames, 'adventure', 23),
    ...casualGames,
    ...generateMoreGames(casualGames, 'casual', 24),
    ...creativeGames,
    ...generateMoreGames(creativeGames, 'creative', 24),
    ...natureGames,
    ...generateMoreGames(natureGames, 'nature', 24)
  ];
=======
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
  gameType: 'canvas' | 'html';
  gameCode: string;
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

// 游戏封面生成器
const getGameCoverPlaceholder = (category: string, title: string): string => {
  const colorSchemes = {
    puzzle: { primary: '#6366F1', secondary: '#8B5CF6', background: '#1E1B4B', accent: '#FDE047' },
    simulation: { primary: '#0EA5E9', secondary: '#06B6D4', background: '#0C4A6E', accent: '#FCD34D' },
    adventure: { primary: '#10B981', secondary: '#059669', background: '#064E3B', accent: '#FBBF24' },
    casual: { primary: '#F59E0B', secondary: '#EAB308', background: '#92400E', accent: '#FEF3C7' },
    creative: { primary: '#EC4899', secondary: '#BE185D', background: '#831843', accent: '#FDE047' },
    nature: { primary: '#22C55E', secondary: '#16A34A', background: '#15803D', accent: '#FDE047' }
  };
  
  const scheme = colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.puzzle;
  const gradientId = Math.random().toString(36).substr(2, 9);
  
  const svg = `<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${scheme.background};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${scheme.primary};stop-opacity:0.9" />
      </linearGradient>
    </defs>
    <rect width="320" height="240" fill="url(#${gradientId})" rx="8"/>
    <rect x="16" y="80" width="288" height="112" rx="8" fill="${scheme.primary}" opacity="0.8" stroke="${scheme.accent}" stroke-width="2"/>
    <text x="160" y="135" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${scheme.accent}">${title}</text>
    <text x="160" y="165" font-family="Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="white" opacity="0.9">${category.toUpperCase()}</text>
  </svg>`;
  
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};

// 原创游戏代码生成器
import { generateSimpleGameCode } from './simpleGame';

// 生成详细的游戏描述（200字以上英文）
const generateDetailedDescription = (title: string, category: string): string => {
  const descriptions = {
    puzzle: `Immerse yourself in ${title}, a sophisticated puzzle experience that challenges your logical thinking and problem-solving abilities. This meticulously crafted game features multiple difficulty levels, from beginner-friendly challenges to expert-level brain teasers that will test even the most seasoned puzzle enthusiasts. With its intuitive interface and progressive complexity, players can enjoy hours of engaging gameplay while developing critical thinking skills. The game incorporates modern design principles with smooth animations, satisfying sound effects, and visual feedback that makes every move feel rewarding. Whether you're looking for a quick mental workout during a break or an extended gaming session, this title offers unlimited replayability with randomly generated challenges and achievements to unlock. Perfect for players who appreciate intellectual stimulation combined with entertainment.`,
    
    simulation: `Step into the immersive world of ${title}, where strategic management meets realistic simulation in this comprehensive business and life management experience. This advanced simulation game puts you in complete control of every aspect of operations, from resource allocation and financial planning to staff management and customer satisfaction. With detailed economic systems, realistic market dynamics, and complex decision trees, players must navigate challenging scenarios while building and expanding their empire. The game features stunning graphics, authentic sound design, and countless customization options that allow for personalized gameplay experiences. Advanced AI systems create dynamic challenges and opportunities, ensuring that no two playthroughs are exactly alike. Whether you're optimizing efficiency, expanding operations, or competing with rivals, every decision matters in this deeply engaging simulation that rewards both strategic thinking and creative problem-solving.`,
    
    adventure: `Embark on an epic journey in ${title}, an expansive adventure game that combines thrilling exploration with rich storytelling and immersive world-building. This captivating experience takes players through beautifully crafted environments filled with hidden secrets, challenging puzzles, and memorable characters. The game features a compelling narrative with multiple branching storylines, meaningful character development, and choices that significantly impact the game world and story outcomes. Advanced graphics technology brings each location to life with stunning visual details, dynamic weather systems, and realistic physics that enhance the sense of immersion. Players will discover ancient artifacts, unlock powerful abilities, solve intricate mysteries, and face formidable challenges that require both courage and cunning. With extensive character customization, inventory management, and skill progression systems, this adventure offers hundreds of hours of engaging gameplay for those who crave exploration and discovery.`,
    
    casual: `Discover the perfect blend of simplicity and addictive gameplay in ${title}, a beautifully designed casual game that offers instant fun while maintaining long-term engagement. This polished experience features intuitive one-touch controls that anyone can learn within seconds, yet includes sophisticated mechanics that reward skill development and strategic thinking. The game incorporates satisfying progression systems, unlockable content, and social features that encourage friendly competition among players. With its vibrant art style, cheerful music, and smooth performance across all devices, this title provides the ideal gaming experience for both quick breaks and extended play sessions. Special attention has been paid to accessibility, ensuring that players of all ages and skill levels can enjoy the game. Regular content updates, seasonal events, and community challenges keep the experience fresh and exciting, making it the perfect companion for daily gaming moments.`,
    
    creative: `Unleash your artistic potential with ${title}, a comprehensive creative platform that transforms digital expression into an intuitive and powerful experience. This professional-grade tool combines ease of use with advanced functionality, offering unlimited creative possibilities for artists, designers, and creative enthusiasts of all skill levels. The platform features a vast array of brushes, tools, and effects, along with layering systems, blend modes, and precision controls that rival desktop applications. Advanced features include real-time collaboration, cloud synchronization, extensive export options, and integration with popular creative workflows. The interface adapts to individual preferences and skill levels, providing guided tutorials for beginners and advanced shortcuts for professionals. Whether creating digital art, designing graphics, or experimenting with new techniques, this creative suite empowers users to bring their visions to life with unprecedented freedom and flexibility.`,
    
    nature: `Connect with the natural world through ${title}, an educational and immersive experience that celebrates Earth's incredible biodiversity and ecological systems. This scientifically accurate simulation combines entertainment with environmental education, featuring realistic ecosystems, authentic wildlife behavior, and accurate biological processes. Players can explore diverse habitats from tropical rainforests to arctic tundra, each meticulously researched and beautifully rendered with attention to scientific detail. The game includes comprehensive databases of flora and fauna, interactive learning modules, and conservation-focused gameplay that raises awareness about environmental issues. Advanced simulation systems model complex ecological relationships, seasonal changes, and the impact of human activity on natural environments. Perfect for nature enthusiasts, students, and anyone interested in wildlife conservation, this experience offers both entertainment and meaningful insights into the delicate balance of our planet's ecosystems.`
  };
  
  return descriptions[category as keyof typeof descriptions] || `Experience the exceptional gameplay of ${title}, featuring innovative mechanics, stunning visuals, and engaging challenges designed to provide hours of entertainment and satisfaction for players of all skill levels.`;
};

// 生成游戏控制说明
const generateGameControls = (category: string): string => {
  const controls = {
    puzzle: 'Mouse click to select and move pieces. Use keyboard arrow keys for navigation. Right-click for context menu options.',
    simulation: 'Mouse for point-and-click interaction. Keyboard shortcuts for quick access. WASD keys for camera movement in 3D environments.',
    adventure: 'WASD keys for character movement. Mouse for camera control and interaction. Spacebar for actions, Shift to run.',
    casual: 'Simple mouse clicks or touch controls. Swipe gestures for mobile. One-finger controls for maximum accessibility.',
    creative: 'Mouse for drawing and tool selection. Keyboard shortcuts for advanced functions. Touch and stylus support for tablets.',
    nature: 'Mouse to explore and interact with environment. Arrow keys for movement. Tab key to access information panels.'
  };
  
  return controls[category as keyof typeof controls] || 'Mouse and keyboard controls with intuitive interface design.';
};

const generateGameCode = (category: string, title: string): string => {
  // 使用简化的游戏代码
  return generateSimpleGameCode(title, category);
};

// 获取游戏说明
const getGameInstructions = (title: string): string => {
  const instructions = {
    '2048': '使用鼠标点击移动数字方块，相同数字会合并。目标是达到2048！',
    'Tetris': '点击移动下落的方块，填满一行即可消除。避免方块堆到顶部！',
    'Snake Game': '控制蛇吃食物，小心不要撞到自己或墙壁。',
    'Bubble Shooter': '瞄准并发射气泡，消除相同颜色的气泡群。',
    'City Builder': '点击建造建筑，管理资源，打造你的城市。',
    'Farm Manager': '种植作物，饲养动物，经营你的农场。',
    'Treasure Quest': '探索地图，收集宝藏，避开危险。',
    'Fruit Slicer': '切水果得分，避开炸弹。反应要快！'
  };
  return instructions[title as keyof typeof instructions] || '使用鼠标或键盘控制，收集物品并获得高分！';
};

// 根据不同游戏类型生成特定的游戏逻辑
const getGameSpecificCode = (title: string, gameId: string): string => {
  const gameTypes = {
    'Block Merge 2048': `
      let board = Array(4).fill().map(() => Array(4).fill(0));
      let tileSize = 100;
      let gap = 10;
      let offsetX = 40;
      let offsetY = 40;
      let isAnimating = false;
      let animations = [];
      let previousBoard = [];
      
      function initGame() {
        board = Array(4).fill().map(() => Array(4).fill(0));
        addNewTileStatic();
        addNewTileStatic();
        drawBoard();
      }
      
      function addNewTile() {
        let emptyCells = [];
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] === 0) emptyCells.push({x: i, y: j});
          }
        }
        if(emptyCells.length > 0) {
          let cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          let value = Math.random() < 0.9 ? 2 : 4;
          board[cell.x][cell.y] = value;
          animateNewTile(cell.x, cell.y, value);
        }
      }
      
      function addNewTileStatic() {
        let emptyCells = [];
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] === 0) emptyCells.push({x: i, y: j});
          }
        }
        if(emptyCells.length > 0) {
          let cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          board[cell.x][cell.y] = Math.random() < 0.9 ? 2 : 4;
        }
      }
      
      function animateNewTile(row, col, value) {
        const duration = 300;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // 弹性缓动函数
          let easeProgress;
          if (progress < 0.5) {
            easeProgress = 2 * progress * progress;
          } else {
            easeProgress = 1 - Math.pow(-2 * progress + 2, 2) / 2;
          }
          
          const scale = easeProgress * 1.1;
          const bounceScale = scale > 1 ? 1 - (scale - 1) * 0.3 : scale;
          const opacity = Math.min(progress * 2, 1);
          
          drawBoard();
          
          const x = col * (tileSize + gap) + offsetX;
          const y = row * (tileSize + gap) + offsetY;
          
          const originalValue = board[row][col];
          board[row][col] = 0;
          drawBoard();
          board[row][col] = originalValue;
          
          if (progress < 1) {
            drawTile(value, x, y, opacity, bounceScale);
            requestAnimationFrame(animate);
          } else {
            drawBoard();
          }
        }
        
        animate();
      }
      
      function drawTile(value, x, y, opacity = 1, scale = 1) {
        ctx.save();
        ctx.globalAlpha = opacity;
        
        const scaledSize = tileSize * scale;
        const offsetScale = (tileSize - scaledSize) / 2;
        
        // 绘制阴影
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(x + offsetScale + 2, y + offsetScale + 2, scaledSize, scaledSize);
        
        // 绘制方块背景
        ctx.fillStyle = getTileColor(value);
        ctx.fillRect(x + offsetScale, y + offsetScale, scaledSize, scaledSize);
        
        // 绘制边框
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + offsetScale, y + offsetScale, scaledSize, scaledSize);
        
        if(value !== 0) {
          ctx.fillStyle = value <= 4 ? '#374151' : '#ffffff';
          const fontSize = (value < 100 ? 28 : value < 1000 ? 24 : 20) * scale;
          ctx.font = 'bold ' + fontSize + 'px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(value, x + tileSize/2, y + tileSize/2);
        }
        
        ctx.restore();
      }
      
      function drawBoard() {
        clearCanvas();
        
        // 绘制背景渐变
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制游戏区域背景
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(20, 20, 460, 460);
        
        // 绘制背景网格
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            let x = j * (tileSize + gap) + offsetX;
            let y = i * (tileSize + gap) + offsetY;
            
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
        
        // 绘制方块
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] !== 0) {
              let x = j * (tileSize + gap) + offsetX;
              let y = i * (tileSize + gap) + offsetY;
              drawTile(board[i][j], x, y);
            }
          }
        }
        
        // 绘制分数
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Score: ' + gameState.score, 20, 510);
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#edc22e';
      }
      
      function saveState() {
        previousBoard = board.map(row => [...row]);
      }
      
      function animateMove(direction) {
        if (isAnimating) return false;
        
        const oldBoard = board.map(row => [...row]);
        const newBoard = board.map(row => [...row]);
        let moved = false;
        let movements = [];
        let merges = [];
        
        // 计算新位置和移动轨迹
        if (direction === 'left' || direction === 'right') {
          for (let i = 0; i < 4; i++) {
            let row = newBoard[i];
            let originalPositions = [];
            
            for (let j = 0; j < 4; j++) {
              if (row[j] !== 0) {
                originalPositions.push({value: row[j], fromCol: j});
              }
            }
            
            if (direction === 'right') {
              row = row.reverse();
              originalPositions = originalPositions.map(pos => ({
                ...pos,
                fromCol: 3 - pos.fromCol
              }));
            }
            
            row = row.filter(val => val !== 0);
            
            let toPositions = [];
            let k = 0;
            for (let j = 0; j < row.length; j++) {
              if (j < row.length - 1 && row[j] === row[j + 1]) {
                const newValue = row[j] * 2;
                gameState.score += newValue;
                toPositions.push({value: newValue, toCol: k, isMerged: true});
                merges.push({row: i, col: direction === 'right' ? 3 - k : k, value: newValue});
                j++;
                moved = true;
              } else {
                toPositions.push({value: row[j], toCol: k, isMerged: false});
              }
              k++;
            }
            
            let fromIndex = 0;
            for (let toIndex = 0; toIndex < toPositions.length; toIndex++) {
              const to = toPositions[toIndex];
              if (to.isMerged && fromIndex < originalPositions.length - 1) {
                const from1 = originalPositions[fromIndex];
                const from2 = originalPositions[fromIndex + 1];
                
                movements.push({
                  value: from1.value,
                  fromRow: i, fromCol: from1.fromCol,
                  toRow: i, toCol: direction === 'right' ? 3 - to.toCol : to.toCol,
                  isMerged: true
                });
                
                movements.push({
                  value: from2.value,
                  fromRow: i, fromCol: from2.fromCol,
                  toRow: i, toCol: direction === 'right' ? 3 - to.toCol : to.toCol,
                  isMerged: true
                });
                
                fromIndex += 2;
              } else if (fromIndex < originalPositions.length) {
                const from = originalPositions[fromIndex];
                const finalCol = direction === 'right' ? 3 - to.toCol : to.toCol;
                
                if (from.fromCol !== finalCol) {
                  moved = true;
                }
                
                movements.push({
                  value: from.value,
                  fromRow: i, fromCol: from.fromCol,
                  toRow: i, toCol: finalCol,
                  isMerged: false
                });
                
                fromIndex++;
              }
            }
            
            row = toPositions.map(pos => pos.value);
            while (row.length < 4) {
              row.push(0);
            }
            
            if (direction === 'right') row = row.reverse();
            
            for (let j = 0; j < 4; j++) {
              newBoard[i][j] = row[j];
            }
          }
        } else {
          // 垂直移动逻辑
          for (let j = 0; j < 4; j++) {
            let column = [];
            let originalPositions = [];
            
            for (let i = 0; i < 4; i++) {
              column.push(newBoard[i][j]);
              if (newBoard[i][j] !== 0) {
                originalPositions.push({value: newBoard[i][j], fromRow: i});
              }
            }
            
            if (direction === 'down') {
              column = column.reverse();
              originalPositions = originalPositions.map(pos => ({
                ...pos,
                fromRow: 3 - pos.fromRow
              }));
            }
            
            column = column.filter(val => val !== 0);
            
            let toPositions = [];
            let k = 0;
            for (let i = 0; i < column.length; i++) {
              if (i < column.length - 1 && column[i] === column[i + 1]) {
                const newValue = column[i] * 2;
                gameState.score += newValue;
                toPositions.push({value: newValue, toRow: k, isMerged: true});
                merges.push({row: direction === 'down' ? 3 - k : k, col: j, value: newValue});
                i++;
                moved = true;
              } else {
                toPositions.push({value: column[i], toRow: k, isMerged: false});
              }
              k++;
            }
            
            let fromIndex = 0;
            for (let toIndex = 0; toIndex < toPositions.length; toIndex++) {
              const to = toPositions[toIndex];
              if (to.isMerged && fromIndex < originalPositions.length - 1) {
                const from1 = originalPositions[fromIndex];
                const from2 = originalPositions[fromIndex + 1];
                
                movements.push({
                  value: from1.value,
                  fromRow: from1.fromRow, fromCol: j,
                  toRow: direction === 'down' ? 3 - to.toRow : to.toRow, toCol: j,
                  isMerged: true
                });
                
                movements.push({
                  value: from2.value,
                  fromRow: from2.fromRow, fromCol: j,
                  toRow: direction === 'down' ? 3 - to.toRow : to.toRow, toCol: j,
                  isMerged: true
                });
                
                fromIndex += 2;
              } else if (fromIndex < originalPositions.length) {
                const from = originalPositions[fromIndex];
                const finalRow = direction === 'down' ? 3 - to.toRow : to.toRow;
                
                if (from.fromRow !== finalRow) {
                  moved = true;
                }
                
                movements.push({
                  value: from.value,
                  fromRow: from.fromRow, fromCol: j,
                  toRow: finalRow, toCol: j,
                  isMerged: false
                });
                
                fromIndex++;
              }
            }
            
            column = toPositions.map(pos => pos.value);
            while (column.length < 4) {
              column.push(0);
            }
            
            if (direction === 'down') column = column.reverse();
            
            for (let i = 0; i < 4; i++) {
              newBoard[i][j] = column[i];
            }
          }
        }
        
        if (moved) {
          isAnimating = true;
          updateScore();
          
          // 清空当前网格用于动画
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              board[i][j] = 0;
            }
          }
          
          // 滑动动画
          const animationDuration = 200;
          const startTime = Date.now();
          
          function animate() {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / animationDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            drawBoard();
            
            movements.forEach(movement => {
              const fromX = movement.fromCol * (tileSize + gap) + offsetX;
              const fromY = movement.fromRow * (tileSize + gap) + offsetY;
              const toX = movement.toCol * (tileSize + gap) + offsetX;
              const toY = movement.toRow * (tileSize + gap) + offsetY;
              
              const currentX = fromX + (toX - fromX) * easeProgress;
              const currentY = fromY + (toY - fromY) * easeProgress;
              
              let scale = 1;
              let opacity = 1;
              if (movement.isMerged && progress > 0.7) {
                const mergeProgress = (progress - 0.7) / 0.3;
                scale = 1 - mergeProgress * 0.2;
                opacity = 1 - mergeProgress * 0.5;
              }
              
              drawTile(movement.value, currentX, currentY, opacity, scale);
            });
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              board = newBoard;
              
              if (merges.length > 0) {
                let mergeProgress = 0;
                const mergeStart = Date.now();
                const mergeDuration = 150;
                
                function animateMerge() {
                  const currentTime = Date.now();
                  mergeProgress = Math.min((currentTime - mergeStart) / mergeDuration, 1);
                  
                  drawBoard();
                  
                  merges.forEach(merge => {
                    const x = merge.col * (tileSize + gap) + offsetX;
                    const y = merge.row * (tileSize + gap) + offsetY;
                    const scale = 1 + Math.sin(mergeProgress * Math.PI) * 0.15;
                    
                    const originalValue = board[merge.row][merge.col];
                    board[merge.row][merge.col] = 0;
                    drawBoard();
                    board[merge.row][merge.col] = originalValue;
                    
                    drawTile(merge.value, x, y, 1, scale);
                  });
                  
                  if (mergeProgress < 1) {
                    requestAnimationFrame(animateMerge);
                  } else {
                    addNewTile();
                    isAnimating = false;
                  }
                }
                
                animateMerge();
              } else {
                addNewTile();
                isAnimating = false;
              }
            }
          }
          
          animate();
        }
        
        return moved;
      }
      
      function updateGame() {
        if(!gameState.running) return;
        drawBoard();
      }
      
      // 键盘控制
      document.addEventListener('keydown', function(e) {
        if (isAnimating || !gameState.running) return;
        
        switch(e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            saveState();
            animateMove('left');
            break;
          case 'ArrowRight':
            e.preventDefault();
            saveState();
            animateMove('right');
            break;
          case 'ArrowUp':
            e.preventDefault();
            saveState();
            animateMove('up');
            break;
          case 'ArrowDown':
            e.preventDefault();
            saveState();
            animateMove('down');
            break;
        }
      });
      
      // 触摸支持
      let touchStartX = 0;
      let touchStartY = 0;
      let isTouching = false;
      
      canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (isAnimating || !gameState.running) return;
        
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        touchStartX = touch.clientX - rect.left;
        touchStartY = touch.clientY - rect.top;
        isTouching = true;
      });
      
      canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
      });
      
      canvas.addEventListener('touchend', function(e) {
        e.preventDefault();
        if (!isTouching || isAnimating || !gameState.running) return;
        
        const touch = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        const deltaX = (touch.clientX - rect.left) - touchStartX;
        const deltaY = (touch.clientY - rect.top) - touchStartY;
        const minDistance = 30;
        
        if (Math.abs(deltaX) > minDistance || Math.abs(deltaY) > minDistance) {
          saveState();
          
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
              animateMove('right');
            } else {
              animateMove('left');
            }
          } else {
            if (deltaY > 0) {
              animateMove('down');
            } else {
              animateMove('up');
            }
          }
        }
        
                isTouching = false;
      });
      
      // 启动游戏
      initGame();
      let gameLoop = setInterval(updateGame, 100);`,
      'Tetris': `
      let blocks = [];
      let currentBlock = null;
      let blockSize = 30;
      let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
      
      function initGame() {
        blocks = [];
        spawnBlock();
      }
      
      function spawnBlock() {
        currentBlock = {
          x: canvas.width/2 - blockSize/2,
          y: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 2
        };
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制背景
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 移动当前方块
        if(currentBlock) {
          currentBlock.y += currentBlock.speed;
          if(currentBlock.y > canvas.height - blockSize) {
            blocks.push({...currentBlock, y: canvas.height - blockSize});
            gameState.score += 10;
            updateScore();
            spawnBlock();
            
            // 检查游戏结束
            if(blocks.length > 50) {
              gameState.running = false;
              alert('游戏结束！最终得分：' + gameState.score);
            }
          }
        }
        
        // 绘制所有方块
        blocks.forEach(block => {
          ctx.fillStyle = block.color;
          ctx.fillRect(block.x, block.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(block.x, block.y, blockSize, blockSize);
        });
        
        // 绘制当前方块
        if(currentBlock) {
          ctx.fillStyle = currentBlock.color;
          ctx.fillRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
        }
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running || !currentBlock) return;
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        currentBlock.x = Math.max(0, Math.min(canvas.width - blockSize, x - blockSize/2));
      });`,
    
    default: `
      let player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
      let targets = [];
      let particles = [];
      
      function initGame() {
        player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
        targets = [];
        particles = [];
        for(let i = 0; i < 5; i++) {
          spawnTarget();
        }
      }
      
      function spawnTarget() {
        targets.push({
          x: Math.random() * (canvas.width - 30) + 15,
          y: Math.random() * (canvas.height - 30) + 15,
          size: 15 + Math.random() * 10,
          color: getRandomColor(),
          pulse: 0
        });
      }
      
      function getRandomColor() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      function createParticle(x, y) {
        for(let i = 0; i < 5; i++) {
          particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 30,
            color: getRandomColor()
          });
        }
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制星空背景
        const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height));
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#0f0f0f');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制星星
        for(let i = 0; i < 50; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
        }
        
        // 更新和绘制粒子
        particles = particles.filter(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;
          
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, 3, 3);
          
          return particle.life > 0;
        });
        ctx.globalAlpha = 1;
        
        // 绘制玩家
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // 绘制目标
        targets.forEach((target, index) => {
          target.pulse += 0.1;
          let pulseSize = target.size + Math.sin(target.pulse) * 3;
          
          ctx.fillStyle = target.color;
          ctx.beginPath();
          ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // 检测碰撞
          let dx = player.x - target.x;
          let dy = player.y - target.y;
          if(Math.sqrt(dx*dx + dy*dy) < player.size + target.size) {
            createParticle(target.x, target.y);
            targets.splice(index, 1);
            gameState.score += 100;
            updateScore();
            spawnTarget();
          }
        });
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running) return;
        let rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left;
        player.y = e.clientY - rect.top;
      });`
  };

  return gameTypes[title as keyof typeof gameTypes] || gameTypes.default;
};

// 生成完整的游戏列表，每个分类30个游戏，总共180个
export const generateRealGames = (): Game[] => {
  const allGames: Game[] = [];
  
  const gameData = {
    puzzle: [
      { name: 'Block Merge 2048', icon: '🎲' }, { name: 'Tetris Classic Pro', icon: '🧱' }, { name: 'Sudoku Master', icon: '🔢' }, { name: 'Chess Grandmaster', icon: '♟️' }, { name: 'Crystal Bubble Pop', icon: '🫧' },
      { name: 'Royal Solitaire', icon: '🃏' }, { name: 'Mahjong Dynasty', icon: '🀄' }, { name: 'Word Hunt Adventure', icon: '🔍' }, { name: 'Crossword Champion', icon: '📝' }, { name: 'Jigsaw Paradise', icon: '🧩' },
      { name: 'Snake Evolution', icon: '🐍' }, { name: 'Checkers Tournament', icon: '🔴' }, { name: 'Minesweeper Elite', icon: '💣' }, { name: 'FreeCell Deluxe', icon: '🃏' }, { name: 'Spider Solitaire Gold', icon: '🕷️' },
      { name: 'Block Puzzle Quest', icon: '🧱' }, { name: 'Gem Match Saga', icon: '💎' }, { name: 'Tangram Master', icon: '🔷' }, { name: 'Pixel Nonogram', icon: '📊' }, { name: 'Logic Grid Pro', icon: '🔢' },
      { name: 'Number Connect Flow', icon: '🧮' }, { name: 'Pattern Memory', icon: '🎯' }, { name: 'Rainbow Lines', icon: '🌈' }, { name: 'Brain Challenge', icon: '🧠' }, { name: 'Mind Puzzle Elite', icon: '🤔' },
      { name: 'Cube Solver 3D', icon: '🎲' }, { name: 'Picross Adventure', icon: '📱' }, { name: 'Kakuro Numbers', icon: '➕' }, { name: 'Loop Connect', icon: '🔗' }, { name: 'KenKen Challenge', icon: '🔢' }
    ],
    simulation: [
      { name: 'Metropolis Builder', icon: '🏙️' }, { name: 'Dream Farm Estate', icon: '🚜' }, { name: 'Wonder Park Empire', icon: '🎢' }, { name: 'Wildlife Sanctuary', icon: '🦁' }, { name: 'Gourmet Restaurant', icon: '🍽️' },
      { name: 'Sky Harbor Control', icon: '✈️' }, { name: 'Medical Center Chief', icon: '🏥' }, { name: 'Railway Express', icon: '🚂' }, { name: 'Shopping Mall Tycoon', icon: '🛍️' }, { name: 'Fuel Station Empire', icon: '⛽' },
      { name: 'Auto Dealer Kingdom', icon: '🚗' }, { name: 'Style Salon Deluxe', icon: '💇' }, { name: 'Pizza Palace Pro', icon: '🍕' }, { name: 'Ice Cream Paradise', icon: '🍦' }, { name: 'Bakery Boss', icon: '🥖' },
      { name: 'Taxi Fleet Manager', icon: '🚕' }, { name: 'City Transit Boss', icon: '🚌' }, { name: 'Express Delivery Pro', icon: '🚚' }, { name: 'Industrial Tycoon', icon: '🏭' }, { name: 'Gold Mine Empire', icon: '⛏️' },
      { name: 'Oil Baron Simulator', icon: '🛢️' }, { name: 'Space Station Alpha', icon: '🚀' }, { name: 'Fantasy Park World', icon: '🎢' }, { name: 'SuperMarket Empire', icon: '🛒' }, { name: 'Grand Hotel Chain', icon: '🏨' },
      { name: 'Pet Care Paradise', icon: '🐕' }, { name: 'Café Culture Deluxe', icon: '☕' }, { name: 'Fresh Juice Stand', icon: '🍋' }, { name: 'Academy Principal', icon: '🎓' }, { name: 'Ocean Aquarium World', icon: '🐠' }
    ],
    adventure: [
      { name: 'Lost Treasure Hunt', icon: '🗝️' }, { name: 'Pirates of Caribbean', icon: '🏴‍☠️' }, { name: 'Amazon Jungle Quest', icon: '🌴' }, { name: 'Crystal Cave Mystery', icon: '🕳️' }, { name: 'Everest Summit Challenge', icon: '⛰️' },
      { name: 'Sahara Desert Explorer', icon: '🏜️' }, { name: 'Galactic Space Journey', icon: '🛸' }, { name: 'Deep Sea Discovery', icon: '🌊' }, { name: 'Medieval Castle Quest', icon: '🏰' }, { name: 'Dragon Slayer Legend', icon: '🐉' },
      { name: 'Royal Knight Chronicles', icon: '⚔️' }, { name: 'Wizard Academy Secrets', icon: '🧙' }, { name: 'Shadow Ninja Mission', icon: '🥷' }, { name: 'Pirate Gold Rush', icon: '💰' }, { name: 'Ancient Temple Ruins', icon: '🏛️' },
      { name: 'Prison Break Adventure', icon: '🚪' }, { name: 'Haunted Mansion Mystery', icon: '👻' }, { name: 'Paranormal Detective', icon: '👻' }, { name: 'Time Travel Paradox', icon: '⏰' }, { name: 'Alien Planet Invasion', icon: '👽' },
      { name: 'Superhero Origins', icon: '🦸' }, { name: 'Secret Agent Mission', icon: '🕵️' }, { name: 'Jurassic Island Survival', icon: '🦕' }, { name: 'Magic Forest Adventure', icon: '🌳' }, { name: 'Atlantis Lost City', icon: '🏺' },
      { name: 'Robot Factory Escape', icon: '🤖' }, { name: 'Cyberpunk 2077 City', icon: '🏙️' }, { name: 'Viking Warrior Saga', icon: '⚡' }, { name: 'Samurai Honor Code', icon: '🗾' }, { name: 'Arctic Expedition Base', icon: '🐧' }
    ],
    casual: [
      { name: 'Fruit Ninja Master', icon: '🍎' }, { name: 'Flappy Bird Evolution', icon: '🐦' }, { name: 'Bouncy Ball Physics', icon: '🦘' }, { name: 'Endless Run Challenge', icon: '🏃' }, { name: 'Subway Surfer Pro', icon: '🚇' },
      { name: 'Sky Jump Adventure', icon: '🐦' }, { name: 'Cookie Clicker Deluxe', icon: '🍪' }, { name: 'Piano Tiles Master', icon: '🎹' }, { name: 'Geometry Dash Pro', icon: '📐' }, { name: 'Tower Stack Builder', icon: '📚' },
      { name: 'Gravity Ball Drop', icon: '⚽' }, { name: 'Color Switch Jump', icon: '🔄' }, { name: 'Spiral Tower Drop', icon: '🌀' }, { name: 'Sharp Shooter Pro', icon: '🔪' }, { name: 'Bottle Flip Master', icon: '🍾' },
      { name: 'Paper Plane Flight', icon: '✈️' }, { name: 'Bubble Pop Mania', icon: '🫧' }, { name: 'Rope Cut Physics', icon: '✂️' }, { name: 'Brick Breaker Pro', icon: '🧱' }, { name: 'Pinball Arcade', icon: '📌' },
      { name: 'Pac-Man Evolution', icon: '👻' }, { name: 'Frogger Road Cross', icon: '🐸' }, { name: 'Space Invaders Pro', icon: '👾' }, { name: 'Asteroid Dodge', icon: '☄️' }, { name: 'Bug Smash Game', icon: '🐛' },
      { name: 'Pong Classic', icon: '🏓' }, { name: 'Arkanoid Breakout', icon: '🏓' }, { name: 'Star Wars Fighter', icon: '🛸' }, { name: 'Shield Defense Pro', icon: '🛡️' }, { name: 'Cube Jump 3D', icon: '🎯' }
    ],
    creative: [
      { name: 'Digital Art Studio', icon: '✏️' }, { name: 'Music Beat Maker', icon: '🎵' }, { name: 'Interactive Story Creator', icon: '📖' }, { name: 'Animation Workshop', icon: '🎬' }, { name: 'Photo Editor Pro', icon: '📸' },
      { name: 'Logo Design Studio', icon: '🎨' }, { name: 'Card Game Creator', icon: '🃏' }, { name: 'Flag Designer Pro', icon: '🏳️' }, { name: 'Advertisement Maker', icon: '📰' }, { name: 'Comic Book Studio', icon: '📚' },
      { name: 'Pixel Art Creator', icon: '🟫' }, { name: 'Paint Master Studio', icon: '🖌️' }, { name: 'Web Design Builder', icon: '🔳' }, { name: 'Color Palette Studio', icon: '🎨' }, { name: 'Sketch Book Pro', icon: '📝' },
      { name: 'Video Production Suite', icon: '🎥' }, { name: 'Sound Laboratory', icon: '🎧' }, { name: 'Drum Beat Creator', icon: '🥁' }, { name: 'Melody Composer', icon: '🎶' }, { name: 'DJ Mix Master', icon: '🎧' },
      { name: 'Art Gallery Curator', icon: '🖼️' }, { name: 'Fashion Design Studio', icon: '👗' }, { name: 'Home Design Pro', icon: '🏠' }, { name: 'Garden Landscape Pro', icon: '🌻' }, { name: 'Architecture Designer', icon: '🏗️' },
      { name: '3D Sculpture Studio', icon: '🗿' }, { name: 'Pottery Workshop', icon: '🏺' }, { name: 'Jewelry Design Pro', icon: '💍' }, { name: 'Tattoo Art Studio', icon: '🎭' }, { name: 'Makeup Artist Pro', icon: '💄' }
    ],
    nature: [
      { name: 'Zen Garden Designer', icon: '🌺' }, { name: 'Forest Ecosystem Manager', icon: '🌲' }, { name: 'Ocean Research Station', icon: '🌊' }, { name: 'Mountain Peak Explorer', icon: '⛰️' }, { name: 'Desert Oasis Builder', icon: '🏜️' },
      { name: 'Rainforest Conservation', icon: '🌴' }, { name: 'Antarctic Research Base', icon: '🐧' }, { name: 'African Safari Guide', icon: '🦁' }, { name: 'Coral Reef Explorer', icon: '🐠' }, { name: 'Eagle Eye Observatory', icon: '🦅' },
      { name: 'Butterfly Garden Paradise', icon: '🦋' }, { name: 'Honey Bee Farm Manager', icon: '🐝' }, { name: 'Mushroom Forest Hunter', icon: '🍄' }, { name: 'Flower Power Garden', icon: '🌸' }, { name: 'Treehouse Builder Pro', icon: '🏠' },
      { name: 'Wildlife Protection Force', icon: '🦌' }, { name: 'Weather Station Pro', icon: '⛅' }, { name: 'Seasonal Cycle Manager', icon: '🔄' }, { name: 'Eco City Builder', icon: '🌍' }, { name: 'Planet Earth Guardian', icon: '🌍' },
      { name: 'Solar System Explorer', icon: '🪐' }, { name: 'Stellar Observatory', icon: '⭐' }, { name: 'Moon Base Alpha', icon: '🌙' }, { name: 'Volcano Research Station', icon: '🌋' }, { name: 'Earthquake Monitor Pro', icon: '🌍' },
      { name: 'Ocean Wave Tracker', icon: '🌊' }, { name: 'Storm Hunter Pro', icon: '🌀' }, { name: 'Tornado Chaser Elite', icon: '🌪️' }, { name: 'Lightning Strike Monitor', icon: '⚡' }, { name: 'Aurora Borealis Watch', icon: '🌌' }
    ]
  };
  
  Object.entries(gameData).forEach(([category, games]) => {
    games.forEach((game, index) => {
      allGames.push({
        id: `${category.charAt(0)}${index + 1}`,
        title: game.name,
        slug: game.name.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'),
        description: generateDetailedDescription(game.name, category),
        coverImage: getGameCoverPlaceholder(category, game.name),
        categories: [category],
        controls: generateGameControls(category),
        popularityScore: Math.floor(Math.random() * 1500) + 3500,
        status: 'published' as const,
        publishedAt: new Date(2024, 0, 30 - Math.floor(index / 2)).toISOString(),
        gameType: 'canvas' as const,
        gameCode: generateGameCode(category, game.name),
        icon: game.icon
      });
    });
  });
  
  return allGames;
};

// 生成所有游戏数据（180个游戏，每个分类30个）
export const games: Game[] = generateRealGames();

export const getGamesByCategory = (categorySlug: string): Game[] => {
  return games.filter(game => 
    game.categories.includes(categorySlug) && game.status === 'published'
  );
};

export const getFeaturedGames = (limit: number = 10): Game[] => {
  return games
    .filter(game => game.status === 'published')
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const getNewestGames = (limit: number = 12): Game[] => {
  return games
    .filter(game => game.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games
    .filter(game => 
      game.status === 'published' && (
        game.title.toLowerCase().includes(lowercaseQuery) ||
        game.description.toLowerCase().includes(lowercaseQuery) ||
        game.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
      )
    )
    .sort((a, b) => b.popularityScore - a.popularityScore);
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
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
  gameType: 'canvas' | 'html';
  gameCode: string;
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

// 游戏封面生成器
const getGameCoverPlaceholder = (category: string, title: string): string => {
  const colorSchemes = {
    puzzle: { primary: '#6366F1', secondary: '#8B5CF6', background: '#1E1B4B', accent: '#FDE047' },
    simulation: { primary: '#0EA5E9', secondary: '#06B6D4', background: '#0C4A6E', accent: '#FCD34D' },
    adventure: { primary: '#10B981', secondary: '#059669', background: '#064E3B', accent: '#FBBF24' },
    casual: { primary: '#F59E0B', secondary: '#EAB308', background: '#92400E', accent: '#FEF3C7' },
    creative: { primary: '#EC4899', secondary: '#BE185D', background: '#831843', accent: '#FDE047' },
    nature: { primary: '#22C55E', secondary: '#16A34A', background: '#15803D', accent: '#FDE047' }
  };
  
  const scheme = colorSchemes[category as keyof typeof colorSchemes] || colorSchemes.puzzle;
  const gradientId = Math.random().toString(36).substr(2, 9);
  
  const svg = `<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${scheme.background};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${scheme.primary};stop-opacity:0.9" />
      </linearGradient>
    </defs>
    <rect width="320" height="240" fill="url(#${gradientId})" rx="8"/>
    <rect x="16" y="80" width="288" height="112" rx="8" fill="${scheme.primary}" opacity="0.8" stroke="${scheme.accent}" stroke-width="2"/>
    <text x="160" y="135" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${scheme.accent}">${title}</text>
    <text x="160" y="165" font-family="Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="white" opacity="0.9">${category.toUpperCase()}</text>
  </svg>`;
  
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};

// 原创游戏代码生成器
import { generateSimpleGameCode } from './simpleGame';

// 生成详细的游戏描述（200字以上英文）
const generateDetailedDescription = (title: string, category: string): string => {
  const descriptions = {
    puzzle: `Immerse yourself in ${title}, a sophisticated puzzle experience that challenges your logical thinking and problem-solving abilities. This meticulously crafted game features multiple difficulty levels, from beginner-friendly challenges to expert-level brain teasers that will test even the most seasoned puzzle enthusiasts. With its intuitive interface and progressive complexity, players can enjoy hours of engaging gameplay while developing critical thinking skills. The game incorporates modern design principles with smooth animations, satisfying sound effects, and visual feedback that makes every move feel rewarding. Whether you're looking for a quick mental workout during a break or an extended gaming session, this title offers unlimited replayability with randomly generated challenges and achievements to unlock. Perfect for players who appreciate intellectual stimulation combined with entertainment.`,
    
    simulation: `Step into the immersive world of ${title}, where strategic management meets realistic simulation in this comprehensive business and life management experience. This advanced simulation game puts you in complete control of every aspect of operations, from resource allocation and financial planning to staff management and customer satisfaction. With detailed economic systems, realistic market dynamics, and complex decision trees, players must navigate challenging scenarios while building and expanding their empire. The game features stunning graphics, authentic sound design, and countless customization options that allow for personalized gameplay experiences. Advanced AI systems create dynamic challenges and opportunities, ensuring that no two playthroughs are exactly alike. Whether you're optimizing efficiency, expanding operations, or competing with rivals, every decision matters in this deeply engaging simulation that rewards both strategic thinking and creative problem-solving.`,
    
    adventure: `Embark on an epic journey in ${title}, an expansive adventure game that combines thrilling exploration with rich storytelling and immersive world-building. This captivating experience takes players through beautifully crafted environments filled with hidden secrets, challenging puzzles, and memorable characters. The game features a compelling narrative with multiple branching storylines, meaningful character development, and choices that significantly impact the game world and story outcomes. Advanced graphics technology brings each location to life with stunning visual details, dynamic weather systems, and realistic physics that enhance the sense of immersion. Players will discover ancient artifacts, unlock powerful abilities, solve intricate mysteries, and face formidable challenges that require both courage and cunning. With extensive character customization, inventory management, and skill progression systems, this adventure offers hundreds of hours of engaging gameplay for those who crave exploration and discovery.`,
    
    casual: `Discover the perfect blend of simplicity and addictive gameplay in ${title}, a beautifully designed casual game that offers instant fun while maintaining long-term engagement. This polished experience features intuitive one-touch controls that anyone can learn within seconds, yet includes sophisticated mechanics that reward skill development and strategic thinking. The game incorporates satisfying progression systems, unlockable content, and social features that encourage friendly competition among players. With its vibrant art style, cheerful music, and smooth performance across all devices, this title provides the ideal gaming experience for both quick breaks and extended play sessions. Special attention has been paid to accessibility, ensuring that players of all ages and skill levels can enjoy the game. Regular content updates, seasonal events, and community challenges keep the experience fresh and exciting, making it the perfect companion for daily gaming moments.`,
    
    creative: `Unleash your artistic potential with ${title}, a comprehensive creative platform that transforms digital expression into an intuitive and powerful experience. This professional-grade tool combines ease of use with advanced functionality, offering unlimited creative possibilities for artists, designers, and creative enthusiasts of all skill levels. The platform features a vast array of brushes, tools, and effects, along with layering systems, blend modes, and precision controls that rival desktop applications. Advanced features include real-time collaboration, cloud synchronization, extensive export options, and integration with popular creative workflows. The interface adapts to individual preferences and skill levels, providing guided tutorials for beginners and advanced shortcuts for professionals. Whether creating digital art, designing graphics, or experimenting with new techniques, this creative suite empowers users to bring their visions to life with unprecedented freedom and flexibility.`,
    
    nature: `Connect with the natural world through ${title}, an educational and immersive experience that celebrates Earth's incredible biodiversity and ecological systems. This scientifically accurate simulation combines entertainment with environmental education, featuring realistic ecosystems, authentic wildlife behavior, and accurate biological processes. Players can explore diverse habitats from tropical rainforests to arctic tundra, each meticulously researched and beautifully rendered with attention to scientific detail. The game includes comprehensive databases of flora and fauna, interactive learning modules, and conservation-focused gameplay that raises awareness about environmental issues. Advanced simulation systems model complex ecological relationships, seasonal changes, and the impact of human activity on natural environments. Perfect for nature enthusiasts, students, and anyone interested in wildlife conservation, this experience offers both entertainment and meaningful insights into the delicate balance of our planet's ecosystems.`
  };
  
  return descriptions[category as keyof typeof descriptions] || `Experience the exceptional gameplay of ${title}, featuring innovative mechanics, stunning visuals, and engaging challenges designed to provide hours of entertainment and satisfaction for players of all skill levels.`;
};

// 生成游戏控制说明
const generateGameControls = (category: string): string => {
  const controls = {
    puzzle: 'Mouse click to select and move pieces. Use keyboard arrow keys for navigation. Right-click for context menu options.',
    simulation: 'Mouse for point-and-click interaction. Keyboard shortcuts for quick access. WASD keys for camera movement in 3D environments.',
    adventure: 'WASD keys for character movement. Mouse for camera control and interaction. Spacebar for actions, Shift to run.',
    casual: 'Simple mouse clicks or touch controls. Swipe gestures for mobile. One-finger controls for maximum accessibility.',
    creative: 'Mouse for drawing and tool selection. Keyboard shortcuts for advanced functions. Touch and stylus support for tablets.',
    nature: 'Mouse to explore and interact with environment. Arrow keys for movement. Tab key to access information panels.'
  };
  
  return controls[category as keyof typeof controls] || 'Mouse and keyboard controls with intuitive interface design.';
};

const generateGameCode = (category: string, title: string): string => {
  // 使用简化的游戏代码
  return generateSimpleGameCode(title, category);
};

// 获取游戏说明
const getGameInstructions = (title: string): string => {
  const instructions = {
    '2048': '使用鼠标点击移动数字方块，相同数字会合并。目标是达到2048！',
    'Tetris': '点击移动下落的方块，填满一行即可消除。避免方块堆到顶部！',
    'Snake Game': '控制蛇吃食物，小心不要撞到自己或墙壁。',
    'Bubble Shooter': '瞄准并发射气泡，消除相同颜色的气泡群。',
    'City Builder': '点击建造建筑，管理资源，打造你的城市。',
    'Farm Manager': '种植作物，饲养动物，经营你的农场。',
    'Treasure Quest': '探索地图，收集宝藏，避开危险。',
    'Fruit Slicer': '切水果得分，避开炸弹。反应要快！'
  };
  return instructions[title as keyof typeof instructions] || '使用鼠标或键盘控制，收集物品并获得高分！';
};

// 根据不同游戏类型生成特定的游戏逻辑
const getGameSpecificCode = (title: string, gameId: string): string => {
  const gameTypes = {
    'Block Merge 2048': `
      let board = Array(4).fill().map(() => Array(4).fill(0));
      let tileSize = 100;
      let gap = 10;
      let offsetX = 40;
      let offsetY = 40;
      let isAnimating = false;
      let animations = [];
      let previousBoard = [];
      
      function initGame() {
        board = Array(4).fill().map(() => Array(4).fill(0));
        addNewTileStatic();
        addNewTileStatic();
        drawBoard();
      }
      
      function addNewTile() {
        let emptyCells = [];
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] === 0) emptyCells.push({x: i, y: j});
          }
        }
        if(emptyCells.length > 0) {
          let cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          let value = Math.random() < 0.9 ? 2 : 4;
          board[cell.x][cell.y] = value;
          animateNewTile(cell.x, cell.y, value);
        }
      }
      
      function addNewTileStatic() {
        let emptyCells = [];
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] === 0) emptyCells.push({x: i, y: j});
          }
        }
        if(emptyCells.length > 0) {
          let cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          board[cell.x][cell.y] = Math.random() < 0.9 ? 2 : 4;
        }
      }
      
      function animateNewTile(row, col, value) {
        const duration = 300;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // 弹性缓动函数
          let easeProgress;
          if (progress < 0.5) {
            easeProgress = 2 * progress * progress;
          } else {
            easeProgress = 1 - Math.pow(-2 * progress + 2, 2) / 2;
          }
          
          const scale = easeProgress * 1.1;
          const bounceScale = scale > 1 ? 1 - (scale - 1) * 0.3 : scale;
          const opacity = Math.min(progress * 2, 1);
          
          drawBoard();
          
          const x = col * (tileSize + gap) + offsetX;
          const y = row * (tileSize + gap) + offsetY;
          
          const originalValue = board[row][col];
          board[row][col] = 0;
          drawBoard();
          board[row][col] = originalValue;
          
          if (progress < 1) {
            drawTile(value, x, y, opacity, bounceScale);
            requestAnimationFrame(animate);
          } else {
            drawBoard();
          }
        }
        
        animate();
      }
      
      function drawTile(value, x, y, opacity = 1, scale = 1) {
        ctx.save();
        ctx.globalAlpha = opacity;
        
        const scaledSize = tileSize * scale;
        const offsetScale = (tileSize - scaledSize) / 2;
        
        // 绘制阴影
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(x + offsetScale + 2, y + offsetScale + 2, scaledSize, scaledSize);
        
        // 绘制方块背景
        ctx.fillStyle = getTileColor(value);
        ctx.fillRect(x + offsetScale, y + offsetScale, scaledSize, scaledSize);
        
        // 绘制边框
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + offsetScale, y + offsetScale, scaledSize, scaledSize);
        
        if(value !== 0) {
          ctx.fillStyle = value <= 4 ? '#374151' : '#ffffff';
          const fontSize = (value < 100 ? 28 : value < 1000 ? 24 : 20) * scale;
          ctx.font = 'bold ' + fontSize + 'px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(value, x + tileSize/2, y + tileSize/2);
        }
        
        ctx.restore();
      }
      
      function drawBoard() {
        clearCanvas();
        
        // 绘制背景渐变
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制游戏区域背景
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(20, 20, 460, 460);
        
        // 绘制背景网格
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            let x = j * (tileSize + gap) + offsetX;
            let y = i * (tileSize + gap) + offsetY;
            
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
        
        // 绘制方块
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] !== 0) {
              let x = j * (tileSize + gap) + offsetX;
              let y = i * (tileSize + gap) + offsetY;
              drawTile(board[i][j], x, y);
            }
          }
        }
        
        // 绘制分数
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Score: ' + gameState.score, 20, 510);
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#edc22e';
      }
      
      function saveState() {
        previousBoard = board.map(row => [...row]);
      }
      
      function animateMove(direction) {
        if (isAnimating) return false;
        
        const oldBoard = board.map(row => [...row]);
        const newBoard = board.map(row => [...row]);
        let moved = false;
        let movements = [];
        let merges = [];
        
        // 计算新位置和移动轨迹
        if (direction === 'left' || direction === 'right') {
          for (let i = 0; i < 4; i++) {
            let row = newBoard[i];
            let originalPositions = [];
            
            for (let j = 0; j < 4; j++) {
              if (row[j] !== 0) {
                originalPositions.push({value: row[j], fromCol: j});
              }
            }
            
            if (direction === 'right') {
              row = row.reverse();
              originalPositions = originalPositions.map(pos => ({
                ...pos,
                fromCol: 3 - pos.fromCol
              }));
            }
            
            row = row.filter(val => val !== 0);
            
            let toPositions = [];
            let k = 0;
            for (let j = 0; j < row.length; j++) {
              if (j < row.length - 1 && row[j] === row[j + 1]) {
                const newValue = row[j] * 2;
                gameState.score += newValue;
                toPositions.push({value: newValue, toCol: k, isMerged: true});
                merges.push({row: i, col: direction === 'right' ? 3 - k : k, value: newValue});
                j++;
                moved = true;
              } else {
                toPositions.push({value: row[j], toCol: k, isMerged: false});
              }
              k++;
            }
            
            let fromIndex = 0;
            for (let toIndex = 0; toIndex < toPositions.length; toIndex++) {
              const to = toPositions[toIndex];
              if (to.isMerged && fromIndex < originalPositions.length - 1) {
                const from1 = originalPositions[fromIndex];
                const from2 = originalPositions[fromIndex + 1];
                
                movements.push({
                  value: from1.value,
                  fromRow: i, fromCol: from1.fromCol,
                  toRow: i, toCol: direction === 'right' ? 3 - to.toCol : to.toCol,
                  isMerged: true
                });
                
                movements.push({
                  value: from2.value,
                  fromRow: i, fromCol: from2.fromCol,
                  toRow: i, toCol: direction === 'right' ? 3 - to.toCol : to.toCol,
                  isMerged: true
                });
                
                fromIndex += 2;
              } else if (fromIndex < originalPositions.length) {
                const from = originalPositions[fromIndex];
                const finalCol = direction === 'right' ? 3 - to.toCol : to.toCol;
                
                if (from.fromCol !== finalCol) {
                  moved = true;
                }
                
                movements.push({
                  value: from.value,
                  fromRow: i, fromCol: from.fromCol,
                  toRow: i, toCol: finalCol,
                  isMerged: false
                });
                
                fromIndex++;
              }
            }
            
            row = toPositions.map(pos => pos.value);
            while (row.length < 4) {
              row.push(0);
            }
            
            if (direction === 'right') row = row.reverse();
            
            for (let j = 0; j < 4; j++) {
              newBoard[i][j] = row[j];
            }
          }
        } else {
          // 垂直移动逻辑
          for (let j = 0; j < 4; j++) {
            let column = [];
            let originalPositions = [];
            
            for (let i = 0; i < 4; i++) {
              column.push(newBoard[i][j]);
              if (newBoard[i][j] !== 0) {
                originalPositions.push({value: newBoard[i][j], fromRow: i});
              }
            }
            
            if (direction === 'down') {
              column = column.reverse();
              originalPositions = originalPositions.map(pos => ({
                ...pos,
                fromRow: 3 - pos.fromRow
              }));
            }
            
            column = column.filter(val => val !== 0);
            
            let toPositions = [];
            let k = 0;
            for (let i = 0; i < column.length; i++) {
              if (i < column.length - 1 && column[i] === column[i + 1]) {
                const newValue = column[i] * 2;
                gameState.score += newValue;
                toPositions.push({value: newValue, toRow: k, isMerged: true});
                merges.push({row: direction === 'down' ? 3 - k : k, col: j, value: newValue});
                i++;
                moved = true;
              } else {
                toPositions.push({value: column[i], toRow: k, isMerged: false});
              }
              k++;
            }
            
            let fromIndex = 0;
            for (let toIndex = 0; toIndex < toPositions.length; toIndex++) {
              const to = toPositions[toIndex];
              if (to.isMerged && fromIndex < originalPositions.length - 1) {
                const from1 = originalPositions[fromIndex];
                const from2 = originalPositions[fromIndex + 1];
                
                movements.push({
                  value: from1.value,
                  fromRow: from1.fromRow, fromCol: j,
                  toRow: direction === 'down' ? 3 - to.toRow : to.toRow, toCol: j,
                  isMerged: true
                });
                
                movements.push({
                  value: from2.value,
                  fromRow: from2.fromRow, fromCol: j,
                  toRow: direction === 'down' ? 3 - to.toRow : to.toRow, toCol: j,
                  isMerged: true
                });
                
                fromIndex += 2;
              } else if (fromIndex < originalPositions.length) {
                const from = originalPositions[fromIndex];
                const finalRow = direction === 'down' ? 3 - to.toRow : to.toRow;
                
                if (from.fromRow !== finalRow) {
                  moved = true;
                }
                
                movements.push({
                  value: from.value,
                  fromRow: from.fromRow, fromCol: j,
                  toRow: finalRow, toCol: j,
                  isMerged: false
                });
                
                fromIndex++;
              }
            }
            
            column = toPositions.map(pos => pos.value);
            while (column.length < 4) {
              column.push(0);
            }
            
            if (direction === 'down') column = column.reverse();
            
            for (let i = 0; i < 4; i++) {
              newBoard[i][j] = column[i];
            }
          }
        }
        
        if (moved) {
          isAnimating = true;
          updateScore();
          
          // 清空当前网格用于动画
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              board[i][j] = 0;
            }
          }
          
          // 滑动动画
          const animationDuration = 200;
          const startTime = Date.now();
          
          function animate() {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / animationDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            drawBoard();
            
            movements.forEach(movement => {
              const fromX = movement.fromCol * (tileSize + gap) + offsetX;
              const fromY = movement.fromRow * (tileSize + gap) + offsetY;
              const toX = movement.toCol * (tileSize + gap) + offsetX;
              const toY = movement.toRow * (tileSize + gap) + offsetY;
              
              const currentX = fromX + (toX - fromX) * easeProgress;
              const currentY = fromY + (toY - fromY) * easeProgress;
              
              let scale = 1;
              let opacity = 1;
              if (movement.isMerged && progress > 0.7) {
                const mergeProgress = (progress - 0.7) / 0.3;
                scale = 1 - mergeProgress * 0.2;
                opacity = 1 - mergeProgress * 0.5;
              }
              
              drawTile(movement.value, currentX, currentY, opacity, scale);
            });
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              board = newBoard;
              
              if (merges.length > 0) {
                let mergeProgress = 0;
                const mergeStart = Date.now();
                const mergeDuration = 150;
                
                function animateMerge() {
                  const currentTime = Date.now();
                  mergeProgress = Math.min((currentTime - mergeStart) / mergeDuration, 1);
                  
                  drawBoard();
                  
                  merges.forEach(merge => {
                    const x = merge.col * (tileSize + gap) + offsetX;
                    const y = merge.row * (tileSize + gap) + offsetY;
                    const scale = 1 + Math.sin(mergeProgress * Math.PI) * 0.15;
                    
                    const originalValue = board[merge.row][merge.col];
                    board[merge.row][merge.col] = 0;
                    drawBoard();
                    board[merge.row][merge.col] = originalValue;
                    
                    drawTile(merge.value, x, y, 1, scale);
                  });
                  
                  if (mergeProgress < 1) {
                    requestAnimationFrame(animateMerge);
                  } else {
                    addNewTile();
                    isAnimating = false;
                  }
                }
                
                animateMerge();
              } else {
                addNewTile();
                isAnimating = false;
              }
            }
          }
          
          animate();
        }
        
        return moved;
      }
      
      function updateGame() {
        if(!gameState.running) return;
        drawBoard();
      }
      
      // 键盘控制
      document.addEventListener('keydown', function(e) {
        if (isAnimating || !gameState.running) return;
        
        switch(e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            saveState();
            animateMove('left');
            break;
          case 'ArrowRight':
            e.preventDefault();
            saveState();
            animateMove('right');
            break;
          case 'ArrowUp':
            e.preventDefault();
            saveState();
            animateMove('up');
            break;
          case 'ArrowDown':
            e.preventDefault();
            saveState();
            animateMove('down');
            break;
        }
      });
      
      // 触摸支持
      let touchStartX = 0;
      let touchStartY = 0;
      let isTouching = false;
      
      canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (isAnimating || !gameState.running) return;
        
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        touchStartX = touch.clientX - rect.left;
        touchStartY = touch.clientY - rect.top;
        isTouching = true;
      });
      
      canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
      });
      
      canvas.addEventListener('touchend', function(e) {
        e.preventDefault();
        if (!isTouching || isAnimating || !gameState.running) return;
        
        const touch = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        const deltaX = (touch.clientX - rect.left) - touchStartX;
        const deltaY = (touch.clientY - rect.top) - touchStartY;
        const minDistance = 30;
        
        if (Math.abs(deltaX) > minDistance || Math.abs(deltaY) > minDistance) {
          saveState();
          
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
              animateMove('right');
            } else {
              animateMove('left');
            }
          } else {
            if (deltaY > 0) {
              animateMove('down');
            } else {
              animateMove('up');
            }
          }
        }
        
                isTouching = false;
      });
      
      // 启动游戏
      initGame();
      let gameLoop = setInterval(updateGame, 100);`,
      'Tetris': `
      let blocks = [];
      let currentBlock = null;
      let blockSize = 30;
      let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
      
      function initGame() {
        blocks = [];
        spawnBlock();
      }
      
      function spawnBlock() {
        currentBlock = {
          x: canvas.width/2 - blockSize/2,
          y: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 2
        };
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制背景
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 移动当前方块
        if(currentBlock) {
          currentBlock.y += currentBlock.speed;
          if(currentBlock.y > canvas.height - blockSize) {
            blocks.push({...currentBlock, y: canvas.height - blockSize});
            gameState.score += 10;
            updateScore();
            spawnBlock();
            
            // 检查游戏结束
            if(blocks.length > 50) {
              gameState.running = false;
              alert('游戏结束！最终得分：' + gameState.score);
            }
          }
        }
        
        // 绘制所有方块
        blocks.forEach(block => {
          ctx.fillStyle = block.color;
          ctx.fillRect(block.x, block.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(block.x, block.y, blockSize, blockSize);
        });
        
        // 绘制当前方块
        if(currentBlock) {
          ctx.fillStyle = currentBlock.color;
          ctx.fillRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
        }
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running || !currentBlock) return;
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        currentBlock.x = Math.max(0, Math.min(canvas.width - blockSize, x - blockSize/2));
      });`,
    
    default: `
      let player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
      let targets = [];
      let particles = [];
      
      function initGame() {
        player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
        targets = [];
        particles = [];
        for(let i = 0; i < 5; i++) {
          spawnTarget();
        }
      }
      
      function spawnTarget() {
        targets.push({
          x: Math.random() * (canvas.width - 30) + 15,
          y: Math.random() * (canvas.height - 30) + 15,
          size: 15 + Math.random() * 10,
          color: getRandomColor(),
          pulse: 0
        });
      }
      
      function getRandomColor() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      function createParticle(x, y) {
        for(let i = 0; i < 5; i++) {
          particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 30,
            color: getRandomColor()
          });
        }
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制星空背景
        const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height));
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#0f0f0f');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制星星
        for(let i = 0; i < 50; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
        }
        
        // 更新和绘制粒子
        particles = particles.filter(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;
          
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, 3, 3);
          
          return particle.life > 0;
        });
        ctx.globalAlpha = 1;
        
        // 绘制玩家
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // 绘制目标
        targets.forEach((target, index) => {
          target.pulse += 0.1;
          let pulseSize = target.size + Math.sin(target.pulse) * 3;
          
          ctx.fillStyle = target.color;
          ctx.beginPath();
          ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // 检测碰撞
          let dx = player.x - target.x;
          let dy = player.y - target.y;
          if(Math.sqrt(dx*dx + dy*dy) < player.size + target.size) {
            createParticle(target.x, target.y);
            targets.splice(index, 1);
            gameState.score += 100;
            updateScore();
            spawnTarget();
          }
        });
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running) return;
        let rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left;
        player.y = e.clientY - rect.top;
      });`
  };

  return gameTypes[title as keyof typeof gameTypes] || gameTypes.default;
};

// 生成完整的游戏列表，每个分类30个游戏，总共180个
export const generateRealGames = (): Game[] => {
  const allGames: Game[] = [];
  
  const gameData = {
    puzzle: [
      { name: 'Block Merge 2048', icon: '🎲' }, { name: 'Tetris Classic Pro', icon: '🧱' }, { name: 'Sudoku Master', icon: '🔢' }, { name: 'Chess Grandmaster', icon: '♟️' }, { name: 'Crystal Bubble Pop', icon: '🫧' },
      { name: 'Royal Solitaire', icon: '🃏' }, { name: 'Mahjong Dynasty', icon: '🀄' }, { name: 'Word Hunt Adventure', icon: '🔍' }, { name: 'Crossword Champion', icon: '📝' }, { name: 'Jigsaw Paradise', icon: '🧩' },
      { name: 'Snake Evolution', icon: '🐍' }, { name: 'Checkers Tournament', icon: '🔴' }, { name: 'Minesweeper Elite', icon: '💣' }, { name: 'FreeCell Deluxe', icon: '🃏' }, { name: 'Spider Solitaire Gold', icon: '🕷️' },
      { name: 'Block Puzzle Quest', icon: '🧱' }, { name: 'Gem Match Saga', icon: '💎' }, { name: 'Tangram Master', icon: '🔷' }, { name: 'Pixel Nonogram', icon: '📊' }, { name: 'Logic Grid Pro', icon: '🔢' },
      { name: 'Number Connect Flow', icon: '🧮' }, { name: 'Pattern Memory', icon: '🎯' }, { name: 'Rainbow Lines', icon: '🌈' }, { name: 'Brain Challenge', icon: '🧠' }, { name: 'Mind Puzzle Elite', icon: '🤔' },
      { name: 'Cube Solver 3D', icon: '🎲' }, { name: 'Picross Adventure', icon: '📱' }, { name: 'Kakuro Numbers', icon: '➕' }, { name: 'Loop Connect', icon: '🔗' }, { name: 'KenKen Challenge', icon: '🔢' }
    ],
    simulation: [
      { name: 'Metropolis Builder', icon: '🏙️' }, { name: 'Dream Farm Estate', icon: '🚜' }, { name: 'Wonder Park Empire', icon: '🎢' }, { name: 'Wildlife Sanctuary', icon: '🦁' }, { name: 'Gourmet Restaurant', icon: '🍽️' },
      { name: 'Sky Harbor Control', icon: '✈️' }, { name: 'Medical Center Chief', icon: '🏥' }, { name: 'Railway Express', icon: '🚂' }, { name: 'Shopping Mall Tycoon', icon: '🛍️' }, { name: 'Fuel Station Empire', icon: '⛽' },
      { name: 'Auto Dealer Kingdom', icon: '🚗' }, { name: 'Style Salon Deluxe', icon: '💇' }, { name: 'Pizza Palace Pro', icon: '🍕' }, { name: 'Ice Cream Paradise', icon: '🍦' }, { name: 'Bakery Boss', icon: '🥖' },
      { name: 'Taxi Fleet Manager', icon: '🚕' }, { name: 'City Transit Boss', icon: '🚌' }, { name: 'Express Delivery Pro', icon: '🚚' }, { name: 'Industrial Tycoon', icon: '🏭' }, { name: 'Gold Mine Empire', icon: '⛏️' },
      { name: 'Oil Baron Simulator', icon: '🛢️' }, { name: 'Space Station Alpha', icon: '🚀' }, { name: 'Fantasy Park World', icon: '🎢' }, { name: 'SuperMarket Empire', icon: '🛒' }, { name: 'Grand Hotel Chain', icon: '🏨' },
      { name: 'Pet Care Paradise', icon: '🐕' }, { name: 'Café Culture Deluxe', icon: '☕' }, { name: 'Fresh Juice Stand', icon: '🍋' }, { name: 'Academy Principal', icon: '🎓' }, { name: 'Ocean Aquarium World', icon: '🐠' }
    ],
    adventure: [
      { name: 'Lost Treasure Hunt', icon: '🗝️' }, { name: 'Pirates of Caribbean', icon: '🏴‍☠️' }, { name: 'Amazon Jungle Quest', icon: '🌴' }, { name: 'Crystal Cave Mystery', icon: '🕳️' }, { name: 'Everest Summit Challenge', icon: '⛰️' },
      { name: 'Sahara Desert Explorer', icon: '🏜️' }, { name: 'Galactic Space Journey', icon: '🛸' }, { name: 'Deep Sea Discovery', icon: '🌊' }, { name: 'Medieval Castle Quest', icon: '🏰' }, { name: 'Dragon Slayer Legend', icon: '🐉' },
      { name: 'Royal Knight Chronicles', icon: '⚔️' }, { name: 'Wizard Academy Secrets', icon: '🧙' }, { name: 'Shadow Ninja Mission', icon: '🥷' }, { name: 'Pirate Gold Rush', icon: '💰' }, { name: 'Ancient Temple Ruins', icon: '🏛️' },
      { name: 'Prison Break Adventure', icon: '🚪' }, { name: 'Haunted Mansion Mystery', icon: '👻' }, { name: 'Paranormal Detective', icon: '👻' }, { name: 'Time Travel Paradox', icon: '⏰' }, { name: 'Alien Planet Invasion', icon: '👽' },
      { name: 'Superhero Origins', icon: '🦸' }, { name: 'Secret Agent Mission', icon: '🕵️' }, { name: 'Jurassic Island Survival', icon: '🦕' }, { name: 'Magic Forest Adventure', icon: '🌳' }, { name: 'Atlantis Lost City', icon: '🏺' },
      { name: 'Robot Factory Escape', icon: '🤖' }, { name: 'Cyberpunk 2077 City', icon: '🏙️' }, { name: 'Viking Warrior Saga', icon: '⚡' }, { name: 'Samurai Honor Code', icon: '🗾' }, { name: 'Arctic Expedition Base', icon: '🐧' }
    ],
    casual: [
      { name: 'Fruit Ninja Master', icon: '🍎' }, { name: 'Flappy Bird Evolution', icon: '🐦' }, { name: 'Bouncy Ball Physics', icon: '🦘' }, { name: 'Endless Run Challenge', icon: '🏃' }, { name: 'Subway Surfer Pro', icon: '🚇' },
      { name: 'Sky Jump Adventure', icon: '🐦' }, { name: 'Cookie Clicker Deluxe', icon: '🍪' }, { name: 'Piano Tiles Master', icon: '🎹' }, { name: 'Geometry Dash Pro', icon: '📐' }, { name: 'Tower Stack Builder', icon: '📚' },
      { name: 'Gravity Ball Drop', icon: '⚽' }, { name: 'Color Switch Jump', icon: '🔄' }, { name: 'Spiral Tower Drop', icon: '🌀' }, { name: 'Sharp Shooter Pro', icon: '🔪' }, { name: 'Bottle Flip Master', icon: '🍾' },
      { name: 'Paper Plane Flight', icon: '✈️' }, { name: 'Bubble Pop Mania', icon: '🫧' }, { name: 'Rope Cut Physics', icon: '✂️' }, { name: 'Brick Breaker Pro', icon: '🧱' }, { name: 'Pinball Arcade', icon: '📌' },
      { name: 'Pac-Man Evolution', icon: '👻' }, { name: 'Frogger Road Cross', icon: '🐸' }, { name: 'Space Invaders Pro', icon: '👾' }, { name: 'Asteroid Dodge', icon: '☄️' }, { name: 'Bug Smash Game', icon: '🐛' },
      { name: 'Pong Classic', icon: '🏓' }, { name: 'Arkanoid Breakout', icon: '🏓' }, { name: 'Star Wars Fighter', icon: '🛸' }, { name: 'Shield Defense Pro', icon: '🛡️' }, { name: 'Cube Jump 3D', icon: '🎯' }
    ],
    creative: [
      { name: 'Digital Art Studio', icon: '✏️' }, { name: 'Music Beat Maker', icon: '🎵' }, { name: 'Interactive Story Creator', icon: '📖' }, { name: 'Animation Workshop', icon: '🎬' }, { name: 'Photo Editor Pro', icon: '📸' },
      { name: 'Logo Design Studio', icon: '🎨' }, { name: 'Card Game Creator', icon: '🃏' }, { name: 'Flag Designer Pro', icon: '🏳️' }, { name: 'Advertisement Maker', icon: '📰' }, { name: 'Comic Book Studio', icon: '📚' },
      { name: 'Pixel Art Creator', icon: '🟫' }, { name: 'Paint Master Studio', icon: '🖌️' }, { name: 'Web Design Builder', icon: '🔳' }, { name: 'Color Palette Studio', icon: '🎨' }, { name: 'Sketch Book Pro', icon: '📝' },
      { name: 'Video Production Suite', icon: '🎥' }, { name: 'Sound Laboratory', icon: '🎧' }, { name: 'Drum Beat Creator', icon: '🥁' }, { name: 'Melody Composer', icon: '🎶' }, { name: 'DJ Mix Master', icon: '🎧' },
      { name: 'Art Gallery Curator', icon: '🖼️' }, { name: 'Fashion Design Studio', icon: '👗' }, { name: 'Home Design Pro', icon: '🏠' }, { name: 'Garden Landscape Pro', icon: '🌻' }, { name: 'Architecture Designer', icon: '🏗️' },
      { name: '3D Sculpture Studio', icon: '🗿' }, { name: 'Pottery Workshop', icon: '🏺' }, { name: 'Jewelry Design Pro', icon: '💍' }, { name: 'Tattoo Art Studio', icon: '🎭' }, { name: 'Makeup Artist Pro', icon: '💄' }
    ],
    nature: [
      { name: 'Zen Garden Designer', icon: '🌺' }, { name: 'Forest Ecosystem Manager', icon: '🌲' }, { name: 'Ocean Research Station', icon: '🌊' }, { name: 'Mountain Peak Explorer', icon: '⛰️' }, { name: 'Desert Oasis Builder', icon: '🏜️' },
      { name: 'Rainforest Conservation', icon: '🌴' }, { name: 'Antarctic Research Base', icon: '🐧' }, { name: 'African Safari Guide', icon: '🦁' }, { name: 'Coral Reef Explorer', icon: '🐠' }, { name: 'Eagle Eye Observatory', icon: '🦅' },
      { name: 'Butterfly Garden Paradise', icon: '🦋' }, { name: 'Honey Bee Farm Manager', icon: '🐝' }, { name: 'Mushroom Forest Hunter', icon: '🍄' }, { name: 'Flower Power Garden', icon: '🌸' }, { name: 'Treehouse Builder Pro', icon: '🏠' },
      { name: 'Wildlife Protection Force', icon: '🦌' }, { name: 'Weather Station Pro', icon: '⛅' }, { name: 'Seasonal Cycle Manager', icon: '🔄' }, { name: 'Eco City Builder', icon: '🌍' }, { name: 'Planet Earth Guardian', icon: '🌍' },
      { name: 'Solar System Explorer', icon: '🪐' }, { name: 'Stellar Observatory', icon: '⭐' }, { name: 'Moon Base Alpha', icon: '🌙' }, { name: 'Volcano Research Station', icon: '🌋' }, { name: 'Earthquake Monitor Pro', icon: '🌍' },
      { name: 'Ocean Wave Tracker', icon: '🌊' }, { name: 'Storm Hunter Pro', icon: '🌀' }, { name: 'Tornado Chaser Elite', icon: '🌪️' }, { name: 'Lightning Strike Monitor', icon: '⚡' }, { name: 'Aurora Borealis Watch', icon: '🌌' }
    ]
  };
  
  Object.entries(gameData).forEach(([category, games]) => {
    games.forEach((game, index) => {
      allGames.push({
        id: `${category.charAt(0)}${index + 1}`,
        title: game.name,
        slug: game.name.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'),
        description: generateDetailedDescription(game.name, category),
        coverImage: getGameCoverPlaceholder(category, game.name),
        categories: [category],
        controls: generateGameControls(category),
        popularityScore: Math.floor(Math.random() * 1500) + 3500,
        status: 'published' as const,
        publishedAt: new Date(2024, 0, 30 - Math.floor(index / 2)).toISOString(),
        gameType: 'canvas' as const,
        gameCode: generateGameCode(category, game.name),
        icon: game.icon
      });
    });
  });
  
  return allGames;
};

// 生成所有游戏数据（180个游戏，每个分类30个）
export const games: Game[] = generateRealGames();

export const getGamesByCategory = (categorySlug: string): Game[] => {
  return games.filter(game => 
    game.categories.includes(categorySlug) && game.status === 'published'
  );
};

export const getFeaturedGames = (limit: number = 10): Game[] => {
  return games
    .filter(game => game.status === 'published')
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const getNewestGames = (limit: number = 12): Game[] => {
  return games
    .filter(game => game.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games
    .filter(game => 
      game.status === 'published' && (
        game.title.toLowerCase().includes(lowercaseQuery) ||
        game.description.toLowerCase().includes(lowercaseQuery) ||
        game.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
      )
    )
    .sort((a, b) => b.popularityScore - a.popularityScore);
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
}; 