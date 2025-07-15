<<<<<<< HEAD
<<<<<<< HEAD
// 游戏数据生成器
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

// 游戏模板数据
const gameTemplates = {
  puzzle: [
    { title: 'Thief Puzzle', description: 'Control a sneaky thief\'s hand', icon: '🦹‍♂️' },
    { title: 'Cubes 2048.io', description: 'Snake meets 2048', icon: '🔢' },
    { title: 'Block Puzzle Classic', description: 'Block fitting puzzle', icon: '🔲' },
    { title: 'Sudoku Master', description: 'Classic number puzzle', icon: '🔢' },
    { title: 'Tetris Classic', description: 'Falling block puzzle', icon: '🧱' },
    { title: 'Word Search Pro', description: 'Find hidden words', icon: '📝' },
    { title: 'Jigsaw Puzzle', description: 'Complete beautiful puzzles', icon: '🧩' },
    { title: 'Crystal Matcher', description: 'Match magical crystals', icon: '💎' },
    { title: 'Zen Blocks', description: 'Meditative block puzzle', icon: '🧘' },
    { title: 'Logic Squares', description: 'Mathematical logic puzzle', icon: '🔢' },
    { title: 'Shape Shifter', description: 'Transform shapes', icon: '🔄' },
    { title: 'Quantum Puzzle', description: 'Physics puzzle game', icon: '⚛️' },
    { title: 'Mirror Maze', description: 'Light reflection puzzle', icon: '🔍' },
    { title: 'Element Fusion', description: 'Chemistry puzzle', icon: '⚗️' },
    { title: 'Gravity Puzzle', description: 'Physics manipulation', icon: '🌍' },
    { title: 'Word Weaver', description: 'Creative word puzzle', icon: '📚' },
    { title: 'Circuit Builder', description: 'Electronics puzzle', icon: '⚡' },
    { title: 'Pattern Memory', description: 'Memory pattern game', icon: '🧠' },
    { title: 'Color Flow', description: 'Color connecting puzzle', icon: '🌈' },
    { title: 'Number Bridge', description: 'Number connection puzzle', icon: '🔢' },
    { title: 'Tile Master', description: 'Tile matching puzzle', icon: '🀄' },
    { title: 'Mind Bender', description: 'Brain training puzzle', icon: '🧠' },
    { title: 'Puzzle Quest', description: 'Adventure puzzle game', icon: '⚔️' },
    { title: 'Logic Grid', description: 'Deduction puzzle', icon: '📊' },
    { title: 'Brain Trainer', description: 'Cognitive training', icon: '🎯' }
  ],
  simulation: [
    { title: 'Box Simulator: Brawl Stars', description: 'Open Brawl Stars boxes', icon: '📦' },
    { title: 'Plague Inc. Pandemic', description: 'Infect the world simulation', icon: '🦠' },
    { title: 'City Car Driving', description: 'Realistic car driving', icon: '🚗' },
    { title: 'Farm Life Simulator', description: 'Manage your own farm', icon: '🚜' },
    { title: 'Flight Simulator', description: 'Pilot aircraft simulator', icon: '✈️' },
    { title: 'Business Tycoon', description: 'Build business empire', icon: '💼' },
    { title: 'Space Station Manager', description: 'Manage space station', icon: '🚀' },
    { title: 'Restaurant Empire', description: 'Run restaurant chain', icon: '🍽️' },
    { title: 'City Builder Pro', description: 'Build and manage cities', icon: '🏙️' },
    { title: 'Zoo Tycoon', description: 'Manage wildlife park', icon: '🦁' },
    { title: 'Hospital Manager', description: 'Run medical facility', icon: '🏥' },
    { title: 'Train Conductor', description: 'Operate railway system', icon: '🚂' },
    { title: 'Airport Manager', description: 'Manage busy airport', icon: '🛫' },
    { title: 'Ship Captain', description: 'Navigate the seas', icon: '⛵' },
    { title: 'Theme Park Builder', description: 'Create amusement parks', icon: '🎢' },
    { title: 'Mining Simulator', description: 'Extract precious resources', icon: '⛏️' },
    { title: 'Stock Market Sim', description: 'Trade in financial markets', icon: '📈' },
    { title: 'Fashion Designer', description: 'Create clothing lines', icon: '👗' },
    { title: 'Pet Care Center', description: 'Care for virtual pets', icon: '🐕' },
    { title: 'Weather Station', description: 'Forecast weather patterns', icon: '🌤️' },
    { title: 'Space Explorer', description: 'Explore galaxy simulator', icon: '🌌' },
    { title: 'Robot Factory', description: 'Build robot assembly line', icon: '🤖' },
    { title: 'Aquarium Manager', description: 'Manage underwater world', icon: '🐠' },
    { title: 'Sports Team Manager', description: 'Lead team to victory', icon: '⚽' },
    { title: 'Movie Studio Boss', description: 'Create blockbuster films', icon: '🎬' }
  ],
  adventure: [
    { title: 'Mystical Forest Quest', description: 'Magical forest journey', icon: '🌟' },
    { title: 'Treasure Island Explorer', description: 'Explore mysterious islands', icon: '🏴‍☠️' },
    { title: 'Ancient Temple Mystery', description: 'Explore ancient temples', icon: '🏛️' },
    { title: 'Lost Kingdom', description: 'Discover lost civilizations', icon: '🏰' },
    { title: 'Dragon Valley', description: 'Journey through dragon lands', icon: '🐉' },
    { title: 'Crystal Caverns', description: 'Explore underground caves', icon: '💎' },
    { title: 'Sky Islands', description: 'Floating island adventure', icon: '☁️' },
    { title: 'Ocean Depths', description: 'Underwater exploration', icon: '🌊' },
    { title: 'Desert Nomad', description: 'Cross vast desert landscapes', icon: '🐪' },
    { title: 'Mountain Peak', description: 'Climb towering mountains', icon: '🏔️' },
    { title: 'Enchanted Garden', description: 'Magical garden exploration', icon: '🌺' },
    { title: 'Starlight Journey', description: 'Travel among the stars', icon: '⭐' },
    { title: 'Rainbow Bridge', description: 'Cross colorful dimensions', icon: '🌈' },
    { title: 'Time Traveler', description: 'Journey through time', icon: '⏰' },
    { title: 'Magic Portal', description: 'Portal to other worlds', icon: '🌀' },
    { title: 'Fairy Tale Land', description: 'Classic fairy tale adventure', icon: '🧚' },
    { title: 'Pirate Adventure', description: 'Sail the seven seas', icon: '🏴‍☠️' },
    { title: 'Space Odyssey', description: 'Explore alien worlds', icon: '🛸' },
    { title: 'Jungle Explorer', description: 'Navigate dense jungles', icon: '🌴' },
    { title: 'Ice Kingdom', description: 'Frozen realm adventure', icon: '❄️' },
    { title: 'Cloud Walker', description: 'Walk among the clouds', icon: '☁️' },
    { title: 'Dream World', description: 'Adventure in dreamland', icon: '💭' },
    { title: 'Robot Companion', description: 'Journey with AI friend', icon: '🤖' },
    { title: 'Magic School', description: 'Learn magical arts', icon: '🎓' },
    { title: 'Wonder Land', description: 'Alice in Wonderland style', icon: '🎩' }
  ],
  casual: [
    { title: 'Bubble Shooter Deluxe', description: 'Classic bubble shooter', icon: '🫧' },
    { title: 'Color Match Zen', description: 'Relaxing color matching', icon: '🎨' },
    { title: 'Mindful Garden', description: 'Peaceful zen gardening', icon: '🌸' },
    { title: 'Starlight Meditation', description: 'Meditate under stars', icon: '⭐' },
    { title: 'Peaceful Puzzles', description: 'Calming jigsaw puzzles', icon: '🧩' },
    { title: 'Zen Stones', description: 'Balance stone stacks', icon: '🗿' },
    { title: 'Flower Garden', description: 'Grow beautiful flowers', icon: '🌻' },
    { title: 'Butterfly Collection', description: 'Collect colorful butterflies', icon: '🦋' },
    { title: 'Rain Sounds', description: 'Relaxing rain atmosphere', icon: '🌧️' },
    { title: 'Ocean Waves', description: 'Calming ocean sounds', icon: '🌊' },
    { title: 'Forest Sounds', description: 'Nature ambience game', icon: '🌲' },
    { title: 'Sunset Watching', description: 'Beautiful sunset scenes', icon: '🌅' },
    { title: 'Cloud Shapes', description: 'Find shapes in clouds', icon: '☁️' },
    { title: 'Pebble Skipping', description: 'Skip stones on water', icon: '🌊' },
    { title: 'Wind Chimes', description: 'Gentle wind chime sounds', icon: '🎐' },
    { title: 'Tea Time', description: 'Relaxing tea ceremony', icon: '🍵' },
    { title: 'Book Reading', description: 'Peaceful reading time', icon: '📚' },
    { title: 'Candle Light', description: 'Soothing candle ambience', icon: '🕯️' },
    { title: 'Morning Coffee', description: 'Start day with coffee', icon: '☕' },
    { title: 'Gentle Yoga', description: 'Relaxing yoga poses', icon: '🧘‍♀️' },
    { title: 'Sand Drawing', description: 'Draw patterns in sand', icon: '🏖️' },
    { title: 'Fireplace Warmth', description: 'Cozy fireplace setting', icon: '🔥' },
    { title: 'Snow Globe', description: 'Magical snow scenes', icon: '❄️' },
    { title: 'Paper Airplane', description: 'Fold and fly planes', icon: '✈️' },
    { title: 'Soap Bubbles', description: 'Pop colorful bubbles', icon: '🫧' }
  ],
  creative: [
    { title: 'Digital Art Studio', description: 'Comprehensive art tool', icon: '🎨' },
    { title: 'Music Composer Pro', description: 'Create beautiful melodies', icon: '🎵' },
    { title: 'Pixel Art Studio', description: 'Create pixel art', icon: '🎮' },
    { title: 'Story Creator', description: 'Write interactive stories', icon: '📖' },
    { title: 'Video Editor', description: 'Edit and create videos', icon: '🎬' },
    { title: 'Photo Filter Studio', description: 'Apply artistic filters', icon: '📸' },
    { title: 'Animation Maker', description: 'Create animations', icon: '🎞️' },
    { title: 'Poetry Generator', description: 'Write beautiful poems', icon: '📝' },
    { title: 'Comic Creator', description: 'Make comic strips', icon: '💭' },
    { title: 'Song Lyric Writer', description: 'Compose song lyrics', icon: '🎤' },
    { title: 'Fashion Designer', description: 'Design clothing styles', icon: '👗' },
    { title: 'Logo Maker', description: 'Create business logos', icon: '🏷️' },
    { title: 'Greeting Card Maker', description: 'Design custom cards', icon: '💌' },
    { title: 'Poster Creator', description: 'Make event posters', icon: '📢' },
    { title: 'Collage Maker', description: 'Create photo collages', icon: '🖼️' },
    { title: 'Banner Designer', description: 'Design web banners', icon: '📏' },
    { title: 'Texture Painter', description: 'Paint realistic textures', icon: '🖌️' },
    { title: 'Pattern Maker', description: 'Create repeating patterns', icon: '🔄' },
    { title: 'Color Palette', description: 'Explore color combinations', icon: '🌈' },
    { title: 'Typography Studio', description: 'Design with fonts', icon: '📰' },
    { title: 'Icon Designer', description: 'Create custom icons', icon: '⚡' },
    { title: 'Sticker Maker', description: 'Design fun stickers', icon: '😊' },
    { title: 'Wallpaper Creator', description: 'Make device wallpapers', icon: '🖥️' },
    { title: 'Emblem Builder', description: 'Create team emblems', icon: '🛡️' },
    { title: 'Art Gallery', description: 'Showcase your creations', icon: '🏛️' }
  ],
  nature: [
    { title: 'Virtual Garden Simulator', description: 'Grow virtual plants', icon: '🌱' },
    { title: 'Forest Life Explorer', description: 'Explore forest ecosystems', icon: '🦌' },
    { title: 'Ecosystem Builder', description: 'Build natural ecosystems', icon: '🌍' },
    { title: 'Weather Patterns', description: 'Learn about weather', icon: '🌦️' },
    { title: 'Ocean Life Discovery', description: 'Explore marine life', icon: '🐠' },
    { title: 'Bird Watching', description: 'Observe and identify birds', icon: '🦅' },
    { title: 'Butterfly Garden', description: 'Attract colorful butterflies', icon: '🦋' },
    { title: 'Coral Reef Explorer', description: 'Discover underwater reefs', icon: '🪸' },
    { title: 'Mountain Wildlife', description: 'Explore mountain animals', icon: '🏔️' },
    { title: 'Desert Survival', description: 'Learn desert adaptation', icon: '🌵' },
    { title: 'Rainforest Journey', description: 'Explore tropical rainforest', icon: '🌳' },
    { title: 'Arctic Explorer', description: 'Discover polar regions', icon: '🐧' },
    { title: 'River Ecosystem', description: 'Study freshwater life', icon: '🏞️' },
    { title: 'Insect Safari', description: 'Discover tiny creatures', icon: '🐛' },
    { title: 'Star Gazing', description: 'Explore night sky', icon: '🌌' },
    { title: 'Seasonal Changes', description: 'Watch nature transform', icon: '🍂' },
    { title: 'Plant Life Cycle', description: 'Learn plant growth', icon: '🌿' },
    { title: 'Animal Migration', description: 'Follow animal journeys', icon: '🦆' },
    { title: 'Volcano Explorer', description: 'Study volcanic activity', icon: '🌋' },
    { title: 'Cave Explorer', description: 'Explore underground caves', icon: '🕳️' },
    { title: 'Tree House Builder', description: 'Build in the canopy', icon: '🌳' },
    { title: 'Pollinator Garden', description: 'Help bees and butterflies', icon: '🐝' },
    { title: 'Mushroom Hunter', description: 'Find forest mushrooms', icon: '🍄' },
    { title: 'Nature Photographer', description: 'Capture wildlife photos', icon: '📷' },
    { title: 'Sunset Safari', description: 'Evening wildlife watching', icon: '🌅' }
  ]
};

