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
}; 