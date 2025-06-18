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
  gameType: 'canvas';
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

// 为不同分类生成不同类型的游戏代码
const generateGameByCategory = (title: string, category: string, icon: string, gameIndex: number): string => {
  const gameId = `game-${title.toLowerCase().replace(/[^\w]/g, '')}`;
  
  // 根据分类生成不同的游戏
  switch (category) {
    case 'puzzle':
      return generatePuzzleGame(gameId, title, icon, gameIndex);
    case 'simulation':
      return generateSimulationGame(gameId, title, icon, gameIndex);
    case 'adventure':
      return generateAdventureGame(gameId, title, icon, gameIndex);
    case 'casual':
      return generateCasualGame(gameId, title, icon, gameIndex);
    case 'creative':
      return generateCreativeGame(gameId, title, icon, gameIndex);
    case 'nature':
      return generateNatureGame(gameId, title, icon, gameIndex);
    default:
      return generatePuzzleGame(gameId, title, icon, gameIndex);
  }
};

// 益智类游戏 - 专业级2048、俄罗斯方块、数独等
const generatePuzzleGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  if (title === '2048') {
    return generateProfessional2048(gameId, title, icon);
  } else if (title === 'Tetris') {
    return generateProfessionalTetris(gameId, title, icon);
  } else if (title.includes('Match')) {
    return generateProfessionalMatch3(gameId, title, icon);
  } else if (title.includes('Sudoku')) {
    return generateProfessionalSudoku(gameId, title, icon);
  } else {
    return generateProfessionalPuzzle(gameId, title, icon, gameIndex);
  }
};