export const generateGames = (): Game[] => {
  const games: Game[] = [];
  const categories = Object.keys(gameTemplates) as (keyof typeof gameTemplates)[];
  
  categories.forEach((category, categoryIndex) => {
    const templates = gameTemplates[category];
    
    templates.forEach((template, index) => {
      const id = `${category.charAt(0)}${index + 1}`;
      const slug = template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const popularityScore = Math.floor(Math.random() * 3000) + 2000;
      const publishDate = new Date(2024, 0, 20 - index).toISOString();
      
      games.push({
        id,
        title: template.title,
        slug,
        description: template.description,
        coverImage: getGameCoverPlaceholder(category, template.title),
        categories: [category],
        controls: 'Mouse and keyboard',
        popularityScore,
        status: 'published' as const,
        publishedAt: publishDate,
        iframeCode: `<iframe src="https://scratch.mit.edu/projects/${Math.floor(Math.random() * 900000000) + 100000000}/embed" width="100%" height="100%" frameborder="0"></iframe>`,
        icon: template.icon
      });
    });
  });
  
  return games;
=======
// 游戏数据生成器
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

// 游戏模板数据
const gameTemplates = {
  puzzle: [
    { title: 'Thief Puzzle', description: 'Control a sneaky thief\'s hand', icon: '🦹‍♂️' },
    { title: 'Cubes 2048.io', description: 'Snake meets 2048', icon: '🔢' },
    { title: 'Block Puzzle Classic', description: 'Block fitting puzzle', icon: '🔲' },
    { title: 'Sudoku Master', description: 'Classic number puzzle', icon: '🔢' },
    { title: 'Tetris Classic', description: 'Falling block puzzle', icon: '🧱' },
    { title: 'Word Search Pro', description: 'Find hidden words', icon: '📝' },
    { title: 'Jigsaw Puzzle', description: 'Complete beautiful puzzles', icon: '🧩' },
    { title: 'Crystal Matcher', description: 'Match magical crystals', icon: '💎' },
    { title: 'Zen Blocks', description: 'Meditative block puzzle', icon: '🧘' },
    { title: 'Logic Squares', description: 'Mathematical logic puzzle', icon: '🔢' },
    { title: 'Shape Shifter', description: 'Transform shapes', icon: '🔄' },
    { title: 'Quantum Puzzle', description: 'Physics puzzle game', icon: '⚛️' },
    { title: 'Mirror Maze', description: 'Light reflection puzzle', icon: '🔍' },
    { title: 'Element Fusion', description: 'Chemistry puzzle', icon: '⚗️' },
    { title: 'Gravity Puzzle', description: 'Physics manipulation', icon: '🌍' },
    { title: 'Word Weaver', description: 'Creative word puzzle', icon: '📚' },
    { title: 'Circuit Builder', description: 'Electronics puzzle', icon: '⚡' },
    { title: 'Pattern Memory', description: 'Memory pattern game', icon: '🧠' },
    { title: 'Color Flow', description: 'Color connecting puzzle', icon: '🌈' },
    { title: 'Number Bridge', description: 'Number connection puzzle', icon: '🔢' },
    { title: 'Tile Master', description: 'Tile matching puzzle', icon: '🀄' },
    { title: 'Mind Bender', description: 'Brain training puzzle', icon: '🧠' },
    { title: 'Puzzle Quest', description: 'Adventure puzzle game', icon: '⚔️' },
    { title: 'Logic Grid', description: 'Deduction puzzle', icon: '📊' },
    { title: 'Brain Trainer', description: 'Cognitive training', icon: '🎯' }
  ],
  simulation: [
    { title: 'Box Simulator: Brawl Stars', description: 'Open Brawl Stars boxes', icon: '📦' },
    { title: 'Plague Inc. Pandemic', description: 'Infect the world simulation', icon: '🦠' },
    { title: 'City Car Driving', description: 'Realistic car driving', icon: '🚗' },
    { title: 'Farm Life Simulator', description: 'Manage your own farm', icon: '🚜' },
    { title: 'Flight Simulator', description: 'Pilot aircraft simulator', icon: '✈️' },
    { title: 'Business Tycoon', description: 'Build business empire', icon: '💼' },
    { title: 'Space Station Manager', description: 'Manage space station', icon: '🚀' },
    { title: 'Restaurant Empire', description: 'Run restaurant chain', icon: '🍽️' },
    { title: 'City Builder Pro', description: 'Build and manage cities', icon: '🏙️' },
    { title: 'Zoo Tycoon', description: 'Manage wildlife park', icon: '🦁' },
    { title: 'Hospital Manager', description: 'Run medical facility', icon: '🏥' },
    { title: 'Train Conductor', description: 'Operate railway system', icon: '🚂' },
    { title: 'Airport Manager', description: 'Manage busy airport', icon: '🛫' },
    { title: 'Ship Captain', description: 'Navigate the seas', icon: '⛵' },
    { title: 'Theme Park Builder', description: 'Create amusement parks', icon: '🎢' },
    { title: 'Mining Simulator', description: 'Extract precious resources', icon: '⛏️' },
    { title: 'Stock Market Sim', description: 'Trade in financial markets', icon: '📈' },
    { title: 'Fashion Designer', description: 'Create clothing lines', icon: '👗' },
    { title: 'Pet Care Center', description: 'Care for virtual pets', icon: '🐕' },
    { title: 'Weather Station', description: 'Forecast weather patterns', icon: '🌤️' },
    { title: 'Space Explorer', description: 'Explore galaxy simulator', icon: '🌌' },
    { title: 'Robot Factory', description: 'Build robot assembly line', icon: '🤖' },
    { title: 'Aquarium Manager', description: 'Manage underwater world', icon: '🐠' },
    { title: 'Sports Team Manager', description: 'Lead team to victory', icon: '⚽' },
    { title: 'Movie Studio Boss', description: 'Create blockbuster films', icon: '🎬' }
  ],
  adventure: [
    { title: 'Mystical Forest Quest', description: 'Magical forest journey', icon: '🌟' },
    { title: 'Treasure Island Explorer', description: 'Explore mysterious islands', icon: '🏴‍☠️' },
    { title: 'Ancient Temple Mystery', description: 'Explore ancient temples', icon: '🏛️' },
    { title: 'Lost Kingdom', description: 'Discover lost civilizations', icon: '🏰' },
    { title: 'Dragon Valley', description: 'Journey through dragon lands', icon: '🐉' },
    { title: 'Crystal Caverns', description: 'Explore underground caves', icon: '💎' },
    { title: 'Sky Islands', description: 'Floating island adventure', icon: '☁️' },
    { title: 'Ocean Depths', description: 'Underwater exploration', icon: '🌊' },
    { title: 'Desert Nomad', description: 'Cross vast desert landscapes', icon: '🐪' },
    { title: 'Mountain Peak', description: 'Climb towering mountains', icon: '🏔️' },
    { title: 'Enchanted Garden', description: 'Magical garden exploration', icon: '🌺' },
    { title: 'Starlight Journey', description: 'Travel among the stars', icon: '⭐' },
    { title: 'Rainbow Bridge', description: 'Cross colorful dimensions', icon: '🌈' },
    { title: 'Time Traveler', description: 'Journey through time', icon: '⏰' },
    { title: 'Magic Portal', description: 'Portal to other worlds', icon: '🌀' },
    { title: 'Fairy Tale Land', description: 'Classic fairy tale adventure', icon: '🧚' },
    { title: 'Pirate Adventure', description: 'Sail the seven seas', icon: '🏴‍☠️' },
    { title: 'Space Odyssey', description: 'Explore alien worlds', icon: '🛸' },
    { title: 'Jungle Explorer', description: 'Navigate dense jungles', icon: '🌴' },
    { title: 'Ice Kingdom', description: 'Frozen realm adventure', icon: '❄️' },
    { title: 'Cloud Walker', description: 'Walk among the clouds', icon: '☁️' },
    { title: 'Dream World', description: 'Adventure in dreamland', icon: '💭' },
    { title: 'Robot Companion', description: 'Journey with AI friend', icon: '🤖' },
    { title: 'Magic School', description: 'Learn magical arts', icon: '🎓' },
    { title: 'Wonder Land', description: 'Alice in Wonderland style', icon: '🎩' }
  ],
  casual: [
    { title: 'Bubble Shooter Deluxe', description: 'Classic bubble shooter', icon: '🫧' },
    { title: 'Color Match Zen', description: 'Relaxing color matching', icon: '🎨' },
    { title: 'Mindful Garden', description: 'Peaceful zen gardening', icon: '🌸' },
    { title: 'Starlight Meditation', description: 'Meditate under stars', icon: '⭐' },
    { title: 'Peaceful Puzzles', description: 'Calming jigsaw puzzles', icon: '🧩' },
    { title: 'Zen Stones', description: 'Balance stone stacks', icon: '🗿' },
    { title: 'Flower Garden', description: 'Grow beautiful flowers', icon: '🌻' },
    { title: 'Butterfly Collection', description: 'Collect colorful butterflies', icon: '🦋' },
    { title: 'Rain Sounds', description: 'Relaxing rain atmosphere', icon: '🌧️' },
    { title: 'Ocean Waves', description: 'Calming ocean sounds', icon: '🌊' },
    { title: 'Forest Sounds', description: 'Nature ambience game', icon: '🌲' },
    { title: 'Sunset Watching', description: 'Beautiful sunset scenes', icon: '🌅' },
    { title: 'Cloud Shapes', description: 'Find shapes in clouds', icon: '☁️' },
    { title: 'Pebble Skipping', description: 'Skip stones on water', icon: '🌊' },
    { title: 'Wind Chimes', description: 'Gentle wind chime sounds', icon: '🎐' },
    { title: 'Tea Time', description: 'Relaxing tea ceremony', icon: '🍵' },
    { title: 'Book Reading', description: 'Peaceful reading time', icon: '📚' },
    { title: 'Candle Light', description: 'Soothing candle ambience', icon: '🕯️' },
    { title: 'Morning Coffee', description: 'Start day with coffee', icon: '☕' },
    { title: 'Gentle Yoga', description: 'Relaxing yoga poses', icon: '🧘‍♀️' },
    { title: 'Sand Drawing', description: 'Draw patterns in sand', icon: '🏖️' },
    { title: 'Fireplace Warmth', description: 'Cozy fireplace setting', icon: '🔥' },
    { title: 'Snow Globe', description: 'Magical snow scenes', icon: '❄️' },
    { title: 'Paper Airplane', description: 'Fold and fly planes', icon: '✈️' },
    { title: 'Soap Bubbles', description: 'Pop colorful bubbles', icon: '🫧' }
  ],
  creative: [
    { title: 'Digital Art Studio', description: 'Comprehensive art tool', icon: '🎨' },
    { title: 'Music Composer Pro', description: 'Create beautiful melodies', icon: '🎵' },
    { title: 'Pixel Art Studio', description: 'Create pixel art', icon: '🎮' },
    { title: 'Story Creator', description: 'Write interactive stories', icon: '📖' },
    { title: 'Video Editor', description: 'Edit and create videos', icon: '🎬' },
    { title: 'Photo Filter Studio', description: 'Apply artistic filters', icon: '📸' },
    { title: 'Animation Maker', description: 'Create animations', icon: '🎞️' },
    { title: 'Poetry Generator', description: 'Write beautiful poems', icon: '📝' },
    { title: 'Comic Creator', description: 'Make comic strips', icon: '💭' },
    { title: 'Song Lyric Writer', description: 'Compose song lyrics', icon: '🎤' },
    { title: 'Fashion Designer', description: 'Design clothing styles', icon: '👗' },
    { title: 'Logo Maker', description: 'Create business logos', icon: '🏷️' },
    { title: 'Greeting Card Maker', description: 'Design custom cards', icon: '💌' },
    { title: 'Poster Creator', description: 'Make event posters', icon: '📢' },
    { title: 'Collage Maker', description: 'Create photo collages', icon: '🖼️' },
    { title: 'Banner Designer', description: 'Design web banners', icon: '📏' },
    { title: 'Texture Painter', description: 'Paint realistic textures', icon: '🖌️' },
    { title: 'Pattern Maker', description: 'Create repeating patterns', icon: '🔄' },
    { title: 'Color Palette', description: 'Explore color combinations', icon: '🌈' },
    { title: 'Typography Studio', description: 'Design with fonts', icon: '📰' },
    { title: 'Icon Designer', description: 'Create custom icons', icon: '⚡' },
    { title: 'Sticker Maker', description: 'Design fun stickers', icon: '😊' },
    { title: 'Wallpaper Creator', description: 'Make device wallpapers', icon: '🖥️' },
    { title: 'Emblem Builder', description: 'Create team emblems', icon: '🛡️' },
    { title: 'Art Gallery', description: 'Showcase your creations', icon: '🏛️' }
  ],
  nature: [
    { title: 'Virtual Garden Simulator', description: 'Grow virtual plants', icon: '🌱' },
    { title: 'Forest Life Explorer', description: 'Explore forest ecosystems', icon: '🦌' },
    { title: 'Ecosystem Builder', description: 'Build natural ecosystems', icon: '🌍' },
    { title: 'Weather Patterns', description: 'Learn about weather', icon: '🌦️' },
    { title: 'Ocean Life Discovery', description: 'Explore marine life', icon: '🐠' },
    { title: 'Bird Watching', description: 'Observe and identify birds', icon: '🦅' },
    { title: 'Butterfly Garden', description: 'Attract colorful butterflies', icon: '🦋' },
    { title: 'Coral Reef Explorer', description: 'Discover underwater reefs', icon: '🪸' },
    { title: 'Mountain Wildlife', description: 'Explore mountain animals', icon: '🏔️' },
    { title: 'Desert Survival', description: 'Learn desert adaptation', icon: '🌵' },
    { title: 'Rainforest Journey', description: 'Explore tropical rainforest', icon: '🌳' },
    { title: 'Arctic Explorer', description: 'Discover polar regions', icon: '🐧' },
    { title: 'River Ecosystem', description: 'Study freshwater life', icon: '🏞️' },
    { title: 'Insect Safari', description: 'Discover tiny creatures', icon: '🐛' },
    { title: 'Star Gazing', description: 'Explore night sky', icon: '🌌' },
    { title: 'Seasonal Changes', description: 'Watch nature transform', icon: '🍂' },
    { title: 'Plant Life Cycle', description: 'Learn plant growth', icon: '🌿' },
    { title: 'Animal Migration', description: 'Follow animal journeys', icon: '🦆' },
    { title: 'Volcano Explorer', description: 'Study volcanic activity', icon: '🌋' },
    { title: 'Cave Explorer', description: 'Explore underground caves', icon: '🕳️' },
    { title: 'Tree House Builder', description: 'Build in the canopy', icon: '🌳' },
    { title: 'Pollinator Garden', description: 'Help bees and butterflies', icon: '🐝' },
    { title: 'Mushroom Hunter', description: 'Find forest mushrooms', icon: '🍄' },
    { title: 'Nature Photographer', description: 'Capture wildlife photos', icon: '📷' },
    { title: 'Sunset Safari', description: 'Evening wildlife watching', icon: '🌅' }
  ]
};

export const generateGames = (): Game[] => {
  const games: Game[] = [];
  const categories = Object.keys(gameTemplates) as (keyof typeof gameTemplates)[];
  
  categories.forEach((category, categoryIndex) => {
    const templates = gameTemplates[category];
    
    templates.forEach((template, index) => {
      const id = `${category.charAt(0)}${index + 1}`;
      const slug = template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const popularityScore = Math.floor(Math.random() * 3000) + 2000;
      const publishDate = new Date(2024, 0, 20 - index).toISOString();
      
      games.push({
        id,
        title: template.title,
        slug,
        description: template.description,
        coverImage: getGameCoverPlaceholder(category, template.title),
        categories: [category],
        controls: 'Mouse and keyboard',
        popularityScore,
        status: 'published' as const,
        publishedAt: publishDate,
        iframeCode: `<iframe src="https://scratch.mit.edu/projects/${Math.floor(Math.random() * 900000000) + 100000000}/embed" width="100%" height="100%" frameborder="0"></iframe>`,
        icon: template.icon
      });
    });
  });
  
  return games;
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
// 游戏数据生成器
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

// 游戏模板数据
const gameTemplates = {
  puzzle: [
    { title: 'Thief Puzzle', description: 'Control a sneaky thief\'s hand', icon: '🦹‍♂️' },
    { title: 'Cubes 2048.io', description: 'Snake meets 2048', icon: '🔢' },
    { title: 'Block Puzzle Classic', description: 'Block fitting puzzle', icon: '🔲' },
    { title: 'Sudoku Master', description: 'Classic number puzzle', icon: '🔢' },
    { title: 'Tetris Classic', description: 'Falling block puzzle', icon: '🧱' },
    { title: 'Word Search Pro', description: 'Find hidden words', icon: '📝' },
    { title: 'Jigsaw Puzzle', description: 'Complete beautiful puzzles', icon: '🧩' },
    { title: 'Crystal Matcher', description: 'Match magical crystals', icon: '💎' },
    { title: 'Zen Blocks', description: 'Meditative block puzzle', icon: '🧘' },
    { title: 'Logic Squares', description: 'Mathematical logic puzzle', icon: '🔢' },
    { title: 'Shape Shifter', description: 'Transform shapes', icon: '🔄' },
    { title: 'Quantum Puzzle', description: 'Physics puzzle game', icon: '⚛️' },
    { title: 'Mirror Maze', description: 'Light reflection puzzle', icon: '🔍' },
    { title: 'Element Fusion', description: 'Chemistry puzzle', icon: '⚗️' },
    { title: 'Gravity Puzzle', description: 'Physics manipulation', icon: '🌍' },
    { title: 'Word Weaver', description: 'Creative word puzzle', icon: '📚' },
    { title: 'Circuit Builder', description: 'Electronics puzzle', icon: '⚡' },
    { title: 'Pattern Memory', description: 'Memory pattern game', icon: '🧠' },
    { title: 'Color Flow', description: 'Color connecting puzzle', icon: '🌈' },
    { title: 'Number Bridge', description: 'Number connection puzzle', icon: '🔢' },
    { title: 'Tile Master', description: 'Tile matching puzzle', icon: '🀄' },
    { title: 'Mind Bender', description: 'Brain training puzzle', icon: '🧠' },
    { title: 'Puzzle Quest', description: 'Adventure puzzle game', icon: '⚔️' },
    { title: 'Logic Grid', description: 'Deduction puzzle', icon: '📊' },
    { title: 'Brain Trainer', description: 'Cognitive training', icon: '🎯' }
  ],
  simulation: [
    { title: 'Box Simulator: Brawl Stars', description: 'Open Brawl Stars boxes', icon: '📦' },
    { title: 'Plague Inc. Pandemic', description: 'Infect the world simulation', icon: '🦠' },
    { title: 'City Car Driving', description: 'Realistic car driving', icon: '🚗' },
    { title: 'Farm Life Simulator', description: 'Manage your own farm', icon: '🚜' },
    { title: 'Flight Simulator', description: 'Pilot aircraft simulator', icon: '✈️' },
    { title: 'Business Tycoon', description: 'Build business empire', icon: '💼' },
    { title: 'Space Station Manager', description: 'Manage space station', icon: '🚀' },
    { title: 'Restaurant Empire', description: 'Run restaurant chain', icon: '🍽️' },
    { title: 'City Builder Pro', description: 'Build and manage cities', icon: '🏙️' },
    { title: 'Zoo Tycoon', description: 'Manage wildlife park', icon: '🦁' },
    { title: 'Hospital Manager', description: 'Run medical facility', icon: '🏥' },
    { title: 'Train Conductor', description: 'Operate railway system', icon: '🚂' },
    { title: 'Airport Manager', description: 'Manage busy airport', icon: '🛫' },
    { title: 'Ship Captain', description: 'Navigate the seas', icon: '⛵' },
    { title: 'Theme Park Builder', description: 'Create amusement parks', icon: '🎢' },
    { title: 'Mining Simulator', description: 'Extract precious resources', icon: '⛏️' },
    { title: 'Stock Market Sim', description: 'Trade in financial markets', icon: '📈' },
    { title: 'Fashion Designer', description: 'Create clothing lines', icon: '👗' },
    { title: 'Pet Care Center', description: 'Care for virtual pets', icon: '🐕' },
    { title: 'Weather Station', description: 'Forecast weather patterns', icon: '🌤️' },
    { title: 'Space Explorer', description: 'Explore galaxy simulator', icon: '🌌' },
    { title: 'Robot Factory', description: 'Build robot assembly line', icon: '🤖' },
    { title: 'Aquarium Manager', description: 'Manage underwater world', icon: '🐠' },
    { title: 'Sports Team Manager', description: 'Lead team to victory', icon: '⚽' },
    { title: 'Movie Studio Boss', description: 'Create blockbuster films', icon: '🎬' }
  ],
  adventure: [
    { title: 'Mystical Forest Quest', description: 'Magical forest journey', icon: '🌟' },
    { title: 'Treasure Island Explorer', description: 'Explore mysterious islands', icon: '🏴‍☠️' },
    { title: 'Ancient Temple Mystery', description: 'Explore ancient temples', icon: '🏛️' },
    { title: 'Lost Kingdom', description: 'Discover lost civilizations', icon: '🏰' },
    { title: 'Dragon Valley', description: 'Journey through dragon lands', icon: '🐉' },
    { title: 'Crystal Caverns', description: 'Explore underground caves', icon: '💎' },
    { title: 'Sky Islands', description: 'Floating island adventure', icon: '☁️' },
    { title: 'Ocean Depths', description: 'Underwater exploration', icon: '🌊' },
    { title: 'Desert Nomad', description: 'Cross vast desert landscapes', icon: '🐪' },
    { title: 'Mountain Peak', description: 'Climb towering mountains', icon: '🏔️' },
    { title: 'Enchanted Garden', description: 'Magical garden exploration', icon: '🌺' },
    { title: 'Starlight Journey', description: 'Travel among the stars', icon: '⭐' },
    { title: 'Rainbow Bridge', description: 'Cross colorful dimensions', icon: '🌈' },
    { title: 'Time Traveler', description: 'Journey through time', icon: '⏰' },
    { title: 'Magic Portal', description: 'Portal to other worlds', icon: '🌀' },
    { title: 'Fairy Tale Land', description: 'Classic fairy tale adventure', icon: '🧚' },
    { title: 'Pirate Adventure', description: 'Sail the seven seas', icon: '🏴‍☠️' },
    { title: 'Space Odyssey', description: 'Explore alien worlds', icon: '🛸' },
    { title: 'Jungle Explorer', description: 'Navigate dense jungles', icon: '🌴' },
    { title: 'Ice Kingdom', description: 'Frozen realm adventure', icon: '❄️' },
    { title: 'Cloud Walker', description: 'Walk among the clouds', icon: '☁️' },
    { title: 'Dream World', description: 'Adventure in dreamland', icon: '💭' },
    { title: 'Robot Companion', description: 'Journey with AI friend', icon: '🤖' },
    { title: 'Magic School', description: 'Learn magical arts', icon: '🎓' },
    { title: 'Wonder Land', description: 'Alice in Wonderland style', icon: '🎩' }
  ],
  casual: [
    { title: 'Bubble Shooter Deluxe', description: 'Classic bubble shooter', icon: '🫧' },
    { title: 'Color Match Zen', description: 'Relaxing color matching', icon: '🎨' },
    { title: 'Mindful Garden', description: 'Peaceful zen gardening', icon: '🌸' },
    { title: 'Starlight Meditation', description: 'Meditate under stars', icon: '⭐' },
    { title: 'Peaceful Puzzles', description: 'Calming jigsaw puzzles', icon: '🧩' },
    { title: 'Zen Stones', description: 'Balance stone stacks', icon: '🗿' },
    { title: 'Flower Garden', description: 'Grow beautiful flowers', icon: '🌻' },
    { title: 'Butterfly Collection', description: 'Collect colorful butterflies', icon: '🦋' },
    { title: 'Rain Sounds', description: 'Relaxing rain atmosphere', icon: '🌧️' },
    { title: 'Ocean Waves', description: 'Calming ocean sounds', icon: '🌊' },
    { title: 'Forest Sounds', description: 'Nature ambience game', icon: '🌲' },
    { title: 'Sunset Watching', description: 'Beautiful sunset scenes', icon: '🌅' },
    { title: 'Cloud Shapes', description: 'Find shapes in clouds', icon: '☁️' },
    { title: 'Pebble Skipping', description: 'Skip stones on water', icon: '🌊' },
    { title: 'Wind Chimes', description: 'Gentle wind chime sounds', icon: '🎐' },
    { title: 'Tea Time', description: 'Relaxing tea ceremony', icon: '🍵' },
    { title: 'Book Reading', description: 'Peaceful reading time', icon: '📚' },
    { title: 'Candle Light', description: 'Soothing candle ambience', icon: '🕯️' },
    { title: 'Morning Coffee', description: 'Start day with coffee', icon: '☕' },
    { title: 'Gentle Yoga', description: 'Relaxing yoga poses', icon: '🧘‍♀️' },
    { title: 'Sand Drawing', description: 'Draw patterns in sand', icon: '🏖️' },
    { title: 'Fireplace Warmth', description: 'Cozy fireplace setting', icon: '🔥' },
    { title: 'Snow Globe', description: 'Magical snow scenes', icon: '❄️' },
    { title: 'Paper Airplane', description: 'Fold and fly planes', icon: '✈️' },
    { title: 'Soap Bubbles', description: 'Pop colorful bubbles', icon: '🫧' }
  ],
  creative: [
    { title: 'Digital Art Studio', description: 'Comprehensive art tool', icon: '🎨' },
    { title: 'Music Composer Pro', description: 'Create beautiful melodies', icon: '🎵' },
    { title: 'Pixel Art Studio', description: 'Create pixel art', icon: '🎮' },
    { title: 'Story Creator', description: 'Write interactive stories', icon: '📖' },
    { title: 'Video Editor', description: 'Edit and create videos', icon: '🎬' },
    { title: 'Photo Filter Studio', description: 'Apply artistic filters', icon: '📸' },
    { title: 'Animation Maker', description: 'Create animations', icon: '🎞️' },
    { title: 'Poetry Generator', description: 'Write beautiful poems', icon: '📝' },
    { title: 'Comic Creator', description: 'Make comic strips', icon: '💭' },
    { title: 'Song Lyric Writer', description: 'Compose song lyrics', icon: '🎤' },
    { title: 'Fashion Designer', description: 'Design clothing styles', icon: '👗' },
    { title: 'Logo Maker', description: 'Create business logos', icon: '🏷️' },
    { title: 'Greeting Card Maker', description: 'Design custom cards', icon: '💌' },
    { title: 'Poster Creator', description: 'Make event posters', icon: '📢' },
    { title: 'Collage Maker', description: 'Create photo collages', icon: '🖼️' },
    { title: 'Banner Designer', description: 'Design web banners', icon: '📏' },
    { title: 'Texture Painter', description: 'Paint realistic textures', icon: '🖌️' },
    { title: 'Pattern Maker', description: 'Create repeating patterns', icon: '🔄' },
    { title: 'Color Palette', description: 'Explore color combinations', icon: '🌈' },
    { title: 'Typography Studio', description: 'Design with fonts', icon: '📰' },
    { title: 'Icon Designer', description: 'Create custom icons', icon: '⚡' },
    { title: 'Sticker Maker', description: 'Design fun stickers', icon: '😊' },
    { title: 'Wallpaper Creator', description: 'Make device wallpapers', icon: '🖥️' },
    { title: 'Emblem Builder', description: 'Create team emblems', icon: '🛡️' },
    { title: 'Art Gallery', description: 'Showcase your creations', icon: '🏛️' }
  ],
  nature: [
    { title: 'Virtual Garden Simulator', description: 'Grow virtual plants', icon: '🌱' },
    { title: 'Forest Life Explorer', description: 'Explore forest ecosystems', icon: '🦌' },
    { title: 'Ecosystem Builder', description: 'Build natural ecosystems', icon: '🌍' },
    { title: 'Weather Patterns', description: 'Learn about weather', icon: '🌦️' },
    { title: 'Ocean Life Discovery', description: 'Explore marine life', icon: '🐠' },
    { title: 'Bird Watching', description: 'Observe and identify birds', icon: '🦅' },
    { title: 'Butterfly Garden', description: 'Attract colorful butterflies', icon: '🦋' },
    { title: 'Coral Reef Explorer', description: 'Discover underwater reefs', icon: '🪸' },
    { title: 'Mountain Wildlife', description: 'Explore mountain animals', icon: '🏔️' },
    { title: 'Desert Survival', description: 'Learn desert adaptation', icon: '🌵' },
    { title: 'Rainforest Journey', description: 'Explore tropical rainforest', icon: '🌳' },
    { title: 'Arctic Explorer', description: 'Discover polar regions', icon: '🐧' },
    { title: 'River Ecosystem', description: 'Study freshwater life', icon: '🏞️' },
    { title: 'Insect Safari', description: 'Discover tiny creatures', icon: '🐛' },
    { title: 'Star Gazing', description: 'Explore night sky', icon: '🌌' },
    { title: 'Seasonal Changes', description: 'Watch nature transform', icon: '🍂' },
    { title: 'Plant Life Cycle', description: 'Learn plant growth', icon: '🌿' },
    { title: 'Animal Migration', description: 'Follow animal journeys', icon: '🦆' },
    { title: 'Volcano Explorer', description: 'Study volcanic activity', icon: '🌋' },
    { title: 'Cave Explorer', description: 'Explore underground caves', icon: '🕳️' },
    { title: 'Tree House Builder', description: 'Build in the canopy', icon: '🌳' },
    { title: 'Pollinator Garden', description: 'Help bees and butterflies', icon: '🐝' },
    { title: 'Mushroom Hunter', description: 'Find forest mushrooms', icon: '🍄' },
    { title: 'Nature Photographer', description: 'Capture wildlife photos', icon: '📷' },
    { title: 'Sunset Safari', description: 'Evening wildlife watching', icon: '🌅' }
  ]
};

export const generateGames = (): Game[] => {
  const games: Game[] = [];
  const categories = Object.keys(gameTemplates) as (keyof typeof gameTemplates)[];
  
  categories.forEach((category, categoryIndex) => {
    const templates = gameTemplates[category];
    
    templates.forEach((template, index) => {
      const id = `${category.charAt(0)}${index + 1}`;
      const slug = template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const popularityScore = Math.floor(Math.random() * 3000) + 2000;
      const publishDate = new Date(2024, 0, 20 - index).toISOString();
      
      games.push({
        id,
        title: template.title,
        slug,
        description: template.description,
        coverImage: getGameCoverPlaceholder(category, template.title),
        categories: [category],
        controls: 'Mouse and keyboard',
        popularityScore,
        status: 'published' as const,
        publishedAt: publishDate,
        iframeCode: `<iframe src="https://scratch.mit.edu/projects/${Math.floor(Math.random() * 900000000) + 100000000}/embed" width="100%" height="100%" frameborder="0"></iframe>`,
        icon: template.icon
      });
    });
  });
  
  return games;
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
}; 