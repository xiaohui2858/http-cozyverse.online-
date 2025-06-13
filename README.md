# Cozyverse Gaming Platform

A modern, cozy gaming platform built with React, TypeScript, and Vite. Features relaxing puzzle games, simulations, adventures, and more in a beautiful, user-friendly interface.

## 🎮 Features

- **6 Game Categories**: Puzzle, Simulation, Adventure, Casual, Creative, and Nature games
- **20+ Playable Games**: Including 2048, Sudoku, Tetris, Bubble Shooter, Snake, and more
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Search & Filter**: Find games by category or search by name
- **Game Statistics**: Track popularity scores and play counts
- **Admin Dashboard**: Manage games and view analytics
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🚀 Live Demo

Visit: [http://cozyverse.online](http://cozyverse.online)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/xiaohui2858/http-cozyverse.online-.git
cd http-cozyverse.online-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎯 Available Games

### 🧩 Puzzle Games
- 2048 Number Puzzle Game
- Sudoku Brain Training
- Tetris Block Puzzle Classic
- Crossword Puzzle Daily
- Bubble Shooter Classic

### 🏠 Simulation Games
- Virtual Farm Life Simulator
- Cozy Coffee Shop Manager
- Dream Home Designer
- City Builder Tycoon
- Pet Care Hotel Tycoon

### 🗺️ Adventure Games
- Peaceful Forest Explorer
- Cozy Mystery Island
- Gentle Ocean Explorer
- Mountain Hiking Adventure
- Cozy Village Life

### 🎮 Casual Games
- Match 3 Gems Paradise
- Snake Game Classic
- Solitaire Card Game

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Game Features

- **Fully Playable**: All games are embedded and functional
- **Fullscreen Mode**: Enjoy games in immersive fullscreen
- **Responsive Gaming**: Games adapt to different screen sizes
- **Safe Embedding**: Secure iframe implementation with proper sandboxing

## 🎨 Design Philosophy

Cozyverse focuses on creating a peaceful, stress-free gaming environment with:
- Calming color schemes
- Relaxing gameplay experiences
- User-friendly navigation
- Minimal cognitive load

## 🔧 Development

### Project Structure
```
src/
├── components/     # Reusable React components
├── pages/         # Page components (Home, GameDetail, etc.)
├── data/          # Mock data and game information
├── assets/        # Static assets
└── App.tsx        # Main application component
```

### Adding New Games

1. Add game data to `src/data/mockData.ts`
2. Include game metadata (title, description, iframe URL, etc.)
3. Assign appropriate categories
4. Test iframe embedding and responsiveness

## 📱 Mobile Support

The platform is fully responsive and optimized for:
- iOS Safari
- Android Chrome
- Mobile game controls
- Touch-friendly interface

## 🚀 Deployment

The project is configured for easy deployment to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Game providers for iframe-embeddable content
- Unsplash for high-quality images
- Lucide for beautiful icons
- Tailwind CSS for styling utilities

---

Made with ❤️ for cozy gaming experiences 