// 专业级2048游戏 - 完整功能和动画
const generateProfessional2048 = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 100vh; box-sizing: border-box; overflow: visible;">
  <h1 style="margin: 0 0 20px 0; color: white; font-size: 36px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  ${generateSideLeaderboard(gameId)}
  
  <div style="background: #bbada0; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="520" height="520" style="background: #cdc1b4; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #667eea, #764ba2); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(102,126,234,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(102,126,234,0.4)';">New Game</button>
    <button id="undoBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #f093fb, #f5576c); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,87,108,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Undo</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #776e65; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${gameId}" style="font-size: 32px; font-weight: 900; color: #776e65;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #776e65; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">BEST</div>
      <div id="best${gameId}" style="font-size: 32px; font-weight: 900; color: #776e65;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #776e65; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #776e65; line-height: 1.6;">Use <strong>ARROW KEYS</strong> to move tiles. When two tiles with the same number touch, they <strong>merge into one</strong>! Try to reach the <strong>2048</strong> tile!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const undoBtn = document.getElementById('undoBtn${gameId}');
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 4;
    const tileSize = 120;
    const tileMargin = 10;
    let grid = [];
    let previousGrid = [];
    let score = 0;
    let previousScore = 0;
    let bestScore = parseInt(localStorage.getItem('2048-best') || '0');
    let animationFrameId;
    let isAnimating = false;
    
    const tileColors = {
      2: {bg: '#eee4da', text: '#776e65'},
      4: {bg: '#ede0c8', text: '#776e65'},
      8: {bg: '#f2b179', text: '#f9f6f2'},
      16: {bg: '#f59563', text: '#f9f6f2'},
      32: {bg: '#f67c5f', text: '#f9f6f2'},
      64: {bg: '#f65e3b', text: '#f9f6f2'},
      128: {bg: '#edcf72', text: '#f9f6f2'},
      256: {bg: '#edcc61', text: '#f9f6f2'},
      512: {bg: '#edc850', text: '#f9f6f2'},
      1024: {bg: '#edc53f', text: '#f9f6f2'},
      2048: {bg: '#edc22e', text: '#f9f6f2'}
    };
    
    function updateScore() {
      document.getElementById('score${gameId}').textContent = score.toLocaleString();
      if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('2048-best', bestScore.toString());
      }
      document.getElementById('best${gameId}').textContent = bestScore.toLocaleString();
    }
    
    function saveState() {
      previousGrid = grid.map(row => [...row]);
      previousScore = score;
    }
    
    function undo() {
      if (previousGrid.length > 0) {
        grid = previousGrid.map(row => [...row]);
        score = previousScore;
        updateScore();
        drawGrid();
      }
    }
    
    function initGrid() {
      grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
      score = 0;
      previousGrid = [];
      updateScore();
      addNewTileStatic();
      addNewTileStatic();
      drawGrid();
    }
    
    function addNewTile() {
      const emptyCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) {
            emptyCells.push({x: i, y: j});
          }
        }
      }
      
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newValue = Math.random() < 0.9 ? 2 : 4;
        grid[randomCell.x][randomCell.y] = newValue;
        
        // 新方块出现动画
        animateNewTile(randomCell.x, randomCell.y, newValue);
      }
    }
    
    function addNewTileStatic() {
      const emptyCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) {
            emptyCells.push({x: i, y: j});
          }
        }
      }
      
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newValue = Math.random() < 0.9 ? 2 : 4;
        grid[randomCell.x][randomCell.y] = newValue;
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
        
        const scale = easeProgress * 1.1; // 从0放大到1.1倍
        const bounceScale = scale > 1 ? 1 - (scale - 1) * 0.3 : scale;
        const opacity = Math.min(progress * 2, 1); // 逐渐显现
        
        // 重绘整个网格
        drawGrid();
        
        // 绘制新方块的动画
        const x = col * (tileSize + tileMargin) + tileMargin;
        const y = row * (tileSize + tileMargin) + tileMargin;
        
        // 暂时清除这个位置的方块，用动画方块代替
        const originalValue = grid[row][col];
        grid[row][col] = 0;
        drawGrid();
        grid[row][col] = originalValue;
        
        if (progress < 1) {
          drawTile(value, x, y, opacity, bounceScale);
          requestAnimationFrame(animate);
        } else {
          drawGrid(); // 最终状态
        }
      }
      
      animate();
    }
    
    function drawTile(value, x, y, opacity = 1, scale = 1) {
      const colors = tileColors[value] || {bg: '#3c3a32', text: '#f9f6f2'};
      
      ctx.save();
      
      // 计算缩放后的尺寸和位置
      const scaledSize = tileSize * scale;
      const offsetX = (tileSize - scaledSize) / 2;
      const offsetY = (tileSize - scaledSize) / 2;
      
      // 绘制阴影
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(x + offsetX + 3, y + offsetY + 3, scaledSize - 4, scaledSize - 4);
      
      // 绘制tile背景
      ctx.fillStyle = colors.bg;
      ctx.globalAlpha = opacity;
      ctx.fillRect(x + offsetX + 2, y + offsetY + 2, scaledSize - 4, scaledSize - 4);
      
      // 绘制数字
      if (value > 0) {
        ctx.fillStyle = colors.text;
        const fontSize = (value < 100 ? 48 : value < 1000 ? 42 : 36) * scale;
        ctx.font = \`bold \${fontSize}px 'Segoe UI', Arial, sans-serif\`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(value.toString(), x + tileSize/2, y + tileSize/2);
      }
      
      ctx.restore();
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制背景网格
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = j * (tileSize + tileMargin) + tileMargin;
          const y = i * (tileSize + tileMargin) + tileMargin;
          
          // 背景格子
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          ctx.fillRect(x, y, tileSize, tileSize);
          
          // 格子内阴影
          ctx.fillStyle = '#bbada0';
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
      
      // 绘制tiles
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] !== 0) {
            const x = j * (tileSize + tileMargin) + tileMargin;
            const y = i * (tileSize + tileMargin) + tileMargin;
            drawTile(grid[i][j], x, y);
          }
        }
      }
    }
    
    function animateMove(direction) {
      if (isAnimating) return false;
      
      const oldGrid = grid.map(row => [...row]);
      const newGrid = grid.map(row => [...row]);
      let moved = false;
      let scoreIncrease = 0;
      let movements = []; // 记录每个方块的移动轨迹
      let merges = []; // 记录合并的方块
      
      // 计算新位置和移动轨迹
      if (direction === 'left' || direction === 'right') {
        for (let i = 0; i < gridSize; i++) {
          let row = newGrid[i];
          let originalPositions = [];
          
          // 记录原始位置
          for (let j = 0; j < gridSize; j++) {
            if (row[j] !== 0) {
              originalPositions.push({value: row[j], fromCol: j});
            }
          }
          
          if (direction === 'right') {
            row = row.reverse();
            originalPositions = originalPositions.map(pos => ({
              ...pos,
              fromCol: gridSize - 1 - pos.fromCol
            }));
          }
          
          // 移除空格子
          row = row.filter(val => val !== 0);
          
          // 处理合并
          let toPositions = [];
          let k = 0;
          for (let j = 0; j < row.length; j++) {
            if (j < row.length - 1 && row[j] === row[j + 1]) {
              // 合并
              const newValue = row[j] * 2;
              scoreIncrease += newValue;
              toPositions.push({value: newValue, toCol: k, isMerged: true});
              merges.push({row: i, col: direction === 'right' ? gridSize - 1 - k : k, value: newValue});
              j++; // 跳过下一个
              moved = true;
            } else {
              toPositions.push({value: row[j], toCol: k, isMerged: false});
            }
            k++;
          }
          
          // 记录移动轨迹
          let fromIndex = 0;
          for (let toIndex = 0; toIndex < toPositions.length; toIndex++) {
            const to = toPositions[toIndex];
            if (to.isMerged && fromIndex < originalPositions.length - 1) {
              // 合并：两个方块移动到同一位置
              const from1 = originalPositions[fromIndex];
              const from2 = originalPositions[fromIndex + 1];
              
              movements.push({
                value: from1.value,
                fromRow: i, fromCol: from1.fromCol,
                toRow: i, toCol: direction === 'right' ? gridSize - 1 - to.toCol : to.toCol,
                isMerged: true
              });
              
              movements.push({
                value: from2.value,
                fromRow: i, fromCol: from2.fromCol,
                toRow: i, toCol: direction === 'right' ? gridSize - 1 - to.toCol : to.toCol,
                isMerged: true
              });
              
              fromIndex += 2;
            } else if (fromIndex < originalPositions.length) {
              // 普通移动
              const from = originalPositions[fromIndex];
              const finalCol = direction === 'right' ? gridSize - 1 - to.toCol : to.toCol;
              
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
          
          // 更新网格
          row = toPositions.map(pos => pos.value);
          while (row.length < gridSize) {
            row.push(0);
          }
          
          if (direction === 'right') row = row.reverse();
          
          for (let j = 0; j < gridSize; j++) {
            newGrid[i][j] = row[j];
          }
        }
      } else {
        // 垂直移动的逻辑类似
        for (let j = 0; j < gridSize; j++) {
          let column = [];
          let originalPositions = [];
          
          for (let i = 0; i < gridSize; i++) {
            column.push(newGrid[i][j]);
            if (newGrid[i][j] !== 0) {
              originalPositions.push({value: newGrid[i][j], fromRow: i});
            }
          }
          
          if (direction === 'down') {
            column = column.reverse();
            originalPositions = originalPositions.map(pos => ({
              ...pos,
              fromRow: gridSize - 1 - pos.fromRow
            }));
          }
          
          column = column.filter(val => val !== 0);
          
          let toPositions = [];
          let k = 0;
          for (let i = 0; i < column.length; i++) {
            if (i < column.length - 1 && column[i] === column[i + 1]) {
              const newValue = column[i] * 2;
              scoreIncrease += newValue;
              toPositions.push({value: newValue, toRow: k, isMerged: true});
              merges.push({row: direction === 'down' ? gridSize - 1 - k : k, col: j, value: newValue});
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
                toRow: direction === 'down' ? gridSize - 1 - to.toRow : to.toRow, toCol: j,
                isMerged: true
              });
              
              movements.push({
                value: from2.value,
                fromRow: from2.fromRow, fromCol: j,
                toRow: direction === 'down' ? gridSize - 1 - to.toRow : to.toRow, toCol: j,
                isMerged: true
              });
              
              fromIndex += 2;
            } else if (fromIndex < originalPositions.length) {
              const from = originalPositions[fromIndex];
              const finalRow = direction === 'down' ? gridSize - 1 - to.toRow : to.toRow;
              
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
          while (column.length < gridSize) {
            column.push(0);
          }
          
          if (direction === 'down') column = column.reverse();
          
          for (let i = 0; i < gridSize; i++) {
            newGrid[i][j] = column[i];
          }
        }
      }
      
      if (moved) {
        isAnimating = true;
        score += scoreIncrease;
        updateScore();
        
        // 清空当前网格用于动画
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            grid[i][j] = 0;
          }
        }
        
        // 滑动动画
        const animationDuration = 200;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / animationDuration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3); // 缓动函数
          
          // 绘制背景网格
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
              const x = j * (tileSize + tileMargin) + tileMargin;
              const y = i * (tileSize + tileMargin) + tileMargin;
              
              ctx.fillStyle = 'rgba(255,255,255,0.35)';
              ctx.fillRect(x, y, tileSize, tileSize);
              ctx.fillStyle = '#bbada0';
              ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
            }
          }
          
          // 绘制移动中的方块
          movements.forEach(movement => {
            const fromX = movement.fromCol * (tileSize + tileMargin) + tileMargin;
            const fromY = movement.fromRow * (tileSize + tileMargin) + tileMargin;
            const toX = movement.toCol * (tileSize + tileMargin) + tileMargin;
            const toY = movement.toRow * (tileSize + tileMargin) + tileMargin;
            
            const currentX = fromX + (toX - fromX) * easeProgress;
            const currentY = fromY + (toY - fromY) * easeProgress;
            
            // 合并时的缩放效果
            let scale = 1;
            let opacity = 1;
            if (movement.isMerged && progress > 0.7) {
              const mergeProgress = (progress - 0.7) / 0.3;
              scale = 1 - mergeProgress * 0.2; // 稍微缩小
              opacity = 1 - mergeProgress * 0.5; // 逐渐透明
            }
            
            drawTile(movement.value, currentX, currentY, opacity, scale);
          });
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            // 动画结束，显示合并后的方块
            grid = newGrid;
            
            // 合并方块的放大效果
            let mergeAnimationProgress = 0;
            const mergeStart = Date.now();
            const mergeDuration = 150;
            
            function animateMerge() {
              const currentTime = Date.now();
              mergeAnimationProgress = Math.min((currentTime - mergeStart) / mergeDuration, 1);
              
              drawGrid();
              
              // 绘制合并方块的放大效果
              merges.forEach(merge => {
                const x = merge.col * (tileSize + tileMargin) + tileMargin;
                const y = merge.row * (tileSize + tileMargin) + tileMargin;
                const scale = 1 + Math.sin(mergeAnimationProgress * Math.PI) * 0.1;
                drawTile(merge.value, x, y, 1, scale);
              });
              
              if (mergeAnimationProgress < 1) {
                requestAnimationFrame(animateMerge);
              } else {
                addNewTile();
                drawGrid();
                isAnimating = false;
                
                // 检查游戏结束
                if (checkGameOver()) {
                  setTimeout(() => {
                    updatePlayerBest(score);
                    eval(generateLevelCompleteModal('${gameId}', 1, score, 0));
                  }, 100);
                } else if (hasWon()) {
                  setTimeout(() => {
                    updatePlayerBest(score);
                    eval(generateLevelCompleteModal('${gameId}', 1, score, 500));
                  }, 100);
                }
              }
            }
            
            if (merges.length > 0) {
              animateMerge();
            } else {
              addNewTile();
              drawGrid();
              isAnimating = false;
              
              if (checkGameOver()) {
                setTimeout(() => {
                  updatePlayerBest(score);
                  eval(generateLevelCompleteModal('${gameId}', 1, score, 0));
                }, 100);
              } else if (hasWon()) {
                setTimeout(() => {
                  updatePlayerBest(score);
                  eval(generateLevelCompleteModal('${gameId}', 1, score, 500));
                }, 100);
              }
            }
          }
        }
        
        animate();
      }
      
      return moved;
    }
    
    function checkGameOver() {
      // 检查是否有空格
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) return false;
        }
      }
      
      // 检查是否可以合并
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const current = grid[i][j];
          if ((i < gridSize - 1 && grid[i + 1][j] === current) ||
              (j < gridSize - 1 && grid[i][j + 1] === current)) {
            return false;
          }
        }
      }
      
      return true;
    }
    
    function hasWon() {
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 2048) return true;
        }
      }
      return false;
    }
    
    document.addEventListener('keydown', function(e) {
      if (isAnimating) return;
      
      let moved = false;
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          saveState();
          moved = animateMove('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          saveState();
          moved = animateMove('right');
          break;
        case 'ArrowUp':
          e.preventDefault();
          saveState();
          moved = animateMove('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          saveState();
          moved = animateMove('down');
          break;
      }
    });
    
    // 触摸支持
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    
    canvas.addEventListener('touchstart', function(e) {
      e.preventDefault();
      if (isAnimating) return;
      
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      isTouching = true;
    });
    
    canvas.addEventListener('touchmove', function(e) {
      e.preventDefault();
    });
    
    canvas.addEventListener('touchend', function(e) {
      e.preventDefault();
      if (!isTouching || isAnimating) return;
      
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const minDistance = 30; // 最小滑动距离
      
      if (Math.abs(deltaX) > minDistance || Math.abs(deltaY) > minDistance) {
        saveState();
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // 水平滑动
          if (deltaX > 0) {
            animateMove('right');
          } else {
            animateMove('left');
          }
        } else {
          // 垂直滑动
          if (deltaY > 0) {
            animateMove('down');
          } else {
            animateMove('up');
          }
        }
      }
      
      isTouching = false;
    });
    
    startBtn.addEventListener('click', initGrid);
    undoBtn.addEventListener('click', undo);
    
    // 初始化
    updateScore();
    initGrid();
  }, 100);
})();
</script>`;
};

// 专业级俄罗斯方块
const generateProfessionalTetris = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  ${generateSideLeaderboard(gameId)}
  
  <div style="display: flex; gap: 30px; align-items: flex-start;">
    <div style="background: #2c3e50; padding: 20px; border-radius: 16px; border: 4px solid #34495e; box-shadow: 0 12px 30px rgba(0,0,0,0.3);">
      <canvas id="${gameId}" width="320" height="640" style="background: linear-gradient(180deg, #1a252f 0%, #2c3e50 100%); border-radius: 8px; display: block;"></canvas>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="background: rgba(255,255,255,0.95); padding: 25px; border-radius: 16px; min-width: 180px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 15px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
          <div id="score${gameId}" style="font-size: 28px; font-weight: 900; color: #2c3e50;">0</div>
        </div>
        <div style="text-align: center; margin-bottom: 15px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LINES</div>
          <div id="lines${gameId}" style="font-size: 24px; font-weight: 900; color: #e67e22;">0</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
          <div id="level${gameId}" style="font-size: 24px; font-weight: 900; color: #27ae60;">1</div>
        </div>
      </div>
      
      <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 15px; font-weight: bold; color: #2c3e50; font-size: 16px;">NEXT</div>
        <canvas id="next${gameId}" width="120" height="120" style="background: #ecf0f1; border-radius: 8px; display: block;"></canvas>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button id="startBtn${gameId}" style="padding: 15px 25px; background: linear-gradient(45deg, #27ae60, #2ecc71); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(39,174,96,0.4); transition: all 0.3s ease;">Start</button>
        <button id="pauseBtn${gameId}" style="padding: 15px 25px; background: linear-gradient(45deg, #f39c12, #e67e22); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(243,156,18,0.4); transition: all 0.3s ease;">Pause</button>
        <button id="resetBtn${gameId}" style="padding: 15px 25px; background: linear-gradient(45deg, #e74c3c, #c0392b); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(231,76,60,0.4); transition: all 0.3s ease;">Reset</button>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; margin-top: 25px; max-width: 550px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #2c3e50; margin-bottom: 10px; font-size: 16px;">CONTROLS</div>
    <div style="font-size: 15px; color: #7f8c8d; line-height: 1.6;"><strong>←→</strong> Move | <strong>↓</strong> Soft Drop | <strong>↑</strong> Rotate | <strong>Space</strong> Hard Drop</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const nextCanvas = document.getElementById('next${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const pauseBtn = document.getElementById('pauseBtn${gameId}');
    const resetBtn = document.getElementById('resetBtn${gameId}');
    
    if (!canvas || !nextCanvas) return;
    
    const ctx = canvas.getContext('2d');
    const nextCtx = nextCanvas.getContext('2d');
    
    const ROWS = 20;
    const COLS = 10;
    const BLOCK_SIZE = 32;
    
    let board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
    let score = 0;
    let lines = 0;
    let level = 1;
    let gameRunning = false;
    let gamePaused = false;
    let dropTime = 0;
    let dropInterval = 1000;
    
    const pieces = [
      {shape: [[1,1,1,1]], color: '#00f5ff', name: 'I'},
      {shape: [[1,1],[1,1]], color: '#ffff00', name: 'O'},
      {shape: [[1,1,1],[0,1,0]], color: '#800080', name: 'T'},
      {shape: [[1,1,1],[1,0,0]], color: '#ffa500', name: 'L'},
      {shape: [[1,1,1],[0,0,1]], color: '#0000ff', name: 'J'},
      {shape: [[0,1,1],[1,1,0]], color: '#00ff00', name: 'S'},
      {shape: [[1,1,0],[0,1,1]], color: '#ff0000', name: 'Z'}
    ];
    
    let currentPiece = null;
    let nextPiece = null;
    let ghostPiece = null;
    
    function updateStats() {
      document.getElementById('score${gameId}').textContent = score.toLocaleString();
      document.getElementById('lines${gameId}').textContent = lines;
      document.getElementById('level${gameId}').textContent = level;
    }
    
    function drawBlock(ctx, x, y, color, size = BLOCK_SIZE) {
      if (!color) return;
      
      // 绘制方块主体
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
      
      // 绘制高光
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(x, y, size, 4);
      ctx.fillRect(x, y, 4, size);
      
      // 绘制阴影
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(x, y + size - 4, size, 4);
      ctx.fillRect(x + size - 4, y, 4, size);
      
      // 绘制边框
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
    }
    
    function drawBoard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制网格背景
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= COLS; i++) {
        ctx.beginPath();
        ctx.moveTo(i * BLOCK_SIZE, 0);
        ctx.lineTo(i * BLOCK_SIZE, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i <= ROWS; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * BLOCK_SIZE);
        ctx.lineTo(canvas.width, i * BLOCK_SIZE);
        ctx.stroke();
      }
      
      // 绘制已放置的方块
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (board[row][col]) {
            drawBlock(ctx, col * BLOCK_SIZE, row * BLOCK_SIZE, board[row][col]);
          }
        }
      }
      
      // 绘制幽灵方块（预览位置）
      if (currentPiece && ghostPiece) {
        ctx.globalAlpha = 0.3;
        for (let row = 0; row < ghostPiece.shape.length; row++) {
          for (let col = 0; col < ghostPiece.shape[row].length; col++) {
            if (ghostPiece.shape[row][col]) {
              drawBlock(ctx, (ghostPiece.x + col) * BLOCK_SIZE, (ghostPiece.y + row) * BLOCK_SIZE, currentPiece.color);
            }
          }
        }
        ctx.globalAlpha = 1;
      }
      
      // 绘制当前方块
      if (currentPiece) {
        for (let row = 0; row < currentPiece.shape.length; row++) {
          for (let col = 0; col < currentPiece.shape[row].length; col++) {
            if (currentPiece.shape[row][col]) {
              drawBlock(ctx, (currentPiece.x + col) * BLOCK_SIZE, (currentPiece.y + row) * BLOCK_SIZE, currentPiece.color);
            }
          }
        }
      }
    }
    
    function drawNext() {
      nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
      if (nextPiece) {
        const offsetX = (nextCanvas.width - nextPiece.shape[0].length * 25) / 2;
        const offsetY = (nextCanvas.height - nextPiece.shape.length * 25) / 2;
        
        for (let row = 0; row < nextPiece.shape.length; row++) {
          for (let col = 0; col < nextPiece.shape[row].length; col++) {
            if (nextPiece.shape[row][col]) {
              drawBlock(nextCtx, col * 25 + offsetX, row * 25 + offsetY, nextPiece.color, 25);
            }
          }
        }
      }
    }
    
    function createPiece() {
      const piece = pieces[Math.floor(Math.random() * pieces.length)];
      return {
        shape: piece.shape.map(row => [...row]),
        color: piece.color,
        name: piece.name,
        x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
        y: 0
      };
    }
    
    function isValidMove(piece, dx, dy, newShape) {
      const shape = newShape || piece.shape;
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col]) {
            const newX = piece.x + col + dx;
            const newY = piece.y + row + dy;
            
            if (newX < 0 || newX >= COLS || newY >= ROWS) return false;
            if (newY >= 0 && board[newY][newX]) return false;
          }
        }
      }
      return true;
    }
    
    function rotatePiece(piece) {
      const rotated = piece.shape[0].map((_, index) =>
        piece.shape.map(row => row[index]).reverse()
      );
      
      if (isValidMove(piece, 0, 0, rotated)) {
        piece.shape = rotated;
        updateGhostPiece();
        return true;
      }
      return false;
    }
    
    function updateGhostPiece() {
      if (!currentPiece) return;
      
      ghostPiece = {
        shape: currentPiece.shape.map(row => [...row]),
        x: currentPiece.x,
        y: currentPiece.y
      };
      
      while (isValidMove(ghostPiece, 0, 1)) {
        ghostPiece.y++;
      }
    }
    
    function placePiece() {
      for (let row = 0; row < currentPiece.shape.length; row++) {
        for (let col = 0; col < currentPiece.shape[row].length; col++) {
          if (currentPiece.shape[row][col]) {
            if (currentPiece.y + row < 0) {
              gameRunning = false;
              alert('Game Over! Score: ' + score.toLocaleString());
              return;
            }
            board[currentPiece.y + row][currentPiece.x + col] = currentPiece.color;
          }
        }
      }
      
      clearLines();
      currentPiece = nextPiece;
      nextPiece = createPiece();
      updateGhostPiece();
      
      if (!isValidMove(currentPiece, 0, 0)) {
        gameRunning = false;
        alert('Game Over! Score: ' + score.toLocaleString());
      }
    }
    
    function clearLines() {
      let linesCleared = 0;
      for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every(cell => cell !== null)) {
          // 添加闪烁效果
          board.splice(row, 1);
          board.unshift(Array(COLS).fill(null));
          linesCleared++;
          row++;
        }
      }
      
      if (linesCleared > 0) {
        lines += linesCleared;
        score += [0, 100, 300, 500, 800][linesCleared] * level;
        level = Math.floor(lines / 10) + 1;
        dropInterval = Math.max(50, 1000 - (level - 1) * 50);
        updateStats();
      }
    }
    
    function gameLoop(timestamp) {
      if (!gameRunning || gamePaused) {
        if (gameRunning) requestAnimationFrame(gameLoop);
        return;
      }
      
      if (timestamp - dropTime > dropInterval) {
        if (isValidMove(currentPiece, 0, 1)) {
          currentPiece.y++;
          updateGhostPiece();
        } else {
          placePiece();
        }
        dropTime = timestamp;
      }
      
      drawBoard();
      drawNext();
      requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
      score = 0;
      lines = 0;
      level = 1;
      dropInterval = 1000;
      currentPiece = createPiece();
      nextPiece = createPiece();
      updateGhostPiece();
      gameRunning = true;
      gamePaused = false;
      updateStats();
      requestAnimationFrame(gameLoop);
    }
    
    document.addEventListener('keydown', function(e) {
      if (!gameRunning || gamePaused || !currentPiece) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (isValidMove(currentPiece, -1, 0)) {
            currentPiece.x--;
            updateGhostPiece();
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (isValidMove(currentPiece, 1, 0)) {
            currentPiece.x++;
            updateGhostPiece();
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (isValidMove(currentPiece, 0, 1)) {
            currentPiece.y++;
            score++;
            updateStats();
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece(currentPiece);
          break;
        case ' ':
          e.preventDefault();
          while (isValidMove(currentPiece, 0, 1)) {
            currentPiece.y++;
            score += 2;
          }
          updateStats();
          break;
      }
    });
    
    startBtn.addEventListener('click', startGame);
    pauseBtn.addEventListener('click', () => {
      gamePaused = !gamePaused;
      pauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
      if (!gamePaused && gameRunning) requestAnimationFrame(gameLoop);
    });
    resetBtn.addEventListener('click', () => {
      gameRunning = false;
      gamePaused = false;
      pauseBtn.textContent = 'Pause';
      drawBoard();
      drawNext();
    });
    
    updateStats();
  }, 100);
})();
</script>`;
};

// 其他专业级益智游戏
const generateProfessionalMatch3 = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="480" height="480" style="background: #f8f9fa; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #ff6b6b, #ffa500); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(255,107,107,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(255,107,107,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(255,107,107,0.4)';">New Game</button>
    <button id="hintBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #4ecdc4, #44a08d); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(78,205,196,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${gameId}" style="font-size: 32px; font-weight: 900; color: #333;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">MOVES</div>
      <div id="moves${gameId}" style="font-size: 32px; font-weight: 900; color: #333;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click to swap adjacent gems and create matches of 3 or more. Chain combos for higher scores!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 8;
    const tileSize = 55;
    const margin = 10;
    let grid = [];
    let score = 0;
    let moves = 0;
    let selectedTile = null;
    let animating = false;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f'];
    
    function initGame() {
      grid = [];
      for (let row = 0; row < gridSize; row++) {
        grid[row] = [];
        for (let col = 0; col < gridSize; col++) {
          grid[row][col] = Math.floor(Math.random() * colors.length);
        }
      }
      removeMatches();
      score = 0;
      moves = 0;
      updateUI();
      draw();
    }
    
    function draw() {
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const x = col * (tileSize + 2) + margin;
          const y = row * (tileSize + 2) + margin;
          
          ctx.fillStyle = colors[grid[row][col]];
          ctx.beginPath();
          ctx.roundRect(x, y, tileSize, tileSize, 8);
          ctx.fill();
          
          if (selectedTile && selectedTile.row === row && selectedTile.col === col) {
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 4;
            ctx.stroke();
          }
          
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(x + tileSize/2, y + tileSize/2, 15, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    function removeMatches() {
      let hasMatches = true;
      while (hasMatches) {
        hasMatches = false;
        const toRemove = [];
        
        for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize - 2; col++) {
            if (grid[row][col] === grid[row][col + 1] && grid[row][col] === grid[row][col + 2]) {
              toRemove.push([row, col], [row, col + 1], [row, col + 2]);
              hasMatches = true;
            }
          }
        }
        
        for (let col = 0; col < gridSize; col++) {
          for (let row = 0; row < gridSize - 2; row++) {
            if (grid[row][col] === grid[row + 1][col] && grid[row][col] === grid[row + 2][col]) {
              toRemove.push([row, col], [row + 1, col], [row + 2, col]);
              hasMatches = true;
            }
          }
        }
        
        if (hasMatches) {
          score += toRemove.length * 10;
          toRemove.forEach(([row, col]) => {
            grid[row][col] = Math.floor(Math.random() * colors.length);
          });
        }
      }
    }
    
    function updateUI() {
      document.getElementById('score${gameId}').textContent = score.toLocaleString();
      document.getElementById('moves${gameId}').textContent = moves;
    }
    
    canvas.addEventListener('click', function(e) {
      if (animating) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor((x - margin) / (tileSize + 2));
      const row = Math.floor((y - margin) / (tileSize + 2));
      
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        if (!selectedTile) {
          selectedTile = {row, col};
        } else {
          if (Math.abs(selectedTile.row - row) + Math.abs(selectedTile.col - col) === 1) {
            const temp = grid[selectedTile.row][selectedTile.col];
            grid[selectedTile.row][selectedTile.col] = grid[row][col];
            grid[row][col] = temp;
            
            removeMatches();
            moves++;
            updateUI();
          }
          selectedTile = null;
        }
        draw();
      }
    });
    
    document.getElementById('startBtn${gameId}').addEventListener('click', initGame);
    document.getElementById('hintBtn${gameId}').addEventListener('click', function() {
      selectedTile = null;
      draw();
    });
    
    initGame();
  }, 100);
})();
</script>`;
};

const generateProfessionalSudoku = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: white; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="450" height="450" style="border: 3px solid #333; border-radius: 8px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="newBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #6a11cb, #2575fc); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(106,17,203,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(106,17,203,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(106,17,203,0.4)';">New Puzzle</button>
    <button id="checkBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #11998e, #38ef7d); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(17,153,142,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Check</button>
    <button id="hintBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #fc466b, #3f5efb); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(252,70,107,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px; margin-bottom: 25px; background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    ${Array.from({length: 9}, (_, i) => 
      `<button class="number-btn-${gameId}" data-number="${i + 1}" style="width: 40px; height: 40px; border: 2px solid #6a11cb; background: white; color: #6a11cb; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 18px; transition: all 0.2s ease;" onmouseover="this.style.background='#6a11cb'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='#6a11cb';">${i + 1}</button>`
    ).join('')}
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Fill the 9×9 grid so that each row, column and 3×3 box contains all digits 1-9. Click a cell and then click a number to place it.</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 9;
    const cellSize = 50;
    let puzzle = [];
    let solution = [];
    let userInput = [];
    let selectedCell = null;
    
    function generateSudoku() {
      const base = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ];
      
      puzzle = base.map(row => [...row]);
      userInput = puzzle.map(row => row.map(cell => cell === 0 ? 0 : cell));
      solution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];
    }
    
    function draw() {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      
      for (let i = 0; i <= 9; i++) {
        ctx.lineWidth = (i % 3 === 0) ? 3 : 1;
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, gridSize * cellSize);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(gridSize * cellSize, i * cellSize);
        ctx.stroke();
      }
      
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const x = col * cellSize + cellSize / 2;
          const y = row * cellSize + cellSize / 2;
          
          if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
            ctx.fillStyle = '#e3f2fd';
            ctx.fillRect(col * cellSize + 1, row * cellSize + 1, cellSize - 2, cellSize - 2);
          }
          
          if (userInput[row][col] !== 0) {
            ctx.fillStyle = puzzle[row][col] !== 0 ? '#333' : '#2196F3';
            ctx.fillText(userInput[row][col].toString(), x, y);
          }
        }
      }
    }
    
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize && puzzle[row][col] === 0) {
        selectedCell = {row, col};
        draw();
      }
    });
    
    document.querySelectorAll('.number-btn-${gameId}').forEach(btn => {
      btn.addEventListener('click', function() {
        if (selectedCell) {
          const number = parseInt(this.dataset.number);
          userInput[selectedCell.row][selectedCell.col] = number;
          draw();
        }
      });
    });
    
    document.getElementById('newBtn${gameId}').addEventListener('click', function() {
      generateSudoku();
      selectedCell = null;
      draw();
    });
    
    document.getElementById('checkBtn${gameId}').addEventListener('click', function() {
      let correct = true;
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          if (userInput[row][col] !== solution[row][col]) {
            correct = false;
            break;
          }
        }
        if (!correct) break;
      }
      alert(correct ? 'Congratulations! Puzzle solved!' : 'Not quite right, keep trying!');
    });
    
    document.getElementById('hintBtn${gameId}').addEventListener('click', function() {
      if (selectedCell) {
        userInput[selectedCell.row][selectedCell.col] = solution[selectedCell.row][selectedCell.col];
        draw();
      }
    });
    
    generateSudoku();
    draw();
  }, 100);
})();
</script>`;
};

const generateProfessionalPuzzle = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  const puzzleTypes = ['chess', 'crossword', 'jigsaw', 'word-search', 'logic-puzzle'];
  const puzzleType = puzzleTypes[gameIndex % puzzleTypes.length];
  
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #8360c3 0%, #2ebf91 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  ${generateSideLeaderboard(gameId)}
  
  <div style="background: white; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="500" height="500" style="border: 2px solid #8360c3; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #8360c3, #2ebf91); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(131,96,195,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(131,96,195,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(131,96,195,0.4)';">New Game</button>
    <button id="hintBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #f093fb, #f5576c); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(240,147,251,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
      <div id="level${gameId}" style="font-size: 32px; font-weight: 900; color: #333;">1</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TIME</div>
      <div id="time${gameId}" style="font-size: 32px; font-weight: 900; color: #333;">0:00</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Solve challenging ${puzzleType.replace('-', ' ')} puzzles with increasing difficulty. Use logic and strategy to complete each level!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let level = 1;
    let startTime = Date.now();
    let gameState = 'playing';
    let pieces = [];
    
    function initGame() {
      pieces = [];
      const numPieces = 5 + level * 2;
      
      for (let i = 0; i < numPieces; i++) {
        pieces.push({
          x: Math.random() * (canvas.width - 60),
          y: Math.random() * (canvas.height - 60),
          width: 40 + Math.random() * 40,
          height: 40 + Math.random() * 40,
          color: \`hsl(\${Math.random() * 360}, 70%, 60%)\`,
          targetX: (i % 5) * 80 + 50,
          targetY: Math.floor(i / 5) * 80 + 50,
          placed: false,
          dragging: false
        });
      }
      
      startTime = Date.now();
      gameState = 'playing';
      updateUI();
      draw();
    }
    
    function draw() {
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      pieces.forEach(piece => {
        if (!piece.placed) {
          ctx.strokeStyle = '#ddd';
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(piece.targetX, piece.targetY, piece.width, piece.height);
          ctx.setLineDash([]);
        }
      });
      
      pieces.forEach(piece => {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x, piece.y, piece.width, piece.height);
        
        if (piece.placed) {
          ctx.strokeStyle = '#4CAF50';
          ctx.lineWidth = 3;
          ctx.strokeRect(piece.x, piece.y, piece.width, piece.height);
        }
      });
    }
    
    function updateUI() {
      document.getElementById('level${gameId}').textContent = level;
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      document.getElementById('time${gameId}').textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
    }
    
    function checkWin() {
      if (pieces.every(piece => piece.placed)) {
        const currentScore = level * 100 + Math.max(0, 300 - Math.floor((Date.now() - startTime) / 1000)) * 5;
        const timeBonus = Math.max(0, 300 - Math.floor((Date.now() - startTime) / 1000)) * 5;
        updatePlayerBest(currentScore);
        
        level++;
        setTimeout(() => {
          eval(generateLevelCompleteModal('${gameId}', level - 1, currentScore, timeBonus));
          setTimeout(() => initGame(), 2000);
        }, 500);
      }
    }
    
    let dragPiece = null;
    let dragOffset = {x: 0, y: 0};
    
    canvas.addEventListener('mousedown', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = pieces.length - 1; i >= 0; i--) {
        const piece = pieces[i];
        if (x >= piece.x && x <= piece.x + piece.width && 
            y >= piece.y && y <= piece.y + piece.height && !piece.placed) {
          dragPiece = piece;
          dragOffset.x = x - piece.x;
          dragOffset.y = y - piece.y;
          break;
        }
      }
    });
    
    canvas.addEventListener('mousemove', function(e) {
      if (dragPiece) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        dragPiece.x = x - dragOffset.x;
        dragPiece.y = y - dragOffset.y;
        draw();
      }
    });
    
    canvas.addEventListener('mouseup', function(e) {
      if (dragPiece) {
        const distance = Math.sqrt(
          Math.pow(dragPiece.x - dragPiece.targetX, 2) + 
          Math.pow(dragPiece.y - dragPiece.targetY, 2)
        );
        
        if (distance < 30) {
          dragPiece.x = dragPiece.targetX;
          dragPiece.y = dragPiece.targetY;
          dragPiece.placed = true;
          checkWin();
        }
        
        dragPiece = null;
        draw();
      }
    });
    
    document.getElementById('startBtn${gameId}').addEventListener('click', initGame);
    document.getElementById('hintBtn${gameId}').addEventListener('click', function() {
      const unplaced = pieces.find(p => !p.placed);
      if (unplaced) {
        ctx.strokeStyle = '#FF5722';
        ctx.lineWidth = 5;
        ctx.setLineDash([10, 10]);
        ctx.strokeRect(unplaced.targetX, unplaced.targetY, unplaced.width, unplaced.height);
        setTimeout(() => draw(), 2000);
      }
    });
    
    setInterval(updateUI, 1000);
    initGame();
  }, 100);
})();
</script>`;
};

// 真正的2048游戏
const generate2048Game = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 25px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); width: 100%; min-height: 650px;">
  <h2 style="margin: 0 0 25px 0; color: #2d3436; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${icon} ${title}</h2>
  
  <div style="background: #bbada0; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
    <canvas id="${gameId}" width="500" height="500" style="background: #cdc1b4; border-radius: 6px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
    <button id="startBtn${gameId}" style="padding: 15px 30px; background: #8e44ad; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(142,68,173,0.3);">New Game</button>
    <button id="resetBtn${gameId}" style="padding: 15px 30px; background: #e74c3c; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; box-shadow: 0 4px 15px rgba(231,76,60,0.3);">Reset</button>
  </div>
  
  <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
    <div style="display: flex; gap: 30px; align-items: center;">
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">SCORE</div>
        <div id="score${gameId}" style="font-size: 24px; font-weight: bold; color: #2c3e50;">0</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">BEST</div>
        <div id="best${gameId}" style="font-size: 24px; font-weight: bold; color: #e67e22;">0</div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.8); padding: 15px; border-radius: 10px;">
    <div style="font-weight: bold; color: #2c3e50; margin-bottom: 5px;">HOW TO PLAY</div>
    <div style="font-size: 14px; color: #7f8c8d;">Use ARROW KEYS to move tiles. When two tiles with the same number touch, they merge into one!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const resetBtn = document.getElementById('resetBtn${gameId}');
    
    if (!canvas || !startBtn || !resetBtn) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 4;
    const tileSize = 115;
    const tileMargin = 15;
    let grid = [];
    let score = 0;
    let bestScore = localStorage.getItem('2048-best') || 0;
    
    const colors = {
      2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
      32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
      512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
    };
    
    function updateScore() {
      document.getElementById('score${gameId}').textContent = score;
      if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('2048-best', bestScore);
      }
      document.getElementById('best${gameId}').textContent = bestScore;
    }
    
    function initGrid() {
      grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
      score = 0;
      updateScore();
      addNewTile();
      addNewTile();
      drawGrid();
    }
    
    function addNewTile() {
      const emptyCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) {
            emptyCells.push({x: i, y: j});
          }
        }
      }
      
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
      }
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制背景格子
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = j * (tileSize + tileMargin) + tileMargin;
          const y = i * (tileSize + tileMargin) + tileMargin;
          
          ctx.fillStyle = '#cdc1b4';
          ctx.fillRect(x, y, tileSize, tileSize);
          ctx.fillStyle = '#bbada0';
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
      
      // 绘制数字tiles
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] !== 0) {
            const x = j * (tileSize + tileMargin) + tileMargin;
            const y = i * (tileSize + tileMargin) + tileMargin;
            const value = grid[i][j];
            
            ctx.fillStyle = colors[value] || '#3c3a32';
            ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
            
            ctx.fillStyle = value <= 4 ? '#776e65' : '#f9f6f2';
            ctx.font = 'bold ' + (value < 100 ? '55px' : value < 1000 ? '45px' : '35px') + ' Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value.toString(), x + tileSize/2, y + tileSize/2);
          }
        }
      }
    }
    
    function move(direction) {
      let moved = false;
      const newGrid = grid.map(row => [...row]);
      
      if (direction === 'left' || direction === 'right') {
        for (let i = 0; i < gridSize; i++) {
          let row = newGrid[i];
          if (direction === 'right') row = row.reverse();
          
          // 移除零
          row = row.filter(val => val !== 0);
          
          // 合并相同数字
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              score += row[j];
              row[j + 1] = 0;
              moved = true;
            }
          }
          
          // 再次移除零并填充
          row = row.filter(val => val !== 0);
          while (row.length < gridSize) {
            row.push(0);
          }
          
          if (direction === 'right') row = row.reverse();
          
          for (let j = 0; j < gridSize; j++) {
            if (newGrid[i][j] !== row[j]) moved = true;
            newGrid[i][j] = row[j];
          }
        }
      } else {
        for (let j = 0; j < gridSize; j++) {
          let column = [];
          for (let i = 0; i < gridSize; i++) {
            column.push(newGrid[i][j]);
          }
          
          if (direction === 'down') column = column.reverse();
          
          column = column.filter(val => val !== 0);
          
          for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
              column[i] *= 2;
              score += column[i];
              column[i + 1] = 0;
              moved = true;
            }
          }
          
          column = column.filter(val => val !== 0);
          while (column.length < gridSize) {
            column.push(0);
          }
          
          if (direction === 'down') column = column.reverse();
          
          for (let i = 0; i < gridSize; i++) {
            if (newGrid[i][j] !== column[i]) moved = true;
            newGrid[i][j] = column[i];
          }
        }
      }
      
      if (moved) {
        grid = newGrid;
        addNewTile();
        updateScore();
        drawGrid();
      }
    }
    
    document.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'ArrowLeft': e.preventDefault(); move('left'); break;
        case 'ArrowRight': e.preventDefault(); move('right'); break;
        case 'ArrowUp': e.preventDefault(); move('up'); break;
        case 'ArrowDown': e.preventDefault(); move('down'); break;
      }
    });
    
    startBtn.addEventListener('click', initGrid);
    resetBtn.addEventListener('click', initGrid);
    
    initGrid();
  }, 100);
})();
</script>`;
};

// 俄罗斯方块游戏
const generateTetrisGame = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 25px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); width: 100%; min-height: 650px;">
  <h2 style="margin: 0 0 25px 0; color: white; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${icon} ${title}</h2>
  
  <div style="display: flex; gap: 20px; align-items: flex-start;">
    <div style="background: #2d3436; padding: 15px; border-radius: 10px; border: 3px solid #636e72;">
      <canvas id="${gameId}" width="300" height="600" style="background: #000; border-radius: 6px; display: block;"></canvas>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; min-width: 150px;">
        <div style="text-align: center; margin-bottom: 10px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">SCORE</div>
          <div id="score${gameId}" style="font-size: 24px; font-weight: bold; color: #2c3e50;">0</div>
        </div>
        <div style="text-align: center; margin-bottom: 10px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">LINES</div>
          <div id="lines${gameId}" style="font-size: 20px; font-weight: bold; color: #e67e22;">0</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">LEVEL</div>
          <div id="level${gameId}" style="font-size: 20px; font-weight: bold; color: #00b894;">1</div>
        </div>
      </div>
      
      <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold; color: #2c3e50; font-size: 16px;">NEXT</div>
        <canvas id="next${gameId}" width="120" height="120" style="background: #000; border-radius: 6px; display: block;"></canvas>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <button id="startBtn${gameId}" style="padding: 12px 20px; background: #00b894; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Start</button>
        <button id="pauseBtn${gameId}" style="padding: 12px 20px; background: #fdcb6e; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Pause</button>
        <button id="resetBtn${gameId}" style="padding: 12px 20px; background: #e17055; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Reset</button>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; margin-top: 20px; max-width: 500px;">
    <div style="font-weight: bold; color: #2c3e50; margin-bottom: 8px;">CONTROLS</div>
    <div style="font-size: 14px; color: #7f8c8d;">← → Move | ↓ Soft Drop | ↑ Rotate | Space Hard Drop</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const nextCanvas = document.getElementById('next${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const pauseBtn = document.getElementById('pauseBtn${gameId}');
    const resetBtn = document.getElementById('resetBtn${gameId}');
    
    if (!canvas || !nextCanvas) return;
    
    const ctx = canvas.getContext('2d');
    const nextCtx = nextCanvas.getContext('2d');
    
    const ROWS = 20;
    const COLS = 10;
    const BLOCK_SIZE = 30;
    
    let board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    let score = 0;
    let lines = 0;
    let level = 1;
    let gameRunning = false;
    let gamePaused = false;
    let dropTime = 0;
    let dropInterval = 1000;
    
    const pieces = [
      {shape: [[1,1,1,1]], color: '#00f5ff'}, // I
      {shape: [[1,1],[1,1]], color: '#ffff00'}, // O
      {shape: [[1,1,1],[0,1,0]], color: '#800080'}, // T
      {shape: [[1,1,1],[1,0,0]], color: '#ffa500'}, // L
      {shape: [[1,1,1],[0,0,1]], color: '#0000ff'}, // J
      {shape: [[0,1,1],[1,1,0]], color: '#00ff00'}, // S
      {shape: [[1,1,0],[0,1,1]], color: '#ff0000'}  // Z
    ];
    
    let currentPiece = null;
    let nextPiece = null;
    
    function updateStats() {
      document.getElementById('score${gameId}').textContent = score;
      document.getElementById('lines${gameId}').textContent = lines;
      document.getElementById('level${gameId}').textContent = level;
    }
    
    function drawBoard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (board[row][col]) {
            ctx.fillStyle = board[row][col];
            ctx.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
          }
        }
      }
      
      if (currentPiece) {
        ctx.fillStyle = currentPiece.color;
        for (let row = 0; row < currentPiece.shape.length; row++) {
          for (let col = 0; col < currentPiece.shape[row].length; col++) {
            if (currentPiece.shape[row][col]) {
              ctx.fillRect(
                (currentPiece.x + col) * BLOCK_SIZE,
                (currentPiece.y + row) * BLOCK_SIZE,
                BLOCK_SIZE - 1,
                BLOCK_SIZE - 1
              );
            }
          }
        }
      }
    }
    
    function drawNext() {
      nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
      if (nextPiece) {
        nextCtx.fillStyle = nextPiece.color;
        for (let row = 0; row < nextPiece.shape.length; row++) {
          for (let col = 0; col < nextPiece.shape[row].length; col++) {
            if (nextPiece.shape[row][col]) {
              nextCtx.fillRect(
                col * 25 + 10,
                row * 25 + 10,
                24,
                24
              );
            }
          }
        }
      }
    }
    
    function createPiece() {
      const piece = pieces[Math.floor(Math.random() * pieces.length)];
      return {
        shape: piece.shape.map(row => [...row]),
        color: piece.color,
        x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
        y: 0
      };
    }
    
    function isValidMove(piece, dx, dy, newShape) {
      const shape = newShape || piece.shape;
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col]) {
            const newX = piece.x + col + dx;
            const newY = piece.y + row + dy;
            
            if (newX < 0 || newX >= COLS || newY >= ROWS) return false;
            if (newY >= 0 && board[newY][newX]) return false;
          }
        }
      }
      return true;
    }
    
    function rotatePiece(piece) {
      const rotated = piece.shape[0].map((_, index) =>
        piece.shape.map(row => row[index]).reverse()
      );
      
      if (isValidMove(piece, 0, 0, rotated)) {
        piece.shape = rotated;
      }
    }
    
    function placePiece() {
      for (let row = 0; row < currentPiece.shape.length; row++) {
        for (let col = 0; col < currentPiece.shape[row].length; col++) {
          if (currentPiece.shape[row][col]) {
            board[currentPiece.y + row][currentPiece.x + col] = currentPiece.color;
          }
        }
      }
      
      clearLines();
      currentPiece = nextPiece;
      nextPiece = createPiece();
      
      if (!isValidMove(currentPiece, 0, 0)) {
        gameRunning = false;
        alert('Game Over! Score: ' + score);
      }
    }
    
    function clearLines() {
      let linesCleared = 0;
      for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every(cell => cell !== 0)) {
          board.splice(row, 1);
          board.unshift(Array(COLS).fill(0));
          linesCleared++;
          row++;
        }
      }
      
      if (linesCleared > 0) {
        lines += linesCleared;
        score += linesCleared * 100 * level;
        level = Math.floor(lines / 10) + 1;
        dropInterval = Math.max(50, 1000 - (level - 1) * 50);
        updateStats();
      }
    }
    
    function gameLoop(timestamp) {
      if (!gameRunning || gamePaused) return;
      
      if (timestamp - dropTime > dropInterval) {
        if (isValidMove(currentPiece, 0, 1)) {
          currentPiece.y++;
        } else {
          placePiece();
        }
        dropTime = timestamp;
      }
      
      drawBoard();
      drawNext();
      requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
      score = 0;
      lines = 0;
      level = 1;
      dropInterval = 1000;
      currentPiece = createPiece();
      nextPiece = createPiece();
      gameRunning = true;
      gamePaused = false;
      updateStats();
      gameLoop();
    }
    
    document.addEventListener('keydown', function(e) {
      if (!gameRunning || gamePaused || !currentPiece) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (isValidMove(currentPiece, -1, 0)) currentPiece.x--;
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (isValidMove(currentPiece, 1, 0)) currentPiece.x++;
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (isValidMove(currentPiece, 0, 1)) currentPiece.y++;
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece(currentPiece);
          break;
        case ' ':
          e.preventDefault();
          while (isValidMove(currentPiece, 0, 1)) {
            currentPiece.y++;
          }
          break;
      }
      drawBoard();
    });
    
    startBtn.addEventListener('click', startGame);
    pauseBtn.addEventListener('click', () => {
      gamePaused = !gamePaused;
      if (!gamePaused && gameRunning) requestAnimationFrame(gameLoop);
    });
    resetBtn.addEventListener('click', () => {
      gameRunning = false;
      gamePaused = false;
      drawBoard();
      drawNext();
    });
    
    updateStats();
  }, 100);
})();
</script>`;
};

// Match3 消除游戏
const generateMatch3Game = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 25px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%); border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); width: 100%; min-height: 650px;">
  <h2 style="margin: 0 0 25px 0; color: white; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${icon} ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
    <canvas id="${gameId}" width="480" height="480" style="border-radius: 6px; display: block; cursor: pointer;"></canvas>
  </div>
  
  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
    <button id="startBtn${gameId}" style="padding: 15px 30px; background: #00b894; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">New Game</button>
    <button id="hintBtn${gameId}" style="padding: 15px 30px; background: #fdcb6e; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Hint</button>
  </div>
  
  <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
    <div style="display: flex; gap: 30px; align-items: center;">
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">SCORE</div>
        <div id="score${gameId}" style="font-size: 24px; font-weight: bold; color: #2c3e50;">0</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">MOVES</div>
        <div id="moves${gameId}" style="font-size: 24px; font-weight: bold; color: #e67e22;">30</div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const hintBtn = document.getElementById('hintBtn${gameId}');
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 8;
    const cellSize = 60;
    let grid = [];
    let score = 0;
    let moves = 30;
    let selectedCell = null;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    
    function updateStats() {
      document.getElementById('score${gameId}').textContent = score;
      document.getElementById('moves${gameId}').textContent = moves;
    }
    
    function initGrid() {
      grid = [];
      for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
          grid[i][j] = {
            color: colors[Math.floor(Math.random() * colors.length)],
            x: j * cellSize,
            y: i * cellSize
          };
        }
      }
      score = 0;
      moves = 30;
      selectedCell = null;
      updateStats();
      drawGrid();
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const cell = grid[i][j];
          
          ctx.fillStyle = cell.color;
          ctx.fillRect(cell.x + 2, cell.y + 2, cellSize - 4, cellSize - 4);
          
          if (selectedCell && selectedCell.row === i && selectedCell.col === j) {
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 4;
            ctx.strokeRect(cell.x + 2, cell.y + 2, cellSize - 4, cellSize - 4);
          }
          
          ctx.strokeStyle = '#ddd';
          ctx.lineWidth = 1;
          ctx.strokeRect(cell.x + 2, cell.y + 2, cellSize - 4, cellSize - 4);
        }
      }
    }
    
    function findMatches() {
      const matches = [];
      
      // 检查水平匹配
      for (let i = 0; i < gridSize; i++) {
        let count = 1;
        let currentColor = grid[i][0].color;
        for (let j = 1; j < gridSize; j++) {
          if (grid[i][j].color === currentColor) {
            count++;
          } else {
            if (count >= 3) {
              for (let k = j - count; k < j; k++) {
                matches.push({row: i, col: k});
              }
            }
            count = 1;
            currentColor = grid[i][j].color;
          }
        }
        if (count >= 3) {
          for (let k = gridSize - count; k < gridSize; k++) {
            matches.push({row: i, col: k});
          }
        }
      }
      
      // 检查垂直匹配
      for (let j = 0; j < gridSize; j++) {
        let count = 1;
        let currentColor = grid[0][j].color;
        for (let i = 1; i < gridSize; i++) {
          if (grid[i][j].color === currentColor) {
            count++;
          } else {
            if (count >= 3) {
              for (let k = i - count; k < i; k++) {
                matches.push({row: k, col: j});
              }
            }
            count = 1;
            currentColor = grid[i][j].color;
          }
        }
        if (count >= 3) {
          for (let k = gridSize - count; k < gridSize; k++) {
            matches.push({row: k, col: j});
          }
        }
      }
      
      return matches;
    }
    
    function removeMatches(matches) {
      matches.forEach(match => {
        grid[match.row][match.col].color = null;
      });
      score += matches.length * 10;
      updateStats();
    }
    
    function dropGems() {
      for (let j = 0; j < gridSize; j++) {
        let writeIndex = gridSize - 1;
        for (let i = gridSize - 1; i >= 0; i--) {
          if (grid[i][j].color !== null) {
            if (i !== writeIndex) {
              grid[writeIndex][j].color = grid[i][j].color;
              grid[i][j].color = null;
            }
            writeIndex--;
          }
        }
        
        // 填充新的宝石
        for (let i = 0; i <= writeIndex; i++) {
          grid[i][j].color = colors[Math.floor(Math.random() * colors.length)];
        }
      }
    }
    
    function swapCells(row1, col1, row2, col2) {
      const temp = grid[row1][col1].color;
      grid[row1][col1].color = grid[row2][col2].color;
      grid[row2][col2].color = temp;
    }
    
    function isAdjacent(row1, col1, row2, col2) {
      const dr = Math.abs(row1 - row2);
      const dc = Math.abs(col1 - col2);
      return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
    }
    
    canvas.addEventListener('click', function(e) {
      if (moves <= 0) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        if (!selectedCell) {
          selectedCell = {row, col};
        } else if (selectedCell.row === row && selectedCell.col === col) {
          selectedCell = null;
        } else if (isAdjacent(selectedCell.row, selectedCell.col, row, col)) {
          swapCells(selectedCell.row, selectedCell.col, row, col);
          const matches = findMatches();
          
          if (matches.length > 0) {
            moves--;
            removeMatches(matches);
            dropGems();
            
            // 继续查找匹配
            setTimeout(function checkCascade() {
              const newMatches = findMatches();
              if (newMatches.length > 0) {
                removeMatches(newMatches);
                dropGems();
                setTimeout(checkCascade, 300);
              }
              drawGrid();
            }, 300);
          } else {
            // 撤销无效移动
            swapCells(selectedCell.row, selectedCell.col, row, col);
          }
          
          selectedCell = null;
        } else {
          selectedCell = {row, col};
        }
        
        drawGrid();
        
        if (moves <= 0) {
          setTimeout(() => {
            alert('Game Over! Final Score: ' + score);
          }, 500);
        }
      }
    });
    
    startBtn.addEventListener('click', initGrid);
    hintBtn.addEventListener('click', () => {
      // 简单提示功能
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize - 1; j++) {
          swapCells(i, j, i, j + 1);
          if (findMatches().length > 0) {
            selectedCell = {row: i, col: j};
            drawGrid();
            setTimeout(() => {
              selectedCell = null;
              swapCells(i, j, i, j + 1);
              drawGrid();
            }, 1000);
            return;
          }
          swapCells(i, j, i, j + 1);
        }
      }
    });
    
    initGrid();
  }, 100);
})();
</script>`;
};

// 数独游戏
const generateSudokuGame = (gameId: string, title: string, icon: string): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 25px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%); border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); width: 100%; min-height: 650px;">
  <h2 style="margin: 0 0 25px 0; color: white; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${icon} ${title}</h2>
  
  <div style="background: white; padding: 15px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="450" height="450" style="border-radius: 6px; display: block; cursor: pointer;"></canvas>
  </div>
  
  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
    <button id="startBtn${gameId}" style="padding: 15px 30px; background: #00b894; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">New Game</button>
    <button id="checkBtn${gameId}" style="padding: 15px 30px; background: #0984e3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Check</button>
    <button id="solveBtn${gameId}" style="padding: 15px 30px; background: #e17055; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Solve</button>
  </div>
  
  <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
    <div style="display: flex; gap: 30px; align-items: center;">
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">DIFFICULTY</div>
        <div id="difficulty${gameId}" style="font-size: 20px; font-weight: bold; color: #2c3e50;">Easy</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">ERRORS</div>
        <div id="errors${gameId}" style="font-size: 20px; font-weight: bold; color: #e74c3c;">0</div>
      </div>
    </div>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
    <button class="numberBtn${gameId}" data-number="1" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">1</button>
    <button class="numberBtn${gameId}" data-number="2" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">2</button>
    <button class="numberBtn${gameId}" data-number="3" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">3</button>
    <button class="numberBtn${gameId}" data-number="4" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">4</button>
    <button class="numberBtn${gameId}" data-number="5" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">5</button>
    <button class="numberBtn${gameId}" data-number="6" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">6</button>
    <button class="numberBtn${gameId}" data-number="7" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">7</button>
    <button class="numberBtn${gameId}" data-number="8" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">8</button>
    <button class="numberBtn${gameId}" data-number="9" style="padding: 10px 15px; background: #74b9ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">9</button>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const checkBtn = document.getElementById('checkBtn${gameId}');
    const solveBtn = document.getElementById('solveBtn${gameId}');
    const numberBtns = document.querySelectorAll('.numberBtn${gameId}');
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const cellSize = 50;
    let grid = Array(9).fill().map(() => Array(9).fill(0));
    let solution = Array(9).fill().map(() => Array(9).fill(0));
    let selectedCell = null;
    let errors = 0;
    
    function updateStats() {
      document.getElementById('errors${gameId}').textContent = errors;
    }
    
    function isValid(grid, row, col, num) {
      // 检查行
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) return false;
      }
      
      // 检查列
      for (let x = 0; x < 9; x++) {
        if (grid[x][col] === num) return false;
      }
      
      // 检查3x3方格
      const startRow = row - row % 3;
      const startCol = col - col % 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + startRow][j + startCol] === num) return false;
        }
      }
      
      return true;
    }
    
    function solveSudoku(grid) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(grid, row, col, num)) {
                grid[row][col] = num;
                if (solveSudoku(grid)) return true;
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }
    
    function generateSudoku() {
      // 创建完整的数独
      const newGrid = Array(9).fill().map(() => Array(9).fill(0));
      
      // 填充对角线的3x3方格
      for (let i = 0; i < 9; i += 3) {
        fillBox(newGrid, i, i);
      }
      
      solveSudoku(newGrid);
      solution = newGrid.map(row => [...row]);
      
      // 移除一些数字创建谜题
      const puzzle = newGrid.map(row => [...row]);
      const cellsToRemove = 40; // 简单难度
      
      for (let i = 0; i < cellsToRemove; i++) {
        let row, col;
        do {
          row = Math.floor(Math.random() * 9);
          col = Math.floor(Math.random() * 9);
        } while (puzzle[row][col] === 0);
        puzzle[row][col] = 0;
      }
      
      return puzzle;
    }
    
    function fillBox(grid, row, col) {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          grid[row + i][col + j] = numbers[randomIndex];
          numbers.splice(randomIndex, 1);
        }
      }
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制网格
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 9; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, 450);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(450, i * cellSize);
        ctx.stroke();
      }
      
      // 绘制粗线分隔3x3方格
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      for (let i = 0; i <= 9; i += 3) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, 450);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(450, i * cellSize);
        ctx.stroke();
      }
      
      // 绘制数字
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          const x = col * cellSize + cellSize / 2;
          const y = row * cellSize + cellSize / 2;
          
          if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
            ctx.fillStyle = '#74b9ff';
            ctx.fillRect(col * cellSize + 1, row * cellSize + 1, cellSize - 2, cellSize - 2);
          }
          
          if (grid[row][col] !== 0) {
            ctx.fillStyle = '#2c3e50';
            ctx.fillText(grid[row][col].toString(), x, y);
          }
        }
      }
    }
    
    function checkSolution() {
      let correct = true;
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0 || grid[row][col] !== solution[row][col]) {
            correct = false;
            break;
          }
        }
        if (!correct) break;
      }
      
      if (correct) {
        alert('Congratulations! You solved the Sudoku!');
      } else {
        alert('Not quite right. Keep trying!');
      }
    }
    
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      
      if (row >= 0 && row < 9 && col >= 0 && col < 9) {
        selectedCell = {row, col};
        drawGrid();
      }
    });
    
    numberBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        if (selectedCell) {
          const number = parseInt(this.dataset.number);
          const row = selectedCell.row;
          const col = selectedCell.col;
          
          grid[row][col] = number;
          
          if (!isValid(grid, row, col, number) && grid[row][col] !== 0) {
            errors++;
            updateStats();
          }
          
          drawGrid();
        }
      });
    });
    
    startBtn.addEventListener('click', function() {
      grid = generateSudoku();
      selectedCell = null;
      errors = 0;
      updateStats();
      drawGrid();
    });
    
    checkBtn.addEventListener('click', checkSolution);
    
    solveBtn.addEventListener('click', function() {
      grid = solution.map(row => [...row]);
      drawGrid();
    });
    
    // 初始化游戏
    grid = generateSudoku();
    updateStats();
    drawGrid();
  }, 100);
})();
</script>`;
};

// 模拟类游戏 - 管理建设类
const generateSimulationGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="600" height="500" style="border: 2px solid #3b82f6; border-radius: 12px; display: block; cursor: pointer;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #3b82f6, #1e40af); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(59,130,246,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(59,130,246,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(59,130,246,0.4)';">Start Business</button>
    <button id="upgradeBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(16,185,129,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Upgrade</button>
    <button id="resetBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">MONEY</div>
      <div id="money${gameId}" style="font-size: 32px; font-weight: 900; color: #059669;">$1,000</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">INCOME</div>
      <div id="income${gameId}" style="font-size: 32px; font-weight: 900; color: #3b82f6;">$0/sec</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">BUILDINGS</div>
      <div id="buildings${gameId}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click to place buildings and grow your business empire. Earn money automatically, upgrade your buildings for higher income, and watch your ${title.toLowerCase()} flourish! Strategic placement and smart investments are key to success.</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let money = 1000;
    let income = 0;
    let buildings = [];
    let gameRunning = false;
    let lastIncomeTime = Date.now();
    let animationId;
    
    const buildingTypes = [
      {name: 'Shop', cost: 100, income: 1, color: '#ef4444', size: 40},
      {name: 'Office', cost: 500, income: 5, color: '#3b82f6', size: 50},
      {name: 'Factory', cost: 2000, income: 20, color: '#8b5cf6', size: 60},
      {name: 'Tower', cost: 10000, income: 100, color: '#f59e0b', size: 80}
    ];
    
    function updateUI() {
      document.getElementById('money${gameId}').textContent = '$' + money.toLocaleString();
      document.getElementById('income${gameId}').textContent = '$' + income + '/sec';
      document.getElementById('buildings${gameId}').textContent = buildings.length;
    }
    
    function drawGame() {
      ctx.fillStyle = '#f0f9ff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = '#e0e7ff';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw buildings
      buildings.forEach((building, index) => {
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, building.y, building.size, building.size);
        
        // Building shadow
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(building.x + 2, building.y + 2, building.size, building.size);
        
        // Building main body
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, building.y, building.size, building.size);
        
        // Building details
        ctx.fillStyle = 'white';
        ctx.fillRect(building.x + 5, building.y + 5, building.size - 10, building.size - 10);
        
        // Building windows
        ctx.fillStyle = building.color;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            ctx.fillRect(
              building.x + 8 + i * (building.size - 16) / 3,
              building.y + 8 + j * (building.size - 16) / 3,
              (building.size - 16) / 5,
              (building.size - 16) / 5
            );
          }
        }
        
        // Income indicator
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('+$' + building.income, building.x + building.size/2, building.y - 5);
      });
      
      // Instructions when no buildings
      if (buildings.length === 0 && !gameRunning) {
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 40);
        ctx.font = '16px Arial';
        ctx.fillStyle = '#6b7280';
        ctx.fillText('Click to place your first building!', canvas.width/2, canvas.height/2);
        ctx.fillText('Build your business empire and earn money!', canvas.width/2, canvas.height/2 + 25);
      }
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      const now = Date.now();
      if (now - lastIncomeTime >= 1000) {
        money += income;
        lastIncomeTime = now;
        updateUI();
      }
      
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function getBuildingType() {
      for (let i = buildingTypes.length - 1; i >= 0; i--) {
        if (money >= buildingTypes[i].cost) {
          return buildingTypes[i];
        }
      }
      return buildingTypes[0];
    }
    
    function startGame() {
      gameRunning = true;
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      money = 1000;
      income = 0;
      buildings = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      drawGame();
    }
    
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const buildingType = getBuildingType();
      
      if (money >= buildingType.cost) {
        // Check if position is free
        const gridX = Math.floor(x / 50) * 50;
        const gridY = Math.floor(y / 50) * 50;
        
        const collision = buildings.some(building => 
          Math.abs(building.x - gridX) < 50 && Math.abs(building.y - gridY) < 50
        );
        
        if (!collision && gridX + buildingType.size < canvas.width && gridY + buildingType.size < canvas.height) {
          money -= buildingType.cost;
          income += buildingType.income;
          
          buildings.push({
            x: gridX,
            y: gridY,
            ...buildingType
          });
          
          updateUI();
          
          if (!gameRunning) {
            startGame();
          }
        }
      }
    });
    
    document.getElementById('startBtn${gameId}').addEventListener('click', startGame);
    document.getElementById('upgradeBtn${gameId}').addEventListener('click', function() {
      if (buildings.length > 0 && money >= 1000) {
        money -= 1000;
        buildings.forEach(building => {
          building.income *= 1.5;
          income = buildings.reduce((sum, b) => sum + b.income, 0);
        });
        updateUI();
      }
    });
    document.getElementById('resetBtn${gameId}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
</script>`;
};

// 其他游戏类型继续...
const generateAdventureGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="600" height="500" style="border: 2px solid #10b981; border-radius: 12px; display: block; background: #1a2e05;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(16,185,129,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(16,185,129,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(16,185,129,0.4)';">Start Adventure</button>
    <button id="mapBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Map</button>
    <button id="resetBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TREASURES</div>
      <div id="treasures${gameId}" style="font-size: 32px; font-weight: 900; color: #f59e0b;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">HEALTH</div>
      <div id="health${gameId}" style="font-size: 32px; font-weight: 900; color: #ef4444;">100</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
      <div id="level${gameId}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">1</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Use <strong>WASD</strong> or <strong>Arrow Keys</strong> to move your character. Explore the mysterious world, collect treasures, avoid enemies, and discover hidden secrets. The further you venture, the greater the rewards!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
    let treasures = [];
    let enemies = [];
    let obstacles = [];
    let score = 0;
    let level = 1;
    let animationId;
    let keys = {};
    
    function generateLevel() {
      treasures = [];
      enemies = [];
      obstacles = [];
      
      // Generate treasures
      for (let i = 0; i < 5 + level; i++) {
        treasures.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: Math.random() * (canvas.height - 40) + 20,
          size: 15,
          color: '#f59e0b',
          value: 10 + level * 5
        });
      }
      
      // Generate enemies
      for (let i = 0; i < 2 + level; i++) {
        enemies.push({
          x: Math.random() * (canvas.width - 30) + 15,
          y: Math.random() * (canvas.height - 30) + 15,
          size: 18,
          speed: 1 + level * 0.3,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: '#ef4444'
        });
      }
      
      // Generate obstacles
      for (let i = 0; i < 8 + level * 2; i++) {
        obstacles.push({
          x: Math.random() * (canvas.width - 60) + 30,
          y: Math.random() * (canvas.height - 60) + 30,
          width: 30 + Math.random() * 40,
          height: 30 + Math.random() * 40,
          color: '#374151'
        });
      }
    }
    
    function updateUI() {
      document.getElementById('treasures${gameId}').textContent = score;
      document.getElementById('health${gameId}').textContent = player.health;
      document.getElementById('level${gameId}').textContent = level;
    }
    
    function drawGame() {
      // Background with parallax effect
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
      gradient.addColorStop(0, '#065f46');
      gradient.addColorStop(1, '#1a2e05');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(16,185,129,0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw obstacles
      obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.strokeStyle = '#6b7280';
        ctx.lineWidth = 2;
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
      
      // Draw treasures with glow effect
      treasures.forEach(treasure => {
        ctx.shadowColor = treasure.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = treasure.color;
        ctx.beginPath();
        ctx.arc(treasure.x, treasure.y, treasure.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Treasure sparkle
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(treasure.x - 5, treasure.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(treasure.x + 5, treasure.y + 5, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });
      
      // Draw enemies with animation
      enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Enemy eyes
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(enemy.x - 5, enemy.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(enemy.x + 5, enemy.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(enemy.x - 5, enemy.y - 5, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(enemy.x + 5, enemy.y - 5, 1, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw player with animation
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Player details
      ctx.fillStyle = '#1e40af';
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size - 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Player face
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(player.x - 5, player.y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(player.x + 5, player.y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Health bar
      const healthBarWidth = (player.health / 100) * 60;
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(player.x - 30, player.y - 35, 60, 6);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(player.x - 30, player.y - 35, healthBarWidth, 6);
      
      // Instructions when not running
      if (!gameRunning) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 60);
        ctx.font = '18px Arial';
        ctx.fillText('An Epic Adventure Awaits!', canvas.width/2, canvas.height/2 - 20);
        ctx.font = '16px Arial';
        ctx.fillText('Use WASD or Arrow Keys to move', canvas.width/2, canvas.height/2 + 20);
        ctx.fillText('Collect treasures and avoid enemies!', canvas.width/2, canvas.height/2 + 45);
      }
    }
    
    function checkCollisions() {
      // Check treasure collection
      treasures = treasures.filter(treasure => {
        const dx = player.x - treasure.x;
        const dy = player.y - treasure.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < player.size + treasure.size) {
          score += treasure.value;
          return false;
        }
        return true;
      });
      
      // Check enemy collisions
      enemies.forEach(enemy => {
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < player.size + enemy.size) {
          player.health -= 2;
          if (player.health <= 0) {
            gameRunning = false;
            alert('Game Over! You collected ' + score + ' treasures!');
          }
        }
      });
      
      // Check if level complete
      if (treasures.length === 0) {
        level++;
        player.health = Math.min(100, player.health + 20);
        generateLevel();
      }
    }
    
    function updateEntities() {
      // Update enemies
      enemies.forEach(enemy => {
        enemy.x += enemy.vx;
        enemy.y += enemy.vy;
        
        if (enemy.x <= enemy.size || enemy.x >= canvas.width - enemy.size) {
          enemy.vx *= -1;
        }
        if (enemy.y <= enemy.size || enemy.y >= canvas.height - enemy.size) {
          enemy.vy *= -1;
        }
        
        // Simple AI - move towards player occasionally
        if (Math.random() < 0.02) {
          const dx = player.x - enemy.x;
          const dy = player.y - enemy.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0) {
            enemy.vx += (dx / distance) * 0.1;
            enemy.vy += (dy / distance) * 0.1;
          }
        }
        
        // Limit speed
        const speed = Math.sqrt(enemy.vx * enemy.vx + enemy.vy * enemy.vy);
        if (speed > enemy.speed) {
          enemy.vx = (enemy.vx / speed) * enemy.speed;
          enemy.vy = (enemy.vy / speed) * enemy.speed;
        }
      });
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      // Handle player movement
      if (keys['ArrowUp'] || keys['KeyW']) {
        player.y = Math.max(player.size, player.y - player.speed);
      }
      if (keys['ArrowDown'] || keys['KeyS']) {
        player.y = Math.min(canvas.height - player.size, player.y + player.speed);
      }
      if (keys['ArrowLeft'] || keys['KeyA']) {
        player.x = Math.max(player.size, player.x - player.speed);
      }
      if (keys['ArrowRight'] || keys['KeyD']) {
        player.x = Math.min(canvas.width - player.size, player.x + player.speed);
      }
      
      // Check obstacle collisions
      obstacles.forEach(obstacle => {
        if (player.x + player.size > obstacle.x && 
            player.x - player.size < obstacle.x + obstacle.width &&
            player.y + player.size > obstacle.y && 
            player.y - player.size < obstacle.y + obstacle.height) {
          // Simple collision response
          const overlapX = Math.min(player.x + player.size - obstacle.x, obstacle.x + obstacle.width - (player.x - player.size));
          const overlapY = Math.min(player.y + player.size - obstacle.y, obstacle.y + obstacle.height - (player.y - player.size));
          
          if (overlapX < overlapY) {
            player.x += player.x < obstacle.x + obstacle.width/2 ? -overlapX : overlapX;
          } else {
            player.y += player.y < obstacle.y + obstacle.height/2 ? -overlapY : overlapY;
          }
        }
      });
      
      updateEntities();
      checkCollisions();
      updateUI();
      drawGame();
      
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      gameRunning = true;
      player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
      score = 0;
      level = 1;
      generateLevel();
      updateUI();
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
      score = 0;
      level = 1;
      treasures = [];
      enemies = [];
      obstacles = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      drawGame();
    }
    
    // Event listeners
    document.addEventListener('keydown', function(e) {
      keys[e.code] = true;
    });
    
    document.addEventListener('keyup', function(e) {
      keys[e.code] = false;
    });
    
    document.getElementById('startBtn${gameId}').addEventListener('click', startGame);
    document.getElementById('mapBtn${gameId}').addEventListener('click', function() {
      if (gameRunning) {
        alert('Current Level: ' + level + '\\nTreasures Remaining: ' + treasures.length + '\\nEnemies: ' + enemies.length);
      }
    });
    document.getElementById('resetBtn${gameId}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
</script>`;
};

// 继续其他游戏类型...

// 休闲类游戏 - 简单有趣的点击和反应游戏
const generateCasualGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="600" height="500" style="border: 2px solid #f59e0b; border-radius: 12px; display: block; background: linear-gradient(135deg, #fef3c7, #fed7aa);"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(245,158,11,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(245,158,11,0.4)';">Start Game</button>
    <button id="pauseBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(139,92,246,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Pause</button>
    <button id="resetBtn${gameId}" style="padding: 18px 36px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${gameId}" style="font-size: 32px; font-weight: 900; color: #d97706;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TIME</div>
      <div id="time${gameId}" style="font-size: 32px; font-weight: 900; color: #ef4444;">60</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">COMBO</div>
      <div id="combo${gameId}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">0x</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click on the moving targets to score points! Quick successive hits build combos for bonus points. Race against time to achieve the highest score possible. Each target has different point values!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let paused = false;
    let score = 0;
    let timeLeft = 60;
    let combo = 0;
    let lastHitTime = 0;
    let targets = [];
    let particles = [];
    let animationId;
    let gameTimer;
    let targetSpawnTimer;
    
    const targetTypes = [
      {size: 30, color: '#ef4444', points: 10, speed: 2},
      {size: 25, color: '#f59e0b', points: 15, speed: 3},
      {size: 20, color: '#10b981', points: 25, speed: 4},
      {size: 15, color: '#3b82f6', points: 50, speed: 5},
      {size: 12, color: '#8b5cf6', points: 100, speed: 6}
    ];
    
    function createTarget() {
      const type = targetTypes[Math.floor(Math.random() * targetTypes.length)];
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      
      switch(side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -type.size;
          vx = (Math.random() - 0.5) * type.speed;
          vy = type.speed;
          break;
        case 1: // Right
          x = canvas.width + type.size;
          y = Math.random() * canvas.height;
          vx = -type.speed;
          vy = (Math.random() - 0.5) * type.speed;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + type.size;
          vx = (Math.random() - 0.5) * type.speed;
          vy = -type.speed;
          break;
        case 3: // Left
          x = -type.size;
          y = Math.random() * canvas.height;
          vx = type.speed;
          vy = (Math.random() - 0.5) * type.speed;
          break;
      }
      
      targets.push({
        x, y, vx, vy,
        size: type.size,
        color: type.color,
        points: type.points,
        life: 1.0,
        pulse: 0
      });
    }
    
    function createParticles(x, y, color, count = 8) {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 6 + 2,
          color: color,
          life: 1.0,
          decay: 0.02 + Math.random() * 0.02
        });
      }
    }
    
    function updateUI() {
      document.getElementById('score${gameId}').textContent = score.toLocaleString();
      document.getElementById('time${gameId}').textContent = timeLeft;
      document.getElementById('combo${gameId}').textContent = combo + 'x';
    }
    
    function drawGame() {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#fef3c7');
      gradient.addColorStop(1, '#fed7aa');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating background elements
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      for (let i = 0; i < 10; i++) {
        const x = (Date.now() * 0.01 + i * 50) % (canvas.width + 100) - 50;
        const y = 50 + Math.sin(Date.now() * 0.001 + i) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 10 + i * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw targets
      targets.forEach(target => {
        target.pulse += 0.1;
        const pulseSize = target.size + Math.sin(target.pulse) * 3;
        
        // Target glow
        ctx.shadowColor = target.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = target.color;
        ctx.globalAlpha = target.life;
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Target center
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Target outline
        ctx.strokeStyle = target.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.globalAlpha = 1;
      });
      
      // Draw particles
      particles.forEach(particle => {
        ctx.globalAlpha = particle.life;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      
      // Draw combo indicator
      if (combo > 1) {
        ctx.fillStyle = '#8b5cf6';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(\`COMBO x\${combo}\`, canvas.width/2, 50);
        
        // Combo glow effect
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 10;
        ctx.fillText(\`COMBO x\${combo}\`, canvas.width/2, 50);
        ctx.shadowBlur = 0;
      }
      
      // Game over or pause overlay
      if (!gameRunning || paused) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        
        if (paused) {
          ctx.fillText('PAUSED', canvas.width/2, canvas.height/2);
        } else if (timeLeft <= 0) {
          ctx.fillText('TIME UP!', canvas.width/2, canvas.height/2 - 40);
          ctx.font = '24px Arial';
          ctx.fillText(\`Final Score: \${score.toLocaleString()}\`, canvas.width/2, canvas.height/2 + 20);
        } else {
          ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 40);
          ctx.font = '18px Arial';
          ctx.fillText('Click targets to score points!', canvas.width/2, canvas.height/2 + 20);
          ctx.fillText('Quick hits build combos!', canvas.width/2, canvas.height/2 + 45);
        }
      }
    }
    
    function gameLoop() {
      if (!gameRunning || paused) {
        drawGame();
        animationId = requestAnimationFrame(gameLoop);
        return;
      }
      
      // Update targets
      targets = targets.filter(target => {
        target.x += target.vx;
        target.y += target.vy;
        target.life -= 0.005; // Fade out over time
        
        // Remove targets that are off screen or faded
        return target.life > 0 && 
               target.x > -target.size - 50 && 
               target.x < canvas.width + target.size + 50 &&
               target.y > -target.size - 50 && 
               target.y < canvas.height + target.size + 50;
      });
      
      // Update particles
      particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.life -= particle.decay;
        particle.size *= 0.99;
        
        return particle.life > 0 && particle.size > 0.5;
      });
      
      // Check combo timeout
      if (Date.now() - lastHitTime > 1500) {
        combo = 0;
      }
      
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      gameRunning = true;
      paused = false;
      score = 0;
      timeLeft = 60;
      combo = 0;
      targets = [];
      particles = [];
      lastHitTime = Date.now();
      
      updateUI();
      
      // Game timer
      gameTimer = setInterval(() => {
        if (!paused && gameRunning) {
          timeLeft--;
          updateUI();
          
          if (timeLeft <= 0) {
            gameRunning = false;
            clearInterval(gameTimer);
            clearInterval(targetSpawnTimer);
          }
        }
      }, 1000);
      
      // Target spawning
      targetSpawnTimer = setInterval(() => {
        if (!paused && gameRunning) {
          createTarget();
        }
      }, 800 - Math.min(score / 100, 600)); // Spawn faster as score increases
      
      gameLoop();
    }
    
    function pauseGame() {
      paused = !paused;
      document.getElementById('pauseBtn${gameId}').textContent = paused ? 'Resume' : 'Pause';
    }
    
    function resetGame() {
      gameRunning = false;
      paused = false;
      score = 0;
      timeLeft = 60;
      combo = 0;
      targets = [];
      particles = [];
      
      if (gameTimer) clearInterval(gameTimer);
      if (targetSpawnTimer) clearInterval(targetSpawnTimer);
      if (animationId) cancelAnimationFrame(animationId);
      
      document.getElementById('pauseBtn${gameId}').textContent = 'Pause';
      updateUI();
      drawGame();
    }
    
    canvas.addEventListener('click', function(e) {
      if (!gameRunning || paused) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      let hit = false;
      
      targets = targets.filter(target => {
        const dx = clickX - target.x;
        const dy = clickY - target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= target.size) {
          // Hit target
          const now = Date.now();
          if (now - lastHitTime < 1000) {
            combo++;
          } else {
            combo = 1;
          }
          lastHitTime = now;
          
          const comboBonus = Math.floor(combo / 5) * 10;
          const points = target.points + comboBonus;
          score += points;
          
          // Create hit particles
          createParticles(target.x, target.y, target.color, 12);
          
          // Show point popup
          particles.push({
            x: target.x,
            y: target.y - 20,
            vx: 0,
            vy: -2,
            size: 16,
            color: target.color,
            life: 2.0,
            decay: 0.02,
            text: '+' + points
          });
          
          updateUI();
          hit = true;
          return false; // Remove target
        }
        return true; // Keep target
      });
      
      if (!hit) {
        // Missed - reset combo
        combo = 0;
        updateUI();
        
        // Create miss effect
        createParticles(clickX, clickY, '#6b7280', 4);
      }
    });
    
    document.getElementById('startBtn${gameId}').addEventListener('click', startGame);
    document.getElementById('pauseBtn${gameId}').addEventListener('click', pauseGame);
    document.getElementById('resetBtn${gameId}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
</script>`;
};

// 创意类游戏 - 绘画和创作类
const generateCreativeGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${icon} ${title}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${gameId}" width="600" height="500" style="border: 2px solid #8b5cf6; border-radius: 12px; display: block; background: white; cursor: crosshair;"></canvas>
  </div>
  
  <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; justify-content: center;">
    <button id="brushBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(139,92,246,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Brush</button>
    <button id="eraserBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Eraser</button>
    <button id="sprayBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(16,185,129,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Spray</button>
    <button id="fillBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Fill</button>
    <button id="blurBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #6b7280, #4b5563); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(107,114,128,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Blur</button>
    <button id="clearBtn${gameId}" style="padding: 12px 24px; background: linear-gradient(45deg, #374151, #1f2937); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(55,65,81,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Clear</button>
  </div>
  
  <div style="display: flex; gap: 30px; margin-bottom: 25px; align-items: center; flex-wrap: wrap; justify-content: center;">
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Brush Size</label>
      <input type="range" id="brushSize${gameId}" min="1" max="50" value="10" style="width: 120px; accent-color: #8b5cf6;">
      <span id="sizeDisplay${gameId}" style="display: block; text-align: center; margin-top: 5px; font-size: 14px; color: #666; font-weight: bold;">10px</span>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Opacity</label>
      <input type="range" id="brushOpacity${gameId}" min="0.1" max="1" step="0.1" value="1" style="width: 120px; accent-color: #8b5cf6;">
      <span id="opacityDisplay${gameId}" style="display: block; text-align: center; margin-top: 5px; font-size: 14px; color: #666; font-weight: bold;">100%</span>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Color</label>
      <input type="color" id="colorPicker${gameId}" value="#8b5cf6" style="width: 60px; height: 40px; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    </div>
  </div>
  
  <div style="display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; justify-content: center;">
    <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #333; margin-bottom: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Quick Colors</div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
        <div class="colorSwatch" data-color="#ef4444" style="width: 25px; height: 25px; background: #ef4444; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#f59e0b" style="width: 25px; height: 25px; background: #f59e0b; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#10b981" style="width: 25px; height: 25px; background: #10b981; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#3b82f6" style="width: 25px; height: 25px; background: #3b82f6; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#8b5cf6" style="width: 25px; height: 25px; background: #8b5cf6; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#ec4899" style="width: 25px; height: 25px; background: #ec4899; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#000000" style="width: 25px; height: 25px; background: #000000; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#ffffff" style="width: 25px; height: 25px; background: #ffffff; border-radius: 6px; cursor: pointer; border: 2px solid #ccc; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
      </div>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #333; margin-bottom: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Actions</div>
      <div style="display: flex; gap: 8px;">
        <button id="undoBtn${gameId}" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">Undo</button>
        <button id="redoBtn${gameId}" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">Redo</button>
        <button id="saveBtn${gameId}" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">Save</button>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">DIGITAL ART STUDIO</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Create amazing digital artwork with professional drawing tools! Use different brushes, adjust opacity, blend colors, and apply effects. Your creativity is the only limit!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentTool = 'brush';
    let currentColor = '#8b5cf6';
    let currentSize = 10;
    let currentOpacity = 1;
    let lastX = 0;
    let lastY = 0;
    let history = [];
    let historyStep = -1;
    
    // Save initial state
    function saveState() {
      historyStep++;
      if (historyStep < history.length) {
        history.length = historyStep;
      }
      history.push(canvas.toDataURL());
    }
    
    function undo() {
      if (historyStep > 0) {
        historyStep--;
        const img = new Image();
        img.src = history[historyStep];
        img.onload = function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    }
    
    function redo() {
      if (historyStep < history.length - 1) {
        historyStep++;
        const img = new Image();
        img.src = history[historyStep];
        img.onload = function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    }
    
    function setTool(tool) {
      currentTool = tool;
      
      // Update button styles
      document.querySelectorAll('[id*="Btn${gameId}"]').forEach(btn => {
        if (btn.id.includes('brush') || btn.id.includes('eraser') || btn.id.includes('spray') || btn.id.includes('fill') || btn.id.includes('blur')) {
          btn.style.opacity = '0.7';
          btn.style.transform = 'scale(1)';
        }
      });
      
      document.getElementById(tool + 'Btn${gameId}').style.opacity = '1';
      document.getElementById(tool + 'Btn${gameId}').style.transform = 'scale(1.05)';
      
      // Update cursor
      switch(tool) {
        case 'brush':
          canvas.style.cursor = 'crosshair';
          break;
        case 'eraser':
          canvas.style.cursor = 'grab';
          break;
        case 'spray':
          canvas.style.cursor = 'crosshair';
          break;
        case 'fill':
          canvas.style.cursor = 'pointer';
          break;
        case 'blur':
          canvas.style.cursor = 'move';
          break;
      }
    }
    
    function updateUI() {
      document.getElementById('sizeDisplay${gameId}').textContent = currentSize + 'px';
      document.getElementById('opacityDisplay${gameId}').textContent = Math.round(currentOpacity * 100) + '%';
    }
    
    function draw(e) {
      if (!isDrawing && currentTool !== 'spray') return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.globalAlpha = currentOpacity;
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;
      ctx.lineWidth = currentSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      switch(currentTool) {
        case 'brush':
          ctx.globalCompositeOperation = 'source-over';
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(x, y);
          ctx.stroke();
          break;
          
        case 'eraser':
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(x, y, currentSize/2, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'spray':
          ctx.globalCompositeOperation = 'source-over';
          for (let i = 0; i < 20; i++) {
            const offsetX = (Math.random() - 0.5) * currentSize;
            const offsetY = (Math.random() - 0.5) * currentSize;
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
          
        case 'blur':
          const imageData = ctx.getImageData(x - currentSize/2, y - currentSize/2, currentSize, currentSize);
          const data = imageData.data;
          
          // Simple blur effect
          for (let i = 0; i < data.length; i += 4) {
            data[i] = (data[i] + data[i + 4] + data[i - 4]) / 3;     // Red
            data[i + 1] = (data[i + 1] + data[i + 5] + data[i - 3]) / 3; // Green
            data[i + 2] = (data[i + 2] + data[i + 6] + data[i - 2]) / 3; // Blue
          }
          
          ctx.putImageData(imageData, x - currentSize/2, y - currentSize/2);
          break;
      }
      
      [lastX, lastY] = [x, y];
    }
    
    function floodFill(startX, startY, newColor) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const startIndex = (startY * canvas.width + startX) * 4;
      const startR = data[startIndex];
      const startG = data[startIndex + 1];
      const startB = data[startIndex + 2];
      
      const newR = parseInt(newColor.slice(1, 3), 16);
      const newG = parseInt(newColor.slice(3, 5), 16);
      const newB = parseInt(newColor.slice(5, 7), 16);
      
      if (startR === newR && startG === newG && startB === newB) return;
      
      const stack = [[startX, startY]];
      
      while (stack.length > 0) {
        const [x, y] = stack.pop();
        const index = (y * canvas.width + x) * 4;
        
        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
        if (data[index] !== startR || data[index + 1] !== startG || data[index + 2] !== startB) continue;
        
        data[index] = newR;
        data[index + 1] = newG;
        data[index + 2] = newB;
        data[index + 3] = 255;
        
        stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
      }
      
      ctx.putImageData(imageData, 0, 0);
    }
    
    // Event listeners
    canvas.addEventListener('mousedown', (e) => {
      if (currentTool === 'fill') {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);
        saveState();
        floodFill(x, y, currentColor);
        return;
      }
      
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
      saveState();
    });
    
    canvas.addEventListener('mousemove', draw);
    
    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    
    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
    });
    
    // Tool buttons
    document.getElementById('brushBtn${gameId}').addEventListener('click', () => setTool('brush'));
    document.getElementById('eraserBtn${gameId}').addEventListener('click', () => setTool('eraser'));
    document.getElementById('sprayBtn${gameId}').addEventListener('click', () => setTool('spray'));
    document.getElementById('fillBtn${gameId}').addEventListener('click', () => setTool('fill'));
    document.getElementById('blurBtn${gameId}').addEventListener('click', () => setTool('blur'));
    
    // Controls
    document.getElementById('brushSize${gameId}').addEventListener('input', (e) => {
      currentSize = e.target.value;
      updateUI();
    });
    
    document.getElementById('brushOpacity${gameId}').addEventListener('input', (e) => {
      currentOpacity = e.target.value;
      updateUI();
    });
    
    document.getElementById('colorPicker${gameId}').addEventListener('change', (e) => {
      currentColor = e.target.value;
    });
    
    // Quick color swatches
    document.querySelectorAll('.colorSwatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        currentColor = e.target.getAttribute('data-color');
        document.getElementById('colorPicker${gameId}').value = currentColor;
        
        // Update active swatch
        document.querySelectorAll('.colorSwatch').forEach(s => s.style.border = '2px solid transparent');
        if (currentColor === '#ffffff') {
          e.target.style.border = '2px solid #333';
        } else {
          e.target.style.border = '2px solid #fff';
        }
      });
    });
    
    // Action buttons
    document.getElementById('undoBtn${gameId}').addEventListener('click', undo);
    document.getElementById('redoBtn${gameId}').addEventListener('click', redo);
    document.getElementById('saveBtn${gameId}').addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'artwork.png';
      link.href = canvas.toDataURL();
      link.click();
    });
    
    document.getElementById('clearBtn${gameId}').addEventListener('click', () => {
      if (confirm('Clear the entire canvas? This cannot be undone.')) {
        saveState();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    });
    
    // Initialize
    setTool('brush');
    updateUI();
    
    // Set initial canvas background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveState();
  }, 100);
})();
</script>`;
};

// 自然类游戏 - 生态和环境模拟
const generateNatureGame = (gameId: string, title: string, icon: string, gameIndex: number): string => {
  return `
<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #4ade80 0%, #22d3ee 100%); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); width: 100%; height: 100%; min-height: 600px;">
  <h3 style="margin: 0 0 20px 0; color: white; font-size: 28px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${icon} ${title}</h3>
  <canvas id="${gameId}" width="600" height="400" style="border: 4px solid #ffffff; border-radius: 12px; background: #ecfdf5; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.2);"></canvas>
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="startBtn${gameId}" style="padding: 12px 24px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">Start Ecosystem</button>
    <button id="resetBtn${gameId}" style="padding: 12px 24px; background: #0891b2; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Reset Nature</button>
  </div>
  <div style="margin-top: 15px; display: flex; gap: 20px; align-items: center;">
    <p style="margin: 0; font-size: 18px; color: white; font-weight: bold;">Plants: <span id="score${gameId}" style="color: #fbbf24;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: white; font-weight: bold;">Animals: <span id="level${gameId}" style="color: #34d399;">0</span></p>
  </div>
  <p style="margin: 10px 0; font-size: 14px; color: #e5e7eb; text-align: center;">Click to plant seeds and create a thriving ecosystem! Watch nature grow!</p>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${gameId}');
    const startBtn = document.getElementById('startBtn${gameId}');
    const resetBtn = document.getElementById('resetBtn${gameId}');
    
    if (!canvas || !startBtn || !resetBtn) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let plants = [];
    let animals = [];
    let animationId;
    
    function updateUI() {
      const scoreEl = document.getElementById('score${gameId}');
      const levelEl = document.getElementById('level${gameId}');
      if (scoreEl) scoreEl.textContent = plants.length;
      if (levelEl) levelEl.textContent = animals.length;
    }
    
    function spawnPlant(x, y) {
      plants.push({
        x: x,
        y: y,
        size: 5,
        maxSize: 20 + Math.random() * 30,
        color: \`hsl(\${100 + Math.random() * 60}, 70%, 50%)\`,
        growth: 0.5 + Math.random() * 0.5
      });
    }
    
    function spawnAnimal() {
      if (plants.length > 5) {
        animals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 8 + Math.random() * 12,
          color: \`hsl(\${Math.random() * 60 + 20}, 60%, 40%)\`,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          energy: 100
        });
      }
    }
    
    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 背景
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#dbeafe');
      gradient.addColorStop(1, '#dcfce7');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 绘制植物
      plants.forEach(plant => {
        ctx.fillStyle = plant.color;
        ctx.beginPath();
        ctx.arc(plant.x, plant.y, plant.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 叶子
        ctx.fillStyle = plant.color;
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2;
          const leafX = plant.x + Math.cos(angle) * plant.size * 0.7;
          const leafY = plant.y + Math.sin(angle) * plant.size * 0.7;
          ctx.beginPath();
          ctx.arc(leafX, leafY, plant.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // 绘制动物
      animals.forEach(animal => {
        ctx.fillStyle = animal.color;
        ctx.beginPath();
        ctx.arc(animal.x, animal.y, animal.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 眼睛
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(animal.x - animal.size * 0.3, animal.y - animal.size * 0.3, animal.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(animal.x + animal.size * 0.3, animal.y - animal.size * 0.3, animal.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      // 植物生长
      plants.forEach(plant => {
        if (plant.size < plant.maxSize) {
          plant.size += plant.growth;
        }
      });
      
      // 动物移动
      animals = animals.filter(animal => {
        animal.x += animal.vx;
        animal.y += animal.vy;
        animal.energy -= 0.2;
        
        if (animal.x <= animal.size || animal.x >= canvas.width - animal.size) animal.vx *= -1;
        if (animal.y <= animal.size || animal.y >= canvas.height - animal.size) animal.vy *= -1;
        
        return animal.energy > 0;
      });
      
      // 随机生成动物
      if (Math.random() < 0.01) {
        spawnAnimal();
      }
      
      updateUI();
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      if (gameRunning) return;
      gameRunning = true;
      plants = [];
      animals = [];
      updateUI();
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      plants = [];
      animals = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#059669';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 20);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#0891b2';
      ctx.fillText('Create your own ecosystem!', canvas.width/2, canvas.height/2 + 20);
    }
    
    canvas.addEventListener('click', function(e) {
      if (!gameRunning) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      spawnPlant(clickX, clickY);
      updateUI();
    });
    
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);
    resetGame();
  }, 100);
})();
</script>`;
};

// 游戏说明函数
function getPuzzleInstruction(puzzleType: string): string {
  const instructions = {
    memory: 'Click cards to reveal numbers. Match pairs to score points!',
    number: 'Solve number puzzles and complete the pattern!',
    color: 'Match colors and create beautiful combinations!',
    pattern: 'Complete the pattern sequence to advance!'
  };
  return instructions[puzzleType as keyof typeof instructions] || 'Solve puzzles to test your brain power!';
}

// 游戏封面生成
const getGameCover = (category: string, title: string): string => {
  const colors = {
    puzzle: '#8b5cf6',
    simulation: '#06b6d4', 
    adventure: '#10b981',
    casual: '#f59e0b',
    creative: '#ec4899',
    nature: '#22c55e'
  };
  
  const color = colors[category as keyof typeof colors] || '#6b7280';
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity=0.8" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill="url(#grad)" rx="8"/>
      <text x="100" y="75" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">${title}</text>
      <text x="100" y="95" font-family="Arial" font-size="12" text-anchor="middle" fill="white" opacity="0.9">${category.toUpperCase()}</text>
    </svg>
  `)}`;
};

// 生成所有游戏数据
export const games: Game[] = [];

// 为每个分类生成30个游戏 - 英文名称
const gamesByCategory = {
  puzzle: [
    '2048', 'Tetris', 'Sudoku', 'Chess Master', 'Bubble Shooter', 'Solitaire', 'Mahjong', 'Word Search', 'Crossword', 'Jigsaw Puzzle',
    'Snake Game', 'Checkers', 'Minesweeper', 'FreeCell', 'Spider Solitaire', 'Block Puzzle', 'Match 3', 'Tangram', 'Nonogram', 'Logic Grid',
    'Number Link', 'Pattern Match', 'Color Lines', 'Brain Teaser', 'Mind Bender', 'Rubiks Cube', 'Pixel Art', 'Number Logic', 'Connect Lines', 'Memory Cards'
  ],
  simulation: [
    'City Builder', 'Farm Manager', 'Theme Park', 'Zoo Keeper', 'Restaurant Chef', 'Airport Control', 'Hospital Director', 'Train Conductor', 'Mall Manager', 'Gas Station',
    'Car Dealership', 'Hair Salon', 'Pizza Kitchen', 'Ice Cream Truck', 'Bakery Business', 'Taxi Company', 'Bus Route', 'Delivery Service', 'Factory Owner', 'Mining Tycoon',
    'Oil Drilling', 'Space Mission', 'Amusement Park', 'Grocery Store', 'Hotel Empire', 'Pet Daycare', 'Coffee House', 'Lemonade Stand', 'School Principal', 'Aquarium Keeper'
  ],
  adventure: [
    'Treasure Quest', 'Pirate Adventure', 'Jungle Explorer', 'Cave Explorer', 'Mountain Climber', 'Desert Wanderer', 'Space Odyssey', 'Ocean Diver', 'Castle Explorer', 'Dragon Hunter',
    'Knight Quest', 'Magic Academy', 'Ninja Adventure', 'Pirate Gold', 'Ancient Temple', 'Escape Room', 'Mystery House', 'Ghost Detective', 'Time Explorer', 'Alien World',
    'Hero Mission', 'Spy Operation', 'Dino Island', 'Enchanted Forest', 'Lost City', 'Robot Lab', 'Cyber City', 'Viking Journey', 'Samurai Path', 'Arctic Explorer'
  ],
  casual: [
    'Fruit Ninja', 'Angry Birds', 'Jumping Ball', 'Endless Runner', 'Subway Surfer', 'Sky Jumper', 'Cookie Clicker', 'Music Tiles', 'Geometry Dash', 'Tower Stack',
    'Ball Drop', 'Color Jump', 'Spiral Drop', 'Target Shooter', 'Flip Challenge', 'Paper Plane', 'Bubble Pop', 'Cut Rope', 'Brick Breaker', 'Pinball',
    'Pac Man', 'Frog Crossing', 'Space Shooter', 'Asteroid Dodge', 'Bug Blast', 'Paddle Game', 'Wall Breaker', 'Star Fighter', 'Shield Guard', 'Cube Jump'
  ],
  creative: [
    'Digital Canvas', 'Beat Studio', 'Story Writer', 'Animation Maker', 'Photo Editor', 'Brand Designer', 'Card Creator', 'Flag Maker', 'Ad Designer', 'Comic Studio',
    'Pixel Editor', 'Paint Studio', 'Design Builder', 'Color Mixer', 'Art Book', 'Video Maker', 'Audio Lab', 'Rhythm Creator', 'Tune Maker', 'Mix Master',
    'Gallery Curator', 'Fashion Designer', 'Interior Design', 'Landscape Planner', 'Building Designer', 'Sculpture Maker', 'Clay Studio', 'Jewelry Designer', 'Tattoo Artist', 'Beauty Studio'
  ],
  nature: [
    'Garden Designer', 'Forest Guardian', 'Marine Biologist', 'Peak Climber', 'Oasis Keeper', 'Jungle Guide', 'Polar Researcher', 'Safari Guide', 'Reef Explorer', 'Bird Watcher',
    'Butterfly Garden', 'Bee Farm', 'Mushroom Hunter', 'Flower Grower', 'Tree House', 'Wildlife Protector', 'Weather Tracker', 'Season Keeper', 'Eco Builder', 'Earth Guardian',
    'Planet Explorer', 'Star Observer', 'Lunar Explorer', 'Volcano Watcher', 'Earthquake Monitor', 'Wave Tracker', 'Storm Chaser', 'Tornado Tracker', 'Lightning Catcher', 'Aurora Seeker'
  ]
};

// 生成游戏数据
Object.entries(gamesByCategory).forEach(([category, gameNames]) => {
  const categoryIcon = categories.find(c => c.slug === category)?.icon || '🎮';
  
  gameNames.forEach((gameName, index) => {
    // Create detailed SEO-optimized descriptions
    let description = '';
    switch(category) {
      case 'puzzle':
        description = `Master ${gameName} - an addictive brain-training puzzle game that challenges your logic, strategic thinking, and problem-solving skills. Features smooth gameplay mechanics, progressive difficulty levels, and satisfying visual feedback. Perfect for puzzle enthusiasts who love mind-bending challenges that keep you engaged for hours. Sharpen your cognitive abilities while having fun with this professionally designed ${category} experience.`;
        break;
      case 'simulation':
        description = `Build and manage your own ${gameName} empire in this immersive simulation game. Experience realistic business mechanics, strategic decision-making, and resource management that puts you in control. Watch your virtual world grow and prosper as you make smart choices and overcome challenges. Ideal for strategy lovers who enjoy creative building, economic planning, and simulation gameplay that mirrors real-world experiences.`;
        break;
      case 'adventure':
        description = `Embark on an epic ${gameName} journey filled with discovery, exploration, and exciting quests. Navigate through beautifully crafted environments, solve mysteries, collect treasures, and uncover hidden secrets. Features intuitive controls, engaging storylines, and rewarding progression systems. Perfect for adventure seekers who love exploration games with rich narratives and immersive worlds to discover.`;
        break;
      case 'casual':
        description = `Enjoy ${gameName} - a fun and relaxing casual game designed for quick entertainment and stress relief. Features easy-to-learn controls, colorful graphics, and instantly engaging gameplay that's perfect for short breaks or extended play sessions. Offers satisfying progression, simple mechanics, and endless replayability. Ideal for players of all ages who want accessible, enjoyable gaming experiences.`;
        break;
      case 'creative':
        description = `Unleash your artistic potential with ${gameName} - a powerful creative tool that lets you express yourself through digital art, design, and imagination. Features professional-grade tools, intuitive interfaces, and unlimited creative possibilities. Whether you're a beginner or experienced creator, this game provides the perfect canvas for your artistic vision. Share your creations and explore endless creative possibilities.`;
        break;
      case 'nature':
        description = `Connect with the natural world through ${gameName} - an immersive nature experience that celebrates Earth's beauty and biodiversity. Explore stunning environments, learn about ecosystems, and participate in conservation efforts. Features realistic graphics, educational content, and peaceful gameplay that promotes environmental awareness. Perfect for nature lovers who want to experience the wonder of the natural world through interactive entertainment.`;
        break;
      default:
        description = `Experience ${gameName} - an engaging ${category} game with captivating gameplay and beautiful graphics. Perfect for players who enjoy ${category} entertainment and challenging fun!`;
    }

    games.push({
      id: `${category}-${index + 1}`,
      title: gameName,
      slug: gameName.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'),
      description: description,
      coverImage: getGameCover(category, gameName),
      categories: [category],
      controls: 'Mouse click controls - Click on moving objects to collect points and achieve high scores',
      popularityScore: Math.floor(Math.random() * 2000) + 3000,
      status: 'published' as const,
      publishedAt: new Date(2024, 0, Math.floor(Math.random() * 30) + 1).toISOString(),
      gameType: 'canvas' as const,
      gameCode: generateGameByCategory(gameName, category, categoryIcon, index),
      icon: categoryIcon
    });
  });
});

// 工具函数
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
};

// 生成超级创意完成弹窗
const generateLevelCompleteModal = (gameId: string, level: number, score: number, timeBonus: number = 0): string => {
  return `
    // 创建粒子爆炸效果
    function createParticleExplosion() {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = \`
          position: fixed;
          top: 50%;
          left: 50%;
          width: \${Math.random() * 8 + 4}px;
          height: \${Math.random() * 8 + 4}px;
          background: \${['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 8)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 10002;
          animation: explode \${1 + Math.random() * 2}s ease-out forwards;
        \`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 3000);
      }
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = \`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.5s ease;
      backdrop-filter: blur(15px);
    \`;
    
    modal.innerHTML = \`
      <div style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        border-radius: 30px;
        padding: 50px 40px;
        max-width: 480px;
        width: 90%;
        text-align: center;
        box-shadow: 0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1);
        transform: scale(0.3) rotateY(180deg);
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: relative;
        overflow: hidden;
      ">
        <!-- 动态背景 -->
        <div style="
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
          opacity: 0.3;
        "></div>
        
        <!-- 发光边框 -->
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
          background-size: 400% 400%;
          animation: rainbow 4s ease infinite;
          opacity: 0.3;
          filter: blur(2px);
        "></div>
        
        <div style="position: relative; z-index: 1;">
          <!-- 奖杯动画 -->
          <div style="
            font-size: 80px;
            margin-bottom: 25px;
            animation: trophyBounce 2s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(255,215,0,0.8));
          ">🏆</div>
          
          <!-- 标题 -->
          <div style="
            background: linear-gradient(45deg, #ffd700, #ffed4e, #fff, #ffd700);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            font-size: 42px;
            font-weight: 900;
            margin-bottom: 10px;
            text-shadow: 0 0 30px rgba(255,215,0,0.5);
            animation: shimmer 3s ease-in-out infinite;
          ">LEVEL \${level}</div>
          
          <div style="
            color: white;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 35px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            animation: pulse 2s ease-in-out infinite;
          ">🎯 COMPLETED! 🎯</div>
          
          <!-- 分数展示卡片 -->
          <div style="
            background: rgba(255,255,255,0.15);
            border-radius: 25px;
            padding: 30px 25px;
            margin-bottom: 30px;
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255,255,255,0.2);
            box-shadow: inset 0 2px 20px rgba(255,255,255,0.1);
          ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <span style="color: white; font-weight: 700; font-size: 18px;">🎯 Score</span>
              <span style="
                color: #ffd700;
                font-weight: 900;
                font-size: 32px;
                text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
                animation: scoreGlow 1.5s ease-in-out infinite alternate;
              ">\${score.toLocaleString()}</span>
            </div>
            
            \${timeBonus > 0 ? \`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <span style="color: white; font-weight: 700; font-size: 16px;">⚡ Time Bonus</span>
              <span style="
                color: #10b981;
                font-weight: 800;
                font-size: 24px;
                animation: bonusSlide 1s ease-out;
              ">+\${timeBonus.toLocaleString()}</span>
            </div>
            
            <div style="
              height: 2px;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              margin: 20px 0;
            "></div>
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: white; font-weight: 800; font-size: 20px;">💫 Total</span>
              <span style="
                color: #ffd700;
                font-weight: 900;
                font-size: 36px;
                text-shadow: 3px 3px 10px rgba(0,0,0,0.4);
                animation: totalGlow 2s ease-in-out infinite;
              ">\${(score + timeBonus).toLocaleString()}</span>
            </div>
            \` : ''}
          </div>
          
          <!-- 进度条 -->
          <div style="
            background: rgba(255,255,255,0.2);
            border-radius: 20px;
            height: 12px;
            margin-bottom: 25px;
            overflow: hidden;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);
          ">
            <div style="
              background: linear-gradient(90deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1);
              height: 100%;
              width: 0%;
              border-radius: 20px;
              animation: progressFill 3s ease-out forwards;
              box-shadow: 0 2px 15px rgba(255,215,0,0.5);
            "></div>
          </div>
          
          <!-- 下一关提示 -->
          <div style="
            color: white;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 25px;
            animation: fadeInUp 1.5s ease-out 1s both;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          ">🚀 Get ready for Level \${level + 1}!</div>
          
          <!-- 关闭按钮 -->
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
            background: linear-gradient(45deg, #10b981, #059669);
            color: white;
            border: none;
            padding: 18px 45px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            text-transform: uppercase;
            letter-spacing: 1px;
          " onmouseover="this.style.transform='translateY(-5px) scale(1.05)'; this.style.boxShadow='0 15px 35px rgba(16, 185, 129, 0.6)';" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 8px 25px rgba(16, 185, 129, 0.4)';">
            Continue 🎮
          </button>
        </div>
      </div>
    \`;
    
    const style = document.createElement('style');
    style.textContent = \`
      @keyframes trophyBounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
        40% { transform: translateY(-25px) scale(1.1); }
        60% { transform: translateY(-15px) scale(1.05); }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes scoreGlow {
        0% { transform: scale(1); text-shadow: 2px 2px 8px rgba(0,0,0,0.3); }
        100% { transform: scale(1.1); text-shadow: 2px 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.6); }
      }
      @keyframes totalGlow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); text-shadow: 3px 3px 10px rgba(0,0,0,0.4), 0 0 25px rgba(255,215,0,0.8); }
      }
      @keyframes bonusSlide {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes progressFill {
        0% { width: 0%; }
        100% { width: 100%; }
      }
      @keyframes fadeInUp {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes rainbow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        100% { transform: translate(-50px, -50px) rotate(360deg); }
      }
             @keyframes explode {
         0% {
           transform: translate(-50%, -50%) scale(0);
           opacity: 1;
         }
         100% {
           transform: translate(\` + ((Math.random() - 0.5) * 600) + \`px, \` + ((Math.random() - 0.5) * 600) + \`px) scale(1);
           opacity: 0;
         }
       }
    \`;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    createParticleExplosion();
    
    // 动画入场
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
      modal.querySelector('div').style.transform = 'scale(1) rotateY(0deg)';
    });
    
    // 6秒后自动关闭
    setTimeout(() => {
      if (modal.parentNode) {
        modal.style.opacity = '0';
        modal.querySelector('div').style.transform = 'scale(0.3) rotateY(-180deg)';
        setTimeout(() => {
          modal.remove();
          style.remove();
        }, 800);
      }
    }, 6000);
  `;
};

// 生成创意侧边排行榜
const generateSideLeaderboard = (gameId: string): string => {
  return `
  <div id="sideLeaderboard\${gameId}" style="
    position: fixed;
    top: 80px;
    right: 20px;
    width: 300px;
    max-height: calc(100vh - 100px);
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    z-index: 1000;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.3) transparent;
    transform: translateX(320px);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ">
    <!-- 顶部标题区域 -->
    <div style="
      text-align: center;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 2px solid rgba(255,255,255,0.1);
    ">
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;
      ">
        <span style="font-size: 28px;">🏆</span>
        <h3 style="
          margin: 0;
          color: #fff;
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">TOP 20</h3>
      </div>
      <p style="
        margin: 0;
        color: rgba(255,255,255,0.7);
        font-size: 12px;
        font-weight: 500;
      ">Global Leaderboard</p>
    </div>

    <!-- 排行榜列表 -->
    <div id="leaderboardList\${gameId}" style="space-y: 8px;"></div>

    <!-- 你的排名 -->
    <div style="
      margin-top: 20px;
      padding-top: 15px;
      border-top: 2px solid rgba(255,255,255,0.1);
    ">
      <div id="playerRank\${gameId}" style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 12px;
        border: 2px solid rgba(255,255,255,0.2);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="
            background: rgba(255,255,255,0.9);
            color: #667eea;
            font-weight: bold;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          ">★</span>
          <span style="color: white; font-weight: 600; font-size: 14px;">You</span>
        </div>
        <span id="playerBest\${gameId}" style="color: white; font-weight: bold; font-size: 16px;">0</span>
      </div>
    </div>

    <!-- 控制按钮 -->
    <div style="
      display: flex;
      gap: 8px;
      margin-top: 15px;
    ">
      <button id="refreshLeaderboard\${gameId}" style="
        flex: 1;
        background: linear-gradient(45deg, #10b981, #059669);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">🔄 Refresh</button>
      <button id="toggleLeaderboard\${gameId}" style="
        flex: 1;
        background: linear-gradient(45deg, #f59e0b, #d97706);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">👁️ Hide</button>
    </div>
  </div>

  <!-- 显示/隐藏按钮 -->
  <button id="showLeaderboard\${gameId}" style="
    position: fixed;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    z-index: 999;
    font-size: 20px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  " onmouseover="this.style.transform='translateY(-50%) scale(1.1)'" onmouseout="this.style.transform='translateY(-50%) scale(1)'">🏆</button>

  <script>
    (function() {
      // 生成前20名模拟数据
      const generateLeaderboardData = () => {
        const names = [
          'DragonSlayer', 'NightHawk', 'StarCrusher', 'ShadowMaster', 'FirePhoenix',
          'IceQueen', 'ThunderBolt', 'MysticWizard', 'CyberNinja', 'GalacticHero',
          'QuantumLeap', 'PixelWarrior', 'CodeBreaker', 'GameChanger', 'ProGamer',
          'ElitePlayer', 'ChampionX', 'VictoryKing', 'ScoreHunter', 'LegendMaker'
        ];
        
        const baseScores = [
          50000, 48500, 47000, 45500, 44000, 42500, 41000, 39500, 38000, 36500,
          35000, 33500, 32000, 30500, 29000, 27500, 26000, 24500, 23000, 21500
        ];
        
        return names.map((name, index) => ({
          name,
          score: baseScores[index] + Math.floor(Math.random() * 1000),
          rank: index + 1
        }));
      };

      const leaderboardData = generateLeaderboardData();
      let playerBestScore = parseInt(localStorage.getItem('\${gameId}_best') || '0');
      let isVisible = false;

      const sideLeaderboard = document.getElementById('sideLeaderboard\${gameId}');
      const showButton = document.getElementById('showLeaderboard\${gameId}');
      const toggleButton = document.getElementById('toggleLeaderboard\${gameId}');
      const refreshButton = document.getElementById('refreshLeaderboard\${gameId}');
      const leaderboardList = document.getElementById('leaderboardList\${gameId}');

      // 渲染排行榜
      function renderLeaderboard() {
        leaderboardList.innerHTML = leaderboardData.map((player, index) => {
          let rankColor = '#6b7280';
          let bgGradient = 'linear-gradient(45deg, #f3f4f6, #e5e7eb)';
          let textColor = '#374151';
          
          if (index === 0) {
            rankColor = '#fbbf24';
            bgGradient = 'linear-gradient(45deg, #fbbf24, #f59e0b)';
            textColor = 'white';
          } else if (index === 1) {
            rankColor = '#9ca3af';
            bgGradient = 'linear-gradient(45deg, #9ca3af, #6b7280)';
            textColor = 'white';
          } else if (index === 2) {
            rankColor = '#cd7f32';
            bgGradient = 'linear-gradient(45deg, #cd7f32, #b45309)';
            textColor = 'white';
          } else if (index < 10) {
            bgGradient = 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
            textColor = 'rgba(255,255,255,0.9)';
          } else {
            bgGradient = 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))';
            textColor = 'rgba(255,255,255,0.7)';
          }

          return \`
            <div style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px 12px;
              background: \${bgGradient};
              border-radius: 8px;
              margin-bottom: 4px;
              transition: all 0.3s ease;
              border: 1px solid rgba(255,255,255,0.1);
            " onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0px)'">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="
                  color: \${index < 3 ? 'white' : rankColor};
                  font-weight: bold;
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 11px;
                  background: \${index < 3 ? 'rgba(255,255,255,0.2)' : 'transparent'};
                ">\${player.rank}</span>
                <span style="
                  color: \${textColor};
                  font-weight: 500;
                  font-size: 12px;
                  max-width: 120px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                ">\${player.name}</span>
              </div>
              <span style="
                color: \${textColor};
                font-weight: bold;
                font-size: 12px;
              ">\${player.score.toLocaleString()}</span>
            </div>
          \`;
        }).join('');
      }

      // 更新玩家最佳分数
      function updatePlayerBest() {
        document.getElementById('playerBest\${gameId}').textContent = playerBestScore.toLocaleString();
      }

      // 显示/隐藏排行榜
      function toggleLeaderboard() {
        isVisible = !isVisible;
        if (isVisible) {
          sideLeaderboard.style.transform = 'translateX(0)';
          showButton.style.display = 'none';
          toggleButton.textContent = '👁️ Hide';
        } else {
          sideLeaderboard.style.transform = 'translateX(320px)';
          showButton.style.display = 'flex';
          toggleButton.textContent = '👁️ Show';
        }
      }

      // 事件监听
      showButton.addEventListener('click', toggleLeaderboard);
      toggleButton.addEventListener('click', toggleLeaderboard);
      
      refreshButton.addEventListener('click', function() {
        this.textContent = '🔄 Refreshing...';
        this.disabled = true;
        
        // 随机更新分数
        leaderboardData.forEach(player => {
          player.score += Math.floor(Math.random() * 200) - 100;
        });
        
        setTimeout(() => {
          renderLeaderboard();
          this.textContent = '🔄 Refresh';
          this.disabled = false;
        }, 1000);
      });

      // 全局函数：更新玩家最佳分数
      window.updatePlayerBest = function(score) {
        if (score > playerBestScore) {
          playerBestScore = score;
          localStorage.setItem('\${gameId}_best', score.toString());
          updatePlayerBest();
          
          // 新纪录庆祝
          const celebration = document.createElement('div');
          celebration.style.cssText = \`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 40px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 24px;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            border: 2px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
          \`;
          celebration.innerHTML = \`
            <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
            <div>NEW RECORD!</div>
            <div style="font-size: 32px; color: #ffd700; margin-top: 10px;">\${score.toLocaleString()}</div>
          \`;
          
          document.body.appendChild(celebration);
          
          // 粒子效果
          for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = \`
              position: fixed;
              top: 50%;
              left: 50%;
              width: 8px;
              height: 8px;
              background: \${['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][Math.floor(Math.random() * 5)]};
              border-radius: 50%;
              pointer-events: none;
              z-index: 10001;
              animation: explode 2s ease-out forwards;
            \`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
          }
          
          // CSS动画
          const style = document.createElement('style');
          style.textContent = \`
            @keyframes explode {
              0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
              }
              100% {
                transform: translate(\${(Math.random() - 0.5) * 400}px, \${(Math.random() - 0.5) * 400}px) scale(1);
                opacity: 0;
              }
            }
          \`;
          document.head.appendChild(style);
          
          setTimeout(() => {
            celebration.remove();
            style.remove();
          }, 3000);
        }
      };

      // 初始化
      renderLeaderboard();
      updatePlayerBest();

      // 自动显示排行榜（3秒后）
      setTimeout(() => {
        if (!isVisible) {
          toggleLeaderboard();
        }
      }, 3000);
    })();
  </script>
  `;
};
