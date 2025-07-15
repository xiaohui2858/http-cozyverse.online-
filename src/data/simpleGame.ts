<<<<<<< HEAD
// 为不同类别生成专业级游戏
export const generateSimpleGameCode = (title: string, category: string): string => {
  switch (category) {
    case 'puzzle':
      return generatePuzzleGame(title);
    case 'simulation':
      return generateSimulationGame(title);
    case 'adventure':
      return generateAdventureGame(title);
    case 'casual':
      return generateCasualGame(title);
    case 'creative':
      return generateCreativeGame(title);
    case 'nature':
      return generateNatureGame(title);
    default:
      return generateDefaultGame(title);
  }
};

// 益智类游戏 - 2048风格
const generatePuzzleGame = (title: string): string => {
  const gameId = `puzzle-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  // 为Block Merge 2048生成特殊的滑动动画版本
  if (title === 'Block Merge 2048') {
    return generateAnimated2048Game(gameId, title);
  }
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="420" height="420" style="border: 2px solid #ddd; border-radius: 8px; background: #f8f9fa; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4); transition: all 0.3s; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4); transition: all 0.3s; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 20px 30px; background: rgba(255,255,255,0.9); border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 24px; color: #333; font-weight: bold; text-align: center;">Score: <span id="score-${gameId}" style="color: #28a745; font-size: 28px;">0</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🧩 <strong>Use ARROW KEYS</strong> to move tiles. Combine tiles with the same number to reach higher scores! Try to reach 2048!
    </p>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        board: Array(4).fill().map(() => Array(4).fill(0)),
        tileSize: 90,
        gap: 10,
        offsetX: 20,
        offsetY: 20
      };
      
      function startGame() {
        if (game.running) return;
        
        game.running = true;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        updateScore();
        addNewTile();
        addNewTile();
        drawBoard();
        
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
      }
      
      function resetGame() {
        game.running = false;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        
        updateScore();
        drawStartScreen();
        
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (game.board[i][j] === 0) {
              emptyCells.push({x: i, y: j});
            }
          }
        }
        if (emptyCells.length > 0) {
          const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          game.board[cell.x][cell.y] = Math.random() < 0.9 ? 2 : 4;
        }
      }
      
      function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#fafbfc');
        gradient.addColorStop(1, '#ebedf0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const x = j * (game.tileSize + game.gap) + game.offsetX;
            const y = i * (game.tileSize + game.gap) + game.offsetY;
            
            ctx.fillStyle = game.board[i][j] === 0 ? '#cdd4da' : getTileColor(game.board[i][j]);
            ctx.fillRect(x, y, game.tileSize, game.tileSize);
            
            if (game.board[i][j] !== 0) {
              ctx.fillStyle = game.board[i][j] <= 4 ? '#776e65' : '#f9f6f2';
              ctx.font = 'bold 24px Arial';
              ctx.textAlign = 'center';
              ctx.fillText(game.board[i][j], x + game.tileSize/2, y + game.tileSize/2 + 8);
            }
          }
        }
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#3c3a32';
      }
      
      function updateScore() {
        scoreElement.textContent = game.score;
      }
      
      function drawStartScreen() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#fafbfc');
        gradient.addColorStop(1, '#ebedf0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#776e65';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 40);
        
        ctx.font = '18px Arial';
        ctx.fillStyle = '#8f7a66';
        ctx.fillText('Click "Start Game" to begin', canvas.width/2, canvas.height/2);
        ctx.fillText('Use arrow keys to play', canvas.width/2, canvas.height/2 + 25);
        
        ctx.font = '48px Arial';
        ctx.fillText('🧩', canvas.width/2, canvas.height/2 - 100);
      }
      
      document.addEventListener('keydown', function(e) {
        if (!game.running) return;
        
        let moved = false;
        switch(e.key) {
          case 'ArrowLeft':
            moved = moveLeft();
            break;
          case 'ArrowRight':
            moved = moveRight();
            break;
          case 'ArrowUp':
            moved = moveUp();
            break;
          case 'ArrowDown':
            moved = moveDown();
            break;
        }
        
        if (moved) {
          addNewTile();
          drawBoard();
          updateScore();
        }
        
        e.preventDefault();
      });
      
      function moveLeft() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
          let row = game.board[i].filter(val => val !== 0);
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              game.score += row[j];
              row.splice(j + 1, 1);
            }
          }
          while (row.length < 4) row.push(0);
          if (JSON.stringify(game.board[i]) !== JSON.stringify(row)) moved = true;
          game.board[i] = row;
        }
        return moved;
      }
      
      function moveRight() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
          let row = game.board[i].filter(val => val !== 0);
          for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
              row[j] *= 2;
              game.score += row[j];
              row.splice(j - 1, 1);
              j--;
            }
          }
          while (row.length < 4) row.unshift(0);
          if (JSON.stringify(game.board[i]) !== JSON.stringify(row)) moved = true;
          game.board[i] = row;
        }
        return moved;
      }
      
      function moveUp() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
          let col = [];
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== 0) col.push(game.board[i][j]);
          }
          for (let i = 0; i < col.length - 1; i++) {
            if (col[i] === col[i + 1]) {
              col[i] *= 2;
              game.score += col[i];
              col.splice(i + 1, 1);
            }
          }
          while (col.length < 4) col.push(0);
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== col[i]) moved = true;
            game.board[i][j] = col[i];
          }
        }
        return moved;
      }
      
      function moveDown() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
          let col = [];
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== 0) col.push(game.board[i][j]);
          }
          for (let i = col.length - 1; i > 0; i--) {
            if (col[i] === col[i - 1]) {
              col[i] *= 2;
              game.score += col[i];
              col.splice(i - 1, 1);
              i--;
            }
          }
          while (col.length < 4) col.unshift(0);
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== col[i]) moved = true;
            game.board[i][j] = col[i];
          }
        }
        return moved;
      }
      
      startBtn.addEventListener('click', startGame);
      resetBtn.addEventListener('click', resetGame);
      
      drawStartScreen();
    })();
  </script>
</div>`;
};

// 模拟类游戏 - 专业级俄罗斯方块
const generateSimulationGame = (title: string): string => {
  const gameId = `sim-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Tetris - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="400" height="600" style="border: 2px solid #333; border-radius: 8px; background: #000; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #28a745, #20c997); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="pause-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffc107, #ff8800); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">⏸️ Pause</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #dc3545, #c82333); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #28a745;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Lines: <span id="lines-${gameId}" style="color: #007bff;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #dc3545;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🎯 <strong>Arrow Keys:</strong> Move & Rotate | <strong>Space:</strong> Drop | <strong>Down:</strong> Fast Drop
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const pauseBtn = document.getElementById('pause-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const linesElement = document.getElementById('lines-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      const COLS = 10;
      const ROWS = 20;
      const BLOCK_SIZE = 30;
      
      let game = {
        running: false,
        paused: false,
        score: 0,
        lines: 0,
        level: 1,
        board: Array(ROWS).fill().map(() => Array(COLS).fill(0)),
        currentPiece: null,
        nextPiece: null,
        dropTime: 0,
        dropInterval: 1000
      };
      
      const pieces = [
        {
          shape: [[1,1,1,1]], // I
          color: '#00ffff'
        },
        {
          shape: [[1,1],[1,1]], // O
          color: '#ffff00'
        },
        {
          shape: [[0,1,0],[1,1,1]], // T
          color: '#800080'
        },
        {
          shape: [[0,1,1],[1,1,0]], // S
          color: '#00ff00'
        },
        {
          shape: [[1,1,0],[0,1,1]], // Z
          color: '#ff0000'
        },
        {
          shape: [[1,0,0],[1,1,1]], // J
          color: '#0000ff'
        },
        {
          shape: [[0,0,1],[1,1,1]], // L
          color: '#ffa500'
        }
      ];
      
      function createPiece() {
        const piece = pieces[Math.floor(Math.random() * pieces.length)];
        return {
          shape: piece.shape,
          color: piece.color,
          x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
          y: 0
        };
      }
      
      function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
      }
      
      function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制背景网格
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for(let x = 0; x <= COLS; x++) {
          ctx.beginPath();
          ctx.moveTo(x * BLOCK_SIZE, 0);
          ctx.lineTo(x * BLOCK_SIZE, ROWS * BLOCK_SIZE);
          ctx.stroke();
        }
        for(let y = 0; y <= ROWS; y++) {
          ctx.beginPath();
          ctx.moveTo(0, y * BLOCK_SIZE);
          ctx.lineTo(COLS * BLOCK_SIZE, y * BLOCK_SIZE);
          ctx.stroke();
        }
        
        // 绘制已放置的方块
        for(let y = 0; y < ROWS; y++) {
          for(let x = 0; x < COLS; x++) {
            if(game.board[y][x]) {
              drawBlock(x, y, game.board[y][x]);
            }
          }
        }
        
        // 绘制当前方块
        if(game.currentPiece) {
          for(let y = 0; y < game.currentPiece.shape.length; y++) {
            for(let x = 0; x < game.currentPiece.shape[y].length; x++) {
              if(game.currentPiece.shape[y][x]) {
                drawBlock(game.currentPiece.x + x, game.currentPiece.y + y, game.currentPiece.color);
              }
            }
          }
        }
      }
      
      function isValidMove(piece, dx, dy, rotation = null) {
        const shape = rotation || piece.shape;
        const newX = piece.x + dx;
        const newY = piece.y + dy;
        
        for(let y = 0; y < shape.length; y++) {
          for(let x = 0; x < shape[y].length; x++) {
            if(shape[y][x]) {
              const boardX = newX + x;
              const boardY = newY + y;
              
              if(boardX < 0 || boardX >= COLS || boardY >= ROWS) return false;
              if(boardY >= 0 && game.board[boardY][boardX]) return false;
            }
          }
        }
        return true;
      }
      
      function rotatePiece(piece) {
        const rotated = piece.shape[0].map((_, index) =>
          piece.shape.map(row => row[index]).reverse()
        );
        return rotated;
      }
      
      function placePiece() {
        for(let y = 0; y < game.currentPiece.shape.length; y++) {
          for(let x = 0; x < game.currentPiece.shape[y].length; x++) {
            if(game.currentPiece.shape[y][x]) {
              const boardY = game.currentPiece.y + y;
              const boardX = game.currentPiece.x + x;
              if(boardY >= 0) {
                game.board[boardY][boardX] = game.currentPiece.color;
              }
            }
          }
        }
        
        clearLines();
        game.currentPiece = game.nextPiece;
        game.nextPiece = createPiece();
        
        if(!isValidMove(game.currentPiece, 0, 0)) {
          gameOver();
        }
      }
      
      function clearLines() {
        let linesCleared = 0;
        for(let y = ROWS - 1; y >= 0; y--) {
          if(game.board[y].every(cell => cell !== 0)) {
            game.board.splice(y, 1);
            game.board.unshift(Array(COLS).fill(0));
            linesCleared++;
            y++; // 重新检查这一行
          }
        }
        
        if(linesCleared > 0) {
          game.lines += linesCleared;
          game.score += linesCleared * 100 * game.level;
          game.level = Math.floor(game.lines / 10) + 1;
          game.dropInterval = Math.max(100, 1000 - (game.level - 1) * 100);
          updateDisplay();
        }
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score);
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function updateDisplay() {
        scoreElement.textContent = game.score;
        linesElement.textContent = game.lines;
        levelElement.textContent = game.level;
      }
      
      function gameLoop(currentTime) {
        if(!game.running || game.paused) {
          if(game.running) requestAnimationFrame(gameLoop);
          return;
        }
        
        if(currentTime - game.dropTime > game.dropInterval) {
          if(isValidMove(game.currentPiece, 0, 1)) {
            game.currentPiece.y++;
          } else {
            placePiece();
          }
          game.dropTime = currentTime;
        }
        
        drawBoard();
        requestAnimationFrame(gameLoop);
      }
      
      startBtn.addEventListener('click', () => {
        if(!game.running) {
          game.running = true;
          game.paused = false;
          game.score = 0;
          game.lines = 0;
          game.level = 1;
          game.board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
          game.currentPiece = createPiece();
          game.nextPiece = createPiece();
          game.dropTime = 0;
          game.dropInterval = 1000;
          updateDisplay();
          startBtn.textContent = '🎮 Playing...';
          startBtn.disabled = true;
          requestAnimationFrame(gameLoop);
        }
      });
      
      pauseBtn.addEventListener('click', () => {
        if(game.running) {
          game.paused = !game.paused;
          pauseBtn.textContent = game.paused ? '▶️ Resume' : '⏸️ Pause';
        }
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.paused = false;
        game.score = 0;
        game.lines = 0;
        game.level = 1;
        game.board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
        updateDisplay();
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        pauseBtn.textContent = '⏸️ Pause';
        drawBoard();
      });
      
      document.addEventListener('keydown', (e) => {
        if(!game.running || game.paused || !game.currentPiece) return;
        
        switch(e.key) {
          case 'ArrowLeft':
            if(isValidMove(game.currentPiece, -1, 0)) {
              game.currentPiece.x--;
            }
            break;
          case 'ArrowRight':
            if(isValidMove(game.currentPiece, 1, 0)) {
              game.currentPiece.x++;
            }
            break;
          case 'ArrowDown':
            if(isValidMove(game.currentPiece, 0, 1)) {
              game.currentPiece.y++;
              game.score++;
            }
            break;
          case 'ArrowUp':
            const rotated = rotatePiece(game.currentPiece);
            if(isValidMove(game.currentPiece, 0, 0, rotated)) {
              game.currentPiece.shape = rotated;
            }
            break;
          case ' ':
            while(isValidMove(game.currentPiece, 0, 1)) {
              game.currentPiece.y++;
              game.score += 2;
            }
            placePiece();
            e.preventDefault();
            break;
        }
        updateDisplay();
      });
      
      // 初始画面
      drawBoard();
      updateDisplay();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('TETRIS', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Click Start to Play!', canvas.width/2, canvas.height/2);
    })();
  </script>
</div>`;
};

// 冒险类游戏 - 专业级平台跳跃游戏
const generateAdventureGame = (title: string): string => {
  const gameId = `adv-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #fff8dc 0%, #f5f5dc 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #8b4513; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Platform Adventure - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #f0e68c; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffd700, #daa520); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #ffd700;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Lives: <span id="lives-${gameId}" style="color: #dc3545;">3</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #007bff;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🏃 <strong>WASD/Arrow Keys:</strong> Move & Jump | <strong>Collect coins, avoid enemies!</strong>
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const livesElement = document.getElementById('lives-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        lives: 3,
        level: 1,
        player: {
          x: 50,
          y: 300,
          width: 25,
          height: 30,
          vx: 0,
          vy: 0,
          grounded: false,
          facingRight: true
        },
        coins: [],
        enemies: [],
        platforms: [],
        particles: [],
        keys: {},
        camera: { x: 0, y: 0 }
      };
      
      const GRAVITY = 0.8;
      const JUMP_POWER = -15;
      const MOVE_SPEED = 5;
      const WORLD_WIDTH = 1200;
      
      function initLevel() {
        game.coins = [];
        game.enemies = [];
        game.platforms = [];
        game.particles = [];
        
        // 创建平台
        const platformData = [
          {x: 0, y: 370, width: 200, height: 30},
          {x: 250, y: 320, width: 100, height: 20},
          {x: 400, y: 270, width: 120, height: 20},
          {x: 570, y: 220, width: 100, height: 20},
          {x: 720, y: 170, width: 150, height: 20},
          {x: 920, y: 220, width: 100, height: 20},
          {x: 1070, y: 300, width: 130, height: 30}
        ];
        
        game.platforms = platformData.map(p => ({...p, color: '#8b4513'}));
        
        // 创建金币
        for(let i = 0; i < 15; i++) {
          game.coins.push({
            x: 100 + i * 70 + Math.random() * 50,
            y: 100 + Math.random() * 200,
            width: 15,
            height: 15,
            collected: false,
            animation: 0
          });
        }
        
        // 创建敌人
        for(let i = 0; i < 6; i++) {
          game.enemies.push({
            x: 200 + i * 150 + Math.random() * 100,
            y: 300,
            width: 20,
            height: 20,
            vx: (Math.random() - 0.5) * 4,
            vy: 0,
            grounded: false,
            color: '#dc143c'
          });
        }
      }
      
      function createParticle(x, y, color, count = 5) {
        for(let i = 0; i < count; i++) {
          game.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 6,
            life: 30,
            color: color,
            size: 3 + Math.random() * 3
          });
        }
      }
      
      function updateCamera() {
        game.camera.x = game.player.x - canvas.width / 2;
        game.camera.x = Math.max(0, Math.min(game.camera.x, WORLD_WIDTH - canvas.width));
      }
      
      function checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
      }
      
      function updatePhysics(obj) {
        obj.vy += GRAVITY;
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.grounded = false;
        
        // 平台碰撞检测
        game.platforms.forEach(platform => {
          if(checkCollision(obj, platform)) {
            if(obj.vy > 0 && obj.y < platform.y) {
              obj.y = platform.y - obj.height;
              obj.vy = 0;
              obj.grounded = true;
            }
          }
        });
        
        // 地面碰撞
        if(obj.y + obj.height > canvas.height - 30) {
          obj.y = canvas.height - 30 - obj.height;
          obj.vy = 0;
          obj.grounded = true;
        }
        
        // 边界检测
        if(obj.x < 0) obj.x = 0;
        if(obj.x + obj.width > WORLD_WIDTH) obj.x = WORLD_WIDTH - obj.width;
      }
      
      function updatePlayer() {
        // 水平移动
        if(game.keys['ArrowLeft'] || game.keys['a'] || game.keys['A']) {
          game.player.vx = -MOVE_SPEED;
          game.player.facingRight = false;
        } else if(game.keys['ArrowRight'] || game.keys['d'] || game.keys['D']) {
          game.player.vx = MOVE_SPEED;
          game.player.facingRight = true;
        } else {
          game.player.vx *= 0.8; // 摩擦力
        }
        
        // 跳跃
        if((game.keys['ArrowUp'] || game.keys['w'] || game.keys['W'] || game.keys[' ']) && game.player.grounded) {
          game.player.vy = JUMP_POWER;
        }
        
        updatePhysics(game.player);
        updateCamera();
      }
      
      function updateEnemies() {
        game.enemies.forEach(enemy => {
          // 简单AI：随机改变方向
          if(Math.random() < 0.02) {
            enemy.vx = (Math.random() - 0.5) * 4;
          }
          
          updatePhysics(enemy);
          
          // 玩家碰撞检测
          if(checkCollision(game.player, enemy)) {
            game.lives--;
            livesElement.textContent = game.lives;
            createParticle(game.player.x + game.player.width/2, game.player.y + game.player.height/2, '#ff0000', 10);
            
            if(game.lives <= 0) {
              gameOver();
            } else {
              // 重置玩家位置
              game.player.x = 50;
              game.player.y = 300;
              game.player.vx = 0;
              game.player.vy = 0;
            }
          }
        });
      }
      
      function updateCoins() {
        game.coins.forEach(coin => {
          if(!coin.collected) {
            coin.animation += 0.2;
            
            if(checkCollision(game.player, coin)) {
              coin.collected = true;
              game.score += 10;
              scoreElement.textContent = game.score;
              createParticle(coin.x + coin.width/2, coin.y + coin.height/2, '#ffd700');
              
              // 检查是否收集完所有金币
              if(game.coins.every(c => c.collected)) {
                nextLevel();
              }
            }
          }
        });
      }
      
      function updateParticles() {
        game.particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.3;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
      }
      
      function nextLevel() {
        game.level++;
        levelElement.textContent = game.level;
        game.score += 100;
        scoreElement.textContent = game.score;
        game.player.x = 50;
        game.player.y = 300;
        initLevel();
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score + ' (Level ' + game.level + ')');
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#87ceeb');
        gradient.addColorStop(1, '#f0e68c');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.translate(-game.camera.x, 0);
        
        // 绘制平台
        game.platforms.forEach(platform => {
          ctx.fillStyle = platform.color;
          ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
          ctx.strokeStyle = '#654321';
          ctx.lineWidth = 2;
          ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
        });
        
        // 绘制地面
        ctx.fillStyle = '#228b22';
        ctx.fillRect(0, canvas.height - 30, WORLD_WIDTH, 30);
        
        // 绘制金币
        game.coins.forEach(coin => {
          if(!coin.collected) {
            const wobble = Math.sin(coin.animation) * 3;
            ctx.fillStyle = '#ffd700';
            ctx.fillRect(coin.x, coin.y + wobble, coin.width, coin.height);
            ctx.strokeStyle = '#ff8c00';
            ctx.lineWidth = 2;
            ctx.strokeRect(coin.x, coin.y + wobble, coin.width, coin.height);
            
            // 闪光效果
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fillRect(coin.x + 2, coin.y + wobble + 2, coin.width - 4, 3);
          }
        });
        
        // 绘制敌人
        game.enemies.forEach(enemy => {
          ctx.fillStyle = enemy.color;
          ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
          ctx.fillStyle = '#fff';
          ctx.fillRect(enemy.x + 5, enemy.y + 5, 3, 3);
          ctx.fillRect(enemy.x + 12, enemy.y + 5, 3, 3);
        });
        
        // 绘制玩家
        ctx.fillStyle = '#4169e1';
        ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
        ctx.fillStyle = '#fff';
        if(game.player.facingRight) {
          ctx.fillRect(game.player.x + 18, game.player.y + 5, 4, 4);
        } else {
          ctx.fillRect(game.player.x + 3, game.player.y + 5, 4, 4);
        }
        
        // 绘制粒子
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          ctx.globalAlpha = 1;
        });
        
        ctx.restore();
      }
      
      function gameLoop() {
        if(!game.running) return;
        
        updatePlayer();
        updateEnemies();
        updateCoins();
        updateParticles();
        drawGame();
        
        requestAnimationFrame(gameLoop);
      }
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.lives = 3;
        game.level = 1;
        game.player.x = 50;
        game.player.y = 300;
        game.player.vx = 0;
        game.player.vy = 0;
        scoreElement.textContent = game.score;
        livesElement.textContent = game.lives;
        levelElement.textContent = game.level;
        initLevel();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        gameLoop();
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.lives = 3;
        game.level = 1;
        scoreElement.textContent = game.score;
        livesElement.textContent = game.lives;
        levelElement.textContent = game.level;
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        initLevel();
        drawGame();
      });
      
      document.addEventListener('keydown', (e) => {
        game.keys[e.key] = true;
        e.preventDefault();
      });
      
      document.addEventListener('keyup', (e) => {
        game.keys[e.key] = false;
      });
      
      // 初始画面
      initLevel();
      drawGame();
      ctx.fillStyle = '#8b4513';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Platform Adventure', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Collect all coins to advance to next level!', canvas.width/2, canvas.height/2);
      ctx.fillText('Use WASD or Arrow Keys to move and jump!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 休闲类游戏 - 专业级消除游戏
const generateCasualGame = (title: string): string => {
  const gameId = `casual-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #dc143c; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Match-3 Puzzle - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="480" height="480" style="border: 2px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="hint-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffd700, #daa520); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">💡 Hint</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ff6347, #dc143c); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #dc143c;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Moves: <span id="moves-${gameId}" style="color: #007bff;">30</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #28a745;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🔄 <strong>Click & Drag:</strong> Swap adjacent gems | <strong>Match 3+ to score!</strong>
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const hintBtn = document.getElementById('hint-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const movesElement = document.getElementById('moves-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      const GRID_SIZE = 8;
      const CELL_SIZE = 60;
      const COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
      
      let game = {
        running: false,
        score: 0,
        moves: 30,
        level: 1,
        grid: [],
        selectedCell: null,
        animating: false,
        particles: []
      };
      
      function initGrid() {
        game.grid = [];
        for(let row = 0; row < GRID_SIZE; row++) {
          game.grid[row] = [];
          for(let col = 0; col < GRID_SIZE; col++) {
            game.grid[row][col] = {
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              type: Math.floor(Math.random() * COLORS.length),
              x: col * CELL_SIZE,
              y: row * CELL_SIZE,
              targetX: col * CELL_SIZE,
              targetY: row * CELL_SIZE
            };
          }
        }
        // 确保没有初始匹配
        removeInitialMatches();
      }
      
      function removeInitialMatches() {
        let hasMatches = true;
        while(hasMatches) {
          hasMatches = false;
          for(let row = 0; row < GRID_SIZE; row++) {
            for(let col = 0; col < GRID_SIZE; col++) {
              if(hasMatchAt(row, col)) {
                game.grid[row][col].type = Math.floor(Math.random() * COLORS.length);
                game.grid[row][col].color = COLORS[game.grid[row][col].type];
                hasMatches = true;
              }
            }
          }
        }
      }
      
      function hasMatchAt(row, col) {
        const type = game.grid[row][col].type;
        
        // 检查水平匹配
        let horizontalCount = 1;
        for(let c = col - 1; c >= 0 && game.grid[row][c].type === type; c--) horizontalCount++;
        for(let c = col + 1; c < GRID_SIZE && game.grid[row][c].type === type; c++) horizontalCount++;
        
        // 检查垂直匹配
        let verticalCount = 1;
        for(let r = row - 1; r >= 0 && game.grid[r][col].type === type; r--) verticalCount++;
        for(let r = row + 1; r < GRID_SIZE && game.grid[r][col].type === type; r++) verticalCount++;
        
        return horizontalCount >= 3 || verticalCount >= 3;
      }
      
      function createParticle(x, y, color) {
        for(let i = 0; i < 6; i++) {
          game.particles.push({
            x: x + CELL_SIZE/2,
            y: y + CELL_SIZE/2,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 6,
            life: 30,
            color: color,
            size: 3 + Math.random() * 3
          });
        }
      }
      
      function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制背景
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制网格
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            const cell = game.grid[row][col];
            
            // 绘制宝石
            ctx.fillStyle = cell.color;
            ctx.fillRect(cell.x + 2, cell.y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
            
            // 绘制边框
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 2;
            ctx.strokeRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
            
            // 绘制高光效果
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(cell.x + 5, cell.y + 5, CELL_SIZE - 20, 10);
            
            // 选中效果
            if(game.selectedCell && game.selectedCell.row === row && game.selectedCell.col === col) {
              ctx.strokeStyle = '#ffd700';
              ctx.lineWidth = 4;
              ctx.strokeRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
            }
          }
        }
        
        // 绘制粒子效果
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          ctx.globalAlpha = 1;
        });
      }
      
      function swapCells(row1, col1, row2, col2) {
        const temp = {...game.grid[row1][col1]};
        game.grid[row1][col1] = {...game.grid[row2][col2]};
        game.grid[row2][col2] = temp;
        
        // 更新位置
        game.grid[row1][col1].targetX = col1 * CELL_SIZE;
        game.grid[row1][col1].targetY = row1 * CELL_SIZE;
        game.grid[row2][col2].targetX = col2 * CELL_SIZE;
        game.grid[row2][col2].targetY = row2 * CELL_SIZE;
      }
      
      function findMatches() {
        const matches = [];
        
        // 水平匹配
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE - 2; col++) {
            const type = game.grid[row][col].type;
            let count = 1;
            
            for(let c = col + 1; c < GRID_SIZE && game.grid[row][c].type === type; c++) {
              count++;
            }
            
            if(count >= 3) {
              for(let c = col; c < col + count; c++) {
                matches.push({row, col: c});
              }
            }
          }
        }
        
        // 垂直匹配
        for(let col = 0; col < GRID_SIZE; col++) {
          for(let row = 0; row < GRID_SIZE - 2; row++) {
            const type = game.grid[row][col].type;
            let count = 1;
            
            for(let r = row + 1; r < GRID_SIZE && game.grid[r][col].type === type; r++) {
              count++;
            }
            
            if(count >= 3) {
              for(let r = row; r < row + count; r++) {
                matches.push({row: r, col});
              }
            }
          }
        }
        
        return matches;
      }
      
      function removeMatches(matches) {
        matches.forEach(match => {
          const cell = game.grid[match.row][match.col];
          createParticle(cell.x, cell.y, cell.color);
          game.score += 10;
        });
        
        // 移除匹配的宝石
        matches.forEach(match => {
          game.grid[match.row][match.col] = null;
        });
        
        scoreElement.textContent = game.score;
      }
      
      function dropGems() {
        for(let col = 0; col < GRID_SIZE; col++) {
          let writeIndex = GRID_SIZE - 1;
          
          for(let row = GRID_SIZE - 1; row >= 0; row--) {
            if(game.grid[row][col] !== null) {
              if(writeIndex !== row) {
                game.grid[writeIndex][col] = game.grid[row][col];
                game.grid[row][col] = null;
                game.grid[writeIndex][col].targetY = writeIndex * CELL_SIZE;
              }
              writeIndex--;
            }
          }
        }
      }
      
      function fillEmptySpaces() {
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            if(game.grid[row][col] === null) {
              game.grid[row][col] = {
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                type: Math.floor(Math.random() * COLORS.length),
                x: col * CELL_SIZE,
                y: row * CELL_SIZE,
                targetX: col * CELL_SIZE,
                targetY: row * CELL_SIZE
              };
            }
          }
        }
      }
      
      function updateAnimations() {
        let stillAnimating = false;
        
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            const cell = game.grid[row][col];
            if(cell) {
              const dx = cell.targetX - cell.x;
              const dy = cell.targetY - cell.y;
              
              if(Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                cell.x += dx * 0.2;
                cell.y += dy * 0.2;
                stillAnimating = true;
              } else {
                cell.x = cell.targetX;
                cell.y = cell.targetY;
              }
            }
          }
        }
        
        // 更新粒子
        game.particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.3;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
        
        game.animating = stillAnimating;
      }
      
      function processMatches() {
        const matches = findMatches();
        if(matches.length > 0) {
          removeMatches(matches);
          dropGems();
          fillEmptySpaces();
          return true;
        }
        return false;
      }
      
      function gameLoop() {
        if(!game.running) return;
        
        updateAnimations();
        drawGame();
        
        if(!game.animating) {
          if(processMatches()) {
            // 继续处理连锁反应
          } else if(game.moves <= 0) {
            gameOver();
          }
        }
        
        requestAnimationFrame(gameLoop);
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score + ' (Level ' + game.level + ')');
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      canvas.addEventListener('click', (e) => {
        if(!game.running || game.animating) return;
        
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const col = Math.floor(mouseX / CELL_SIZE);
        const row = Math.floor(mouseY / CELL_SIZE);
        
        if(row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
          if(!game.selectedCell) {
            game.selectedCell = {row, col};
          } else {
            const prevRow = game.selectedCell.row;
            const prevCol = game.selectedCell.col;
            
            // 检查是否相邻
            const isAdjacent = (Math.abs(row - prevRow) === 1 && col === prevCol) ||
                              (Math.abs(col - prevCol) === 1 && row === prevRow);
            
            if(isAdjacent) {
              // 交换宝石
              swapCells(prevRow, prevCol, row, col);
              
              // 检查是否有匹配
              const hasMatch = findMatches().length > 0;
              
              if(hasMatch) {
                game.moves--;
                movesElement.textContent = game.moves;
                game.animating = true;
              } else {
                // 如果没有匹配，交换回来
                swapCells(prevRow, prevCol, row, col);
              }
            }
            
            game.selectedCell = null;
          }
        }
      });
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.moves = 30;
        game.level = 1;
        game.selectedCell = null;
        game.animating = false;
        game.particles = [];
        scoreElement.textContent = game.score;
        movesElement.textContent = game.moves;
        levelElement.textContent = game.level;
        initGrid();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        gameLoop();
      });
      
      hintBtn.addEventListener('click', () => {
        if(!game.running || game.animating) return;
        
        // 简单提示：高亮一个可能的匹配
        for(let row = 0; row < GRID_SIZE - 1; row++) {
          for(let col = 0; col < GRID_SIZE - 1; col++) {
            // 检查右边交换
            if(col < GRID_SIZE - 1) {
              swapCells(row, col, row, col + 1);
              if(findMatches().length > 0) {
                swapCells(row, col, row, col + 1); // 交换回来
                game.selectedCell = {row, col};
                drawGame();
                setTimeout(() => {
                  game.selectedCell = null;
                  drawGame();
                }, 1000);
                return;
              }
              swapCells(row, col, row, col + 1); // 交换回来
            }
            
            // 检查下面交换
            if(row < GRID_SIZE - 1) {
              swapCells(row, col, row + 1, col);
              if(findMatches().length > 0) {
                swapCells(row, col, row + 1, col); // 交换回来
                game.selectedCell = {row, col};
                drawGame();
                setTimeout(() => {
                  game.selectedCell = null;
                  drawGame();
                }, 1000);
                return;
              }
              swapCells(row, col, row + 1, col); // 交换回来
            }
          }
        }
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.moves = 30;
        game.level = 1;
        game.selectedCell = null;
        game.animating = false;
        game.particles = [];
        scoreElement.textContent = game.score;
        movesElement.textContent = game.moves;
        levelElement.textContent = game.level;
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        initGrid();
        drawGame();
      });
      
      // 初始化
      initGrid();
      drawGame();
      ctx.fillStyle = '#333';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Match-3 Puzzle Game', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Click and drag to swap adjacent gems!', canvas.width/2, canvas.height/2);
      ctx.fillText('Match 3 or more gems to score points!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 创意类游戏 - 专业绘画工具
const generateCreativeGame = (title: string): string => {
  const gameId = `creative-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f0f8ff 0%, #e6e6fa 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #6a5acd; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: white; cursor: crosshair;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
    <button id="clear-btn-${gameId}" style="padding: 8px 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 15px; cursor: pointer; font-weight: bold;">🗑️ Clear</button>
    <button class="color-btn" data-color="#000000" style="padding: 8px 16px; background: #000000; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">⚫</button>
    <button class="color-btn" data-color="#ff0000" style="padding: 8px 16px; background: #ff0000; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🔴</button>
    <button class="color-btn" data-color="#00ff00" style="padding: 8px 16px; background: #00ff00; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟢</button>
    <button class="color-btn" data-color="#0000ff" style="padding: 8px 16px; background: #0000ff; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🔵</button>
    <button class="color-btn" data-color="#ffff00" style="padding: 8px 16px; background: #ffff00; color: black; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟡</button>
    <button class="color-btn" data-color="#ff00ff" style="padding: 8px 16px; background: #ff00ff; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟣</button>
  </div>
  
  <div style="margin-top: 15px; padding: 10px 20px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <label style="color: #333; font-weight: bold;">Brush Size: </label>
    <input type="range" id="brush-size-${gameId}" min="1" max="20" value="3" style="margin: 0 10px;">
    <span id="size-display-${gameId}" style="color: #6a5acd; font-weight: bold;">3</span>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const clearBtn = document.getElementById('clear-btn-${gameId}');
      const brushSize = document.getElementById('brush-size-${gameId}');
      const sizeDisplay = document.getElementById('size-display-${gameId}');
      const colorBtns = document.querySelectorAll('.color-btn');
      
      let isDrawing = false;
      let currentColor = '#000000';
      let currentSize = 3;
      let lastX = 0;
      let lastY = 0;
      
      // 初始化画布
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
      }
      
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
      });
      
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', () => isDrawing = false);
      canvas.addEventListener('mouseout', () => isDrawing = false);
      
      // 触摸支持
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
      });
      
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
      });
      
      canvas.addEventListener('touchend', () => isDrawing = false);
      
      clearBtn.addEventListener('click', () => {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          currentColor = btn.dataset.color;
          colorBtns.forEach(b => b.style.transform = 'scale(1)');
          btn.style.transform = 'scale(1.2)';
        });
      });
      
      brushSize.addEventListener('input', (e) => {
        currentSize = e.target.value;
        sizeDisplay.textContent = currentSize;
      });
      
      // 初始画面
      ctx.fillStyle = '#6a5acd';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Creative Drawing Canvas', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Choose colors and start drawing!', canvas.width/2, canvas.height/2);
      ctx.fillText('Use mouse or touch to create your masterpiece!', canvas.width/2, canvas.height/2 + 25);
      
      // 默认选中黑色
      colorBtns[0].style.transform = 'scale(1.2)';
    })();
  </script>
</div>`;
};

// 自然类游戏 - 生态系统模拟游戏
const generateNatureGame = (title: string): string => {
  const gameId = `nature-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f0fff0 0%, #e6ffe6 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #228b22; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #98fb98; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🌿 Start Ecosystem</button>
    <button id="plant-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #90ee90, #8fbc8f); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🌱 Plant Tree</button>
    <button id="animal-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #deb887, #d2691e); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🐰 Add Animal</button>
  </div>
  
  <div style="margin-top: 20px; padding: 15px 25px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: flex; gap: 20px;">
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Trees: <span id="trees-${gameId}" style="color: #228b22;">0</span></p>
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Animals: <span id="animals-${gameId}" style="color: #8b4513;">0</span></p>
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Ecosystem Health: <span id="health-${gameId}" style="color: #32cd32;">100%</span></p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const plantBtn = document.getElementById('plant-btn-${gameId}');
      const animalBtn = document.getElementById('animal-btn-${gameId}');
      const treesElement = document.getElementById('trees-${gameId}');
      const animalsElement = document.getElementById('animals-${gameId}');
      const healthElement = document.getElementById('health-${gameId}');
      
      let game = { 
        running: false, 
        trees: [],
        animals: [],
        particles: [],
        health: 100,
        time: 0
      };
      
      const treeEmojis = ['🌳', '🌲', '🌴', '🍃'];
      const animalEmojis = ['🐰', '🦌', '🐿️', '🦝', '🐦'];
      
      function createTree(x, y) {
        return {
          x: x || Math.random() * (canvas.width - 50),
          y: y || Math.random() * (canvas.height - 100) + 50,
          size: 20 + Math.random() * 20,
          emoji: treeEmojis[Math.floor(Math.random() * treeEmojis.length)],
          age: 0,
          growth: Math.random() * 0.1 + 0.05
        };
      }
      
      function createAnimal(x, y) {
        return {
          x: x || Math.random() * (canvas.width - 40),
          y: y || Math.random() * (canvas.height - 80) + 40,
          size: 15 + Math.random() * 10,
          emoji: animalEmojis[Math.floor(Math.random() * animalEmojis.length)],
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          energy: 100,
          happiness: Math.random() * 100
        };
      }
      
      function createParticle(x, y, type) {
        const colors = type === 'oxygen' ? ['#90ee90', '#32cd32'] : ['#ffd700', '#ff69b4'];
        return {
          x: x,
          y: y,
          dx: (Math.random() - 0.5) * 2,
          dy: -Math.random() * 2,
          life: 60,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 3
        };
      }
      
      function drawGame() {
        // 背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#87ceeb');
        gradient.addColorStop(0.6, '#98fb98');
        gradient.addColorStop(1, '#228b22');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制地面细节
        ctx.fillStyle = '#8fbc8f';
        for(let i = 0; i < canvas.width; i += 20) {
          ctx.fillRect(i, canvas.height - 20 + Math.sin(i/10) * 5, 20, 20);
        }
        
        // 绘制树木
        game.trees.forEach(tree => {
          ctx.font = tree.size + 'px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(tree.emoji, tree.x, tree.y);
          
          // 树木周围的氧气粒子
          if(Math.random() < 0.05) {
            game.particles.push(createParticle(tree.x, tree.y - 20, 'oxygen'));
          }
        });
        
        // 绘制动物
        game.animals.forEach(animal => {
          ctx.font = animal.size + 'px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(animal.emoji, animal.x, animal.y);
          
          // 快乐粒子
          if(animal.happiness > 70 && Math.random() < 0.03) {
            game.particles.push(createParticle(animal.x, animal.y - 10, 'happiness'));
          }
        });
        
        // 绘制粒子效果
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 60;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        });
        
        // 绘制天气效果
        if(game.time % 1000 < 100) {
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for(let i = 0; i < 20; i++) {
            ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 10);
          }
        }
      }
      
      function updateGame() {
        if(!game.running) return;
        
        game.time++;
        
        // 更新树木
        game.trees.forEach(tree => {
          tree.age += tree.growth;
          if(tree.age > 10) {
            tree.size = Math.min(tree.size + 0.1, 40);
          }
        });
        
        // 更新动物
        game.animals.forEach(animal => {
          animal.x += animal.dx;
          animal.y += animal.dy;
          
          // 边界检查
          if(animal.x <= 0 || animal.x >= canvas.width - 20) animal.dx *= -1;
          if(animal.y <= 20 || animal.y >= canvas.height - 20) animal.dy *= -1;
          
          // 寻找附近的树木增加快乐度
          game.trees.forEach(tree => {
            const dx = animal.x - tree.x;
            const dy = animal.y - tree.y;
            if(Math.sqrt(dx*dx + dy*dy) < 50) {
              animal.happiness = Math.min(animal.happiness + 0.5, 100);
            }
          });
          
          // 随机改变方向
          if(Math.random() < 0.02) {
            animal.dx = (Math.random() - 0.5) * 2;
            animal.dy = (Math.random() - 0.5) * 2;
          }
        });
        
        // 更新粒子
        game.particles.forEach((particle, index) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
        
        // 计算生态系统健康度
        const treeBonus = Math.min(game.trees.length * 5, 50);
        const animalBonus = Math.min(game.animals.length * 3, 30);
        const balance = Math.abs(game.trees.length - game.animals.length * 2) < 5 ? 20 : 0;
        game.health = Math.min(treeBonus + animalBonus + balance, 100);
        
        // 更新显示
        treesElement.textContent = game.trees.length;
        animalsElement.textContent = game.animals.length;
        healthElement.textContent = game.health + '%';
        healthElement.style.color = game.health > 70 ? '#32cd32' : game.health > 40 ? '#ff8c00' : '#ff4500';
        
        drawGame();
        requestAnimationFrame(updateGame);
      }
      
      canvas.addEventListener('click', (e) => {
        if(!game.running) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 随机选择添加树或动物
        if(Math.random() < 0.7) {
          game.trees.push(createTree(x, y));
        } else {
          game.animals.push(createAnimal(x, y));
        }
      });
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.trees = [createTree(), createTree()];
        game.animals = [createAnimal()];
        game.particles = [];
        startBtn.textContent = '🌿 Running...';
        startBtn.disabled = true;
        updateGame();
      });
      
      plantBtn.addEventListener('click', () => {
        if(!game.running) return;
        game.trees.push(createTree());
      });
      
      animalBtn.addEventListener('click', () => {
        if(!game.running) return;
        game.animals.push(createAnimal());
      });
      
      // 初始画面
      drawGame();
      ctx.fillStyle = '#228b22';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Nature Ecosystem Simulator', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Create a balanced ecosystem with trees and animals!', canvas.width/2, canvas.height/2);
      ctx.fillText('Click canvas to add elements or use buttons!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 默认游戏 - 贪吃蛇游戏
const generateDefaultGame = (title: string): string => {
  const gameId = `default-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #555; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #fafafa; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #4caf50, #45a049); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #607d8b, #455a64); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 15px 25px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #4caf50;">0</span></p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = { 
        running: false, 
        score: 0,
        snake: [{x: 250, y: 200}],
        food: {x: 0, y: 0},
        dx: 0,
        dy: 0,
        gridSize: 20
      };
      
      function generateFood() {
        game.food = {
          x: Math.floor(Math.random() * (canvas.width / game.gridSize)) * game.gridSize,
          y: Math.floor(Math.random() * (canvas.height / game.gridSize)) * game.gridSize
        };
      }
      
      function drawGame() {
        // 背景
        ctx.fillStyle = '#fafafa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制网格
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        for(let i = 0; i <= canvas.width; i += game.gridSize) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for(let i = 0; i <= canvas.height; i += game.gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        
        // 绘制蛇
        game.snake.forEach((segment, index) => {
          if(index === 0) {
            // 蛇头
            ctx.fillStyle = '#4caf50';
            ctx.fillRect(segment.x, segment.y, game.gridSize - 2, game.gridSize - 2);
            ctx.fillStyle = '#fff';
            ctx.fillRect(segment.x + 4, segment.y + 4, 4, 4);
            ctx.fillRect(segment.x + 12, segment.y + 4, 4, 4);
          } else {
            // 蛇身
            ctx.fillStyle = '#81c784';
            ctx.fillRect(segment.x, segment.y, game.gridSize - 2, game.gridSize - 2);
          }
        });
        
        // 绘制食物
        ctx.fillStyle = '#ff5722';
        ctx.fillRect(game.food.x, game.food.y, game.gridSize - 2, game.gridSize - 2);
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('🍎', game.food.x + game.gridSize/2, game.food.y + game.gridSize/2 + 4);
      }
      
      function updateGame() {
        if(!game.running) return;
        
        // 移动蛇头
        const head = {x: game.snake[0].x + game.dx, y: game.snake[0].y + game.dy};
        
        // 检查碰撞
        if(head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
          gameOver();
          return;
        }
        
        // 检查撞到自己
        for(let segment of game.snake) {
          if(head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
          }
        }
        
        game.snake.unshift(head);
        
        // 检查吃到食物
        if(head.x === game.food.x && head.y === game.food.y) {
          game.score += 10;
          scoreElement.textContent = game.score;
          generateFood();
        } else {
          game.snake.pop();
        }
        
        drawGame();
        setTimeout(updateGame, 150);
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Score: ' + game.score);
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.snake = [{x: 250, y: 200}];
        game.dx = 0;
        game.dy = 0;
        scoreElement.textContent = game.score;
        generateFood();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        updateGame();
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.snake = [{x: 250, y: 200}];
        game.dx = 0;
        game.dy = 0;
        scoreElement.textContent = game.score;
        generateFood();
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        drawGame();
      });
      
      // 键盘控制
      document.addEventListener('keydown', (e) => {
        if(!game.running) return;
        
        switch(e.key) {
          case 'ArrowUp':
            if(game.dy === 0) { game.dx = 0; game.dy = -game.gridSize; }
            break;
          case 'ArrowDown':
            if(game.dy === 0) { game.dx = 0; game.dy = game.gridSize; }
            break;
          case 'ArrowLeft':
            if(game.dx === 0) { game.dx = -game.gridSize; game.dy = 0; }
            break;
          case 'ArrowRight':
            if(game.dx === 0) { game.dx = game.gridSize; game.dy = 0; }
            break;
        }
      });
      
      // 初始画面
      generateFood();
      drawGame();
      ctx.fillStyle = '#555';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Snake Game', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Use arrow keys to control the snake!', canvas.width/2, canvas.height/2);
      ctx.fillText('Eat red apples to grow and score points!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 专门为Block Merge 2048创建的带滑动动画版本
const generateAnimated2048Game = (gameId: string, title: string): string => {
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="440" height="440" style="border: 2px solid #ddd; border-radius: 8px; background: #fafafa; cursor: pointer; display: block;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4); transition: all 0.3s; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4); transition: all 0.3s; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 20px 30px; background: rgba(255,255,255,0.9); border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 24px; color: #333; font-weight: bold; text-align: center;">Score: <span id="score-${gameId}" style="color: #28a745; font-size: 28px;">0</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🎯 <strong>Use ARROW KEYS or SWIPE</strong> to slide tiles with smooth animation! Combine tiles with the same number to reach 2048!
    </p>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        board: Array(4).fill().map(() => Array(4).fill(0)),
                 tileSize: 95,
         gap: 8,
         offsetX: 25,
         offsetY: 25,
        isAnimating: false
      };
      
      function startGame() {
        if (game.running) return;
        
        game.running = true;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        game.isAnimating = false;
        updateScore();
        addNewTile();
        addNewTile();
        drawBoard();
        
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
      }
      
      function resetGame() {
        game.running = false;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        game.isAnimating = false;
        
        updateScore();
        drawStartScreen();
        
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (game.board[i][j] === 0) {
              emptyCells.push({x: i, y: j});
            }
          }
        }
        if (emptyCells.length > 0) {
          const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          const value = Math.random() < 0.9 ? 2 : 4;
          game.board[cell.x][cell.y] = value;
          animateNewTile(cell.x, cell.y, value);
        }
      }
      
      function animateNewTile(row, col, value) {
        const duration = 300;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
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
          
          const x = col * (game.tileSize + game.gap) + game.offsetX;
          const y = row * (game.tileSize + game.gap) + game.offsetY;
          
          const originalValue = game.board[row][col];
          game.board[row][col] = 0;
          drawBoard();
          game.board[row][col] = originalValue;
          
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
        
        const scaledSize = game.tileSize * scale;
        const offsetScale = (game.tileSize - scaledSize) / 2;
        
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
          ctx.fillText(value, x + game.tileSize/2, y + game.tileSize/2);
        }
        
        ctx.restore();
      }
      
             function drawBoard() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         
         // 绘制简洁的背景
         ctx.fillStyle = '#bbada0';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         // 绘制游戏区域背景
         ctx.fillStyle = '#cdc1b4';
         ctx.fillRect(15, 15, 410, 410);
        
                 // 绘制背景网格
         for(let i = 0; i < 4; i++) {
           for(let j = 0; j < 4; j++) {
             let x = j * (game.tileSize + game.gap) + game.offsetX;
             let y = i * (game.tileSize + game.gap) + game.offsetY;
             
             ctx.fillStyle = '#eee4da';
             ctx.fillRect(x, y, game.tileSize, game.tileSize);
             ctx.strokeStyle = '#bbada0';
             ctx.lineWidth = 2;
             ctx.strokeRect(x, y, game.tileSize, game.tileSize);
           }
         }
        
        // 绘制方块
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(game.board[i][j] !== 0) {
              let x = j * (game.tileSize + game.gap) + game.offsetX;
              let y = i * (game.tileSize + game.gap) + game.offsetY;
              drawTile(game.board[i][j], x, y);
            }
          }
        }
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#edc22e';
      }
      
      function updateScore() {
        scoreElement.textContent = game.score;
      }
      
             function drawStartScreen() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         
         ctx.fillStyle = '#bbada0';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         ctx.fillStyle = '#776e65';
         ctx.font = 'bold 28px Arial';
         ctx.textAlign = 'center';
         ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 60);
         
         ctx.font = '16px Arial';
         ctx.fillStyle = '#8f7a66';
         ctx.fillText('Click "Start Game" to begin', canvas.width/2, canvas.height/2);
         ctx.fillText('Use arrow keys or swipe for smooth animation', canvas.width/2, canvas.height/2 + 25);
         
         ctx.font = '48px Arial';
         ctx.fillText('🎲', canvas.width/2, canvas.height/2 - 120);
       }
      
      function animateMove(direction) {
        if (game.isAnimating) return false;
        
                 const oldBoard = game.board.map(row => [...row]);
         const newBoard = game.board.map(row => [...row]);
         let moved = false;
        
                 // 执行移动逻辑
         if (direction === 'left') {
           for (let i = 0; i < 4; i++) {
             let row = newBoard[i].filter(val => val !== 0);
             for (let j = 0; j < row.length - 1; j++) {
               if (row[j] === row[j + 1]) {
                 row[j] *= 2;
                 game.score += row[j];
                 row.splice(j + 1, 1);
                 moved = true;
               }
             }
             while (row.length < 4) row.push(0);
             if (JSON.stringify(oldBoard[i]) !== JSON.stringify(row)) moved = true;
             newBoard[i] = row;
           }
         } else if (direction === 'right') {
           for (let i = 0; i < 4; i++) {
             let row = newBoard[i].filter(val => val !== 0);
             for (let j = row.length - 1; j > 0; j--) {
               if (row[j] === row[j - 1]) {
                 row[j] *= 2;
                 game.score += row[j];
                 row.splice(j - 1, 1);
                 j--;
                 moved = true;
               }
             }
             while (row.length < 4) row.unshift(0);
             if (JSON.stringify(oldBoard[i]) !== JSON.stringify(row)) moved = true;
             newBoard[i] = row;
           }
         } else if (direction === 'up') {
           for (let j = 0; j < 4; j++) {
             let col = [];
             for (let i = 0; i < 4; i++) {
               if (newBoard[i][j] !== 0) col.push(newBoard[i][j]);
             }
             for (let i = 0; i < col.length - 1; i++) {
               if (col[i] === col[i + 1]) {
                 col[i] *= 2;
                 game.score += col[i];
                 col.splice(i + 1, 1);
                 moved = true;
               }
             }
             while (col.length < 4) col.push(0);
             for (let i = 0; i < 4; i++) {
               if (oldBoard[i][j] !== col[i]) moved = true;
               newBoard[i][j] = col[i];
             }
           }
         } else if (direction === 'down') {
           for (let j = 0; j < 4; j++) {
             let col = [];
             for (let i = 0; i < 4; i++) {
               if (newBoard[i][j] !== 0) col.push(newBoard[i][j]);
             }
             for (let i = col.length - 1; i > 0; i--) {
               if (col[i] === col[i - 1]) {
                 col[i] *= 2;
                 game.score += col[i];
                 col.splice(i - 1, 1);
                 i--;
                 moved = true;
               }
             }
             while (col.length < 4) col.unshift(0);
             for (let i = 0; i < 4; i++) {
               if (oldBoard[i][j] !== col[i]) moved = true;
               newBoard[i][j] = col[i];
             }
           }
         }
        
        if (moved) {
          game.isAnimating = true;
          updateScore();
          
          // 滑动动画
          const animationDuration = 200;
          const startTime = Date.now();
          
                     function animate() {
             const currentTime = Date.now();
             const progress = Math.min((currentTime - startTime) / animationDuration, 1);
             const easeProgress = 1 - Math.pow(1 - progress, 3);
             
             // 绘制背景和网格（一次性）
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = '#bbada0';
             ctx.fillRect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = '#cdc1b4';
             ctx.fillRect(15, 15, 410, 410);
             
             // 绘制空白网格
             for(let i = 0; i < 4; i++) {
               for(let j = 0; j < 4; j++) {
                 let x = j * (game.tileSize + game.gap) + game.offsetX;
                 let y = i * (game.tileSize + game.gap) + game.offsetY;
                 ctx.fillStyle = '#eee4da';
                 ctx.fillRect(x, y, game.tileSize, game.tileSize);
                 ctx.strokeStyle = '#bbada0';
                 ctx.lineWidth = 2;
                 ctx.strokeRect(x, y, game.tileSize, game.tileSize);
               }
             }
             
             // 计算并绘制移动中的方块
             const animatingTiles = [];
             
             for(let i = 0; i < 4; i++) {
               for(let j = 0; j < 4; j++) {
                 if(oldBoard[i][j] !== 0) {
                   let newI = i, newJ = j;
                   
                   // 找到方块的新位置
                   for(let ni = 0; ni < 4; ni++) {
                     for(let nj = 0; nj < 4; nj++) {
                       if(newBoard[ni][nj] === oldBoard[i][j]) {
                         // 验证这是正确的移动方向
                         if((direction === 'left' && ni === i && nj <= j) ||
                            (direction === 'right' && ni === i && nj >= j) ||
                            (direction === 'up' && nj === j && ni <= i) ||
                            (direction === 'down' && nj === j && ni >= i)) {
                           newI = ni;
                           newJ = nj;
                           break;
                         }
                       }
                     }
                   }
                   
                   const startX = j * (game.tileSize + game.gap) + game.offsetX;
                   const startY = i * (game.tileSize + game.gap) + game.offsetY;
                   const endX = newJ * (game.tileSize + game.gap) + game.offsetX;
                   const endY = newI * (game.tileSize + game.gap) + game.offsetY;
                   
                   const currentX = startX + (endX - startX) * easeProgress;
                   const currentY = startY + (endY - startY) * easeProgress;
                   
                   animatingTiles.push({
                     value: oldBoard[i][j],
                     x: currentX,
                     y: currentY
                   });
                 }
               }
             }
             
             // 绘制所有移动中的方块（避免重复绘制）
             animatingTiles.forEach(tile => {
               drawTile(tile.value, tile.x, tile.y);
             });
             
             if (progress < 1) {
               requestAnimationFrame(animate);
             } else {
               game.board = [...newBoard.map(row => [...row])];
               drawBoard();
               addNewTile();
               game.isAnimating = false;
             }
           }
          
          animate();
        }
        
        return moved;
      }
      
      document.addEventListener('keydown', function(e) {
        if (!game.running || game.isAnimating) return;
        
        let moved = false;
        switch(e.key) {
          case 'ArrowLeft':
            moved = animateMove('left');
            break;
          case 'ArrowRight':
            moved = animateMove('right');
            break;
          case 'ArrowUp':
            moved = animateMove('up');
            break;
          case 'ArrowDown':
            moved = animateMove('down');
            break;
        }
        
        e.preventDefault();
      });
      
      // 触摸支持
      let touchStartX = 0;
      let touchStartY = 0;
      let isTouching = false;
      
      canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (game.isAnimating || !game.running) return;
        
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
        if (!isTouching || game.isAnimating || !game.running) return;
        
        const touch = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        const deltaX = (touch.clientX - rect.left) - touchStartX;
        const deltaY = (touch.clientY - rect.top) - touchStartY;
        const minDistance = 30;
        
        if (Math.abs(deltaX) > minDistance || Math.abs(deltaY) > minDistance) {
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
      
      startBtn.addEventListener('click', startGame);
      resetBtn.addEventListener('click', resetGame);
      
      drawStartScreen();
    })();
  </script>
</div>`;
=======
// 为不同类别生成专业级游戏
export const generateSimpleGameCode = (title: string, category: string): string => {
  switch (category) {
    case 'puzzle':
      return generatePuzzleGame(title);
    case 'simulation':
      return generateSimulationGame(title);
    case 'adventure':
      return generateAdventureGame(title);
    case 'casual':
      return generateCasualGame(title);
    case 'creative':
      return generateCreativeGame(title);
    case 'nature':
      return generateNatureGame(title);
    default:
      return generateDefaultGame(title);
  }
};

// 益智类游戏 - 2048风格
const generatePuzzleGame = (title: string): string => {
  const gameId = `puzzle-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  // 为Block Merge 2048生成特殊的滑动动画版本
  if (title === 'Block Merge 2048') {
    return generateAnimated2048Game(gameId, title);
  }
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="420" height="420" style="border: 2px solid #ddd; border-radius: 8px; background: #f8f9fa; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4); transition: all 0.3s; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4); transition: all 0.3s; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 20px 30px; background: rgba(255,255,255,0.9); border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 24px; color: #333; font-weight: bold; text-align: center;">Score: <span id="score-${gameId}" style="color: #28a745; font-size: 28px;">0</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🧩 <strong>Use ARROW KEYS</strong> to move tiles. Combine tiles with the same number to reach higher scores! Try to reach 2048!
    </p>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        board: Array(4).fill().map(() => Array(4).fill(0)),
        tileSize: 90,
        gap: 10,
        offsetX: 20,
        offsetY: 20
      };
      
      function startGame() {
        if (game.running) return;
        
        game.running = true;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        updateScore();
        addNewTile();
        addNewTile();
        drawBoard();
        
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
      }
      
      function resetGame() {
        game.running = false;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        
        updateScore();
        drawStartScreen();
        
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (game.board[i][j] === 0) {
              emptyCells.push({x: i, y: j});
            }
          }
        }
        if (emptyCells.length > 0) {
          const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          game.board[cell.x][cell.y] = Math.random() < 0.9 ? 2 : 4;
        }
      }
      
      function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#fafbfc');
        gradient.addColorStop(1, '#ebedf0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const x = j * (game.tileSize + game.gap) + game.offsetX;
            const y = i * (game.tileSize + game.gap) + game.offsetY;
            
            ctx.fillStyle = game.board[i][j] === 0 ? '#cdd4da' : getTileColor(game.board[i][j]);
            ctx.fillRect(x, y, game.tileSize, game.tileSize);
            
            if (game.board[i][j] !== 0) {
              ctx.fillStyle = game.board[i][j] <= 4 ? '#776e65' : '#f9f6f2';
              ctx.font = 'bold 24px Arial';
              ctx.textAlign = 'center';
              ctx.fillText(game.board[i][j], x + game.tileSize/2, y + game.tileSize/2 + 8);
            }
          }
        }
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#3c3a32';
      }
      
      function updateScore() {
        scoreElement.textContent = game.score;
      }
      
      function drawStartScreen() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#fafbfc');
        gradient.addColorStop(1, '#ebedf0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#776e65';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 40);
        
        ctx.font = '18px Arial';
        ctx.fillStyle = '#8f7a66';
        ctx.fillText('Click "Start Game" to begin', canvas.width/2, canvas.height/2);
        ctx.fillText('Use arrow keys to play', canvas.width/2, canvas.height/2 + 25);
        
        ctx.font = '48px Arial';
        ctx.fillText('🧩', canvas.width/2, canvas.height/2 - 100);
      }
      
      document.addEventListener('keydown', function(e) {
        if (!game.running) return;
        
        let moved = false;
        switch(e.key) {
          case 'ArrowLeft':
            moved = moveLeft();
            break;
          case 'ArrowRight':
            moved = moveRight();
            break;
          case 'ArrowUp':
            moved = moveUp();
            break;
          case 'ArrowDown':
            moved = moveDown();
            break;
        }
        
        if (moved) {
          addNewTile();
          drawBoard();
          updateScore();
        }
        
        e.preventDefault();
      });
      
      function moveLeft() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
          let row = game.board[i].filter(val => val !== 0);
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              game.score += row[j];
              row.splice(j + 1, 1);
            }
          }
          while (row.length < 4) row.push(0);
          if (JSON.stringify(game.board[i]) !== JSON.stringify(row)) moved = true;
          game.board[i] = row;
        }
        return moved;
      }
      
      function moveRight() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
          let row = game.board[i].filter(val => val !== 0);
          for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
              row[j] *= 2;
              game.score += row[j];
              row.splice(j - 1, 1);
              j--;
            }
          }
          while (row.length < 4) row.unshift(0);
          if (JSON.stringify(game.board[i]) !== JSON.stringify(row)) moved = true;
          game.board[i] = row;
        }
        return moved;
      }
      
      function moveUp() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
          let col = [];
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== 0) col.push(game.board[i][j]);
          }
          for (let i = 0; i < col.length - 1; i++) {
            if (col[i] === col[i + 1]) {
              col[i] *= 2;
              game.score += col[i];
              col.splice(i + 1, 1);
            }
          }
          while (col.length < 4) col.push(0);
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== col[i]) moved = true;
            game.board[i][j] = col[i];
          }
        }
        return moved;
      }
      
      function moveDown() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
          let col = [];
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== 0) col.push(game.board[i][j]);
          }
          for (let i = col.length - 1; i > 0; i--) {
            if (col[i] === col[i - 1]) {
              col[i] *= 2;
              game.score += col[i];
              col.splice(i - 1, 1);
              i--;
            }
          }
          while (col.length < 4) col.unshift(0);
          for (let i = 0; i < 4; i++) {
            if (game.board[i][j] !== col[i]) moved = true;
            game.board[i][j] = col[i];
          }
        }
        return moved;
      }
      
      startBtn.addEventListener('click', startGame);
      resetBtn.addEventListener('click', resetGame);
      
      drawStartScreen();
    })();
  </script>
</div>`;
};

// 模拟类游戏 - 专业级俄罗斯方块
const generateSimulationGame = (title: string): string => {
  const gameId = `sim-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Tetris - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="400" height="600" style="border: 2px solid #333; border-radius: 8px; background: #000; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #28a745, #20c997); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="pause-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffc107, #ff8800); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">⏸️ Pause</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #dc3545, #c82333); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #28a745;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Lines: <span id="lines-${gameId}" style="color: #007bff;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #dc3545;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🎯 <strong>Arrow Keys:</strong> Move & Rotate | <strong>Space:</strong> Drop | <strong>Down:</strong> Fast Drop
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const pauseBtn = document.getElementById('pause-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const linesElement = document.getElementById('lines-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      const COLS = 10;
      const ROWS = 20;
      const BLOCK_SIZE = 30;
      
      let game = {
        running: false,
        paused: false,
        score: 0,
        lines: 0,
        level: 1,
        board: Array(ROWS).fill().map(() => Array(COLS).fill(0)),
        currentPiece: null,
        nextPiece: null,
        dropTime: 0,
        dropInterval: 1000
      };
      
      const pieces = [
        {
          shape: [[1,1,1,1]], // I
          color: '#00ffff'
        },
        {
          shape: [[1,1],[1,1]], // O
          color: '#ffff00'
        },
        {
          shape: [[0,1,0],[1,1,1]], // T
          color: '#800080'
        },
        {
          shape: [[0,1,1],[1,1,0]], // S
          color: '#00ff00'
        },
        {
          shape: [[1,1,0],[0,1,1]], // Z
          color: '#ff0000'
        },
        {
          shape: [[1,0,0],[1,1,1]], // J
          color: '#0000ff'
        },
        {
          shape: [[0,0,1],[1,1,1]], // L
          color: '#ffa500'
        }
      ];
      
      function createPiece() {
        const piece = pieces[Math.floor(Math.random() * pieces.length)];
        return {
          shape: piece.shape,
          color: piece.color,
          x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
          y: 0
        };
      }
      
      function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
      }
      
      function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制背景网格
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for(let x = 0; x <= COLS; x++) {
          ctx.beginPath();
          ctx.moveTo(x * BLOCK_SIZE, 0);
          ctx.lineTo(x * BLOCK_SIZE, ROWS * BLOCK_SIZE);
          ctx.stroke();
        }
        for(let y = 0; y <= ROWS; y++) {
          ctx.beginPath();
          ctx.moveTo(0, y * BLOCK_SIZE);
          ctx.lineTo(COLS * BLOCK_SIZE, y * BLOCK_SIZE);
          ctx.stroke();
        }
        
        // 绘制已放置的方块
        for(let y = 0; y < ROWS; y++) {
          for(let x = 0; x < COLS; x++) {
            if(game.board[y][x]) {
              drawBlock(x, y, game.board[y][x]);
            }
          }
        }
        
        // 绘制当前方块
        if(game.currentPiece) {
          for(let y = 0; y < game.currentPiece.shape.length; y++) {
            for(let x = 0; x < game.currentPiece.shape[y].length; x++) {
              if(game.currentPiece.shape[y][x]) {
                drawBlock(game.currentPiece.x + x, game.currentPiece.y + y, game.currentPiece.color);
              }
            }
          }
        }
      }
      
      function isValidMove(piece, dx, dy, rotation = null) {
        const shape = rotation || piece.shape;
        const newX = piece.x + dx;
        const newY = piece.y + dy;
        
        for(let y = 0; y < shape.length; y++) {
          for(let x = 0; x < shape[y].length; x++) {
            if(shape[y][x]) {
              const boardX = newX + x;
              const boardY = newY + y;
              
              if(boardX < 0 || boardX >= COLS || boardY >= ROWS) return false;
              if(boardY >= 0 && game.board[boardY][boardX]) return false;
            }
          }
        }
        return true;
      }
      
      function rotatePiece(piece) {
        const rotated = piece.shape[0].map((_, index) =>
          piece.shape.map(row => row[index]).reverse()
        );
        return rotated;
      }
      
      function placePiece() {
        for(let y = 0; y < game.currentPiece.shape.length; y++) {
          for(let x = 0; x < game.currentPiece.shape[y].length; x++) {
            if(game.currentPiece.shape[y][x]) {
              const boardY = game.currentPiece.y + y;
              const boardX = game.currentPiece.x + x;
              if(boardY >= 0) {
                game.board[boardY][boardX] = game.currentPiece.color;
              }
            }
          }
        }
        
        clearLines();
        game.currentPiece = game.nextPiece;
        game.nextPiece = createPiece();
        
        if(!isValidMove(game.currentPiece, 0, 0)) {
          gameOver();
        }
      }
      
      function clearLines() {
        let linesCleared = 0;
        for(let y = ROWS - 1; y >= 0; y--) {
          if(game.board[y].every(cell => cell !== 0)) {
            game.board.splice(y, 1);
            game.board.unshift(Array(COLS).fill(0));
            linesCleared++;
            y++; // 重新检查这一行
          }
        }
        
        if(linesCleared > 0) {
          game.lines += linesCleared;
          game.score += linesCleared * 100 * game.level;
          game.level = Math.floor(game.lines / 10) + 1;
          game.dropInterval = Math.max(100, 1000 - (game.level - 1) * 100);
          updateDisplay();
        }
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score);
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function updateDisplay() {
        scoreElement.textContent = game.score;
        linesElement.textContent = game.lines;
        levelElement.textContent = game.level;
      }
      
      function gameLoop(currentTime) {
        if(!game.running || game.paused) {
          if(game.running) requestAnimationFrame(gameLoop);
          return;
        }
        
        if(currentTime - game.dropTime > game.dropInterval) {
          if(isValidMove(game.currentPiece, 0, 1)) {
            game.currentPiece.y++;
          } else {
            placePiece();
          }
          game.dropTime = currentTime;
        }
        
        drawBoard();
        requestAnimationFrame(gameLoop);
      }
      
      startBtn.addEventListener('click', () => {
        if(!game.running) {
          game.running = true;
          game.paused = false;
          game.score = 0;
          game.lines = 0;
          game.level = 1;
          game.board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
          game.currentPiece = createPiece();
          game.nextPiece = createPiece();
          game.dropTime = 0;
          game.dropInterval = 1000;
          updateDisplay();
          startBtn.textContent = '🎮 Playing...';
          startBtn.disabled = true;
          requestAnimationFrame(gameLoop);
        }
      });
      
      pauseBtn.addEventListener('click', () => {
        if(game.running) {
          game.paused = !game.paused;
          pauseBtn.textContent = game.paused ? '▶️ Resume' : '⏸️ Pause';
        }
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.paused = false;
        game.score = 0;
        game.lines = 0;
        game.level = 1;
        game.board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
        updateDisplay();
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        pauseBtn.textContent = '⏸️ Pause';
        drawBoard();
      });
      
      document.addEventListener('keydown', (e) => {
        if(!game.running || game.paused || !game.currentPiece) return;
        
        switch(e.key) {
          case 'ArrowLeft':
            if(isValidMove(game.currentPiece, -1, 0)) {
              game.currentPiece.x--;
            }
            break;
          case 'ArrowRight':
            if(isValidMove(game.currentPiece, 1, 0)) {
              game.currentPiece.x++;
            }
            break;
          case 'ArrowDown':
            if(isValidMove(game.currentPiece, 0, 1)) {
              game.currentPiece.y++;
              game.score++;
            }
            break;
          case 'ArrowUp':
            const rotated = rotatePiece(game.currentPiece);
            if(isValidMove(game.currentPiece, 0, 0, rotated)) {
              game.currentPiece.shape = rotated;
            }
            break;
          case ' ':
            while(isValidMove(game.currentPiece, 0, 1)) {
              game.currentPiece.y++;
              game.score += 2;
            }
            placePiece();
            e.preventDefault();
            break;
        }
        updateDisplay();
      });
      
      // 初始画面
      drawBoard();
      updateDisplay();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('TETRIS', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Click Start to Play!', canvas.width/2, canvas.height/2);
    })();
  </script>
</div>`;
};

// 冒险类游戏 - 专业级平台跳跃游戏
const generateAdventureGame = (title: string): string => {
  const gameId = `adv-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #fff8dc 0%, #f5f5dc 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #8b4513; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Platform Adventure - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #f0e68c; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffd700, #daa520); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #ffd700;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Lives: <span id="lives-${gameId}" style="color: #dc3545;">3</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #007bff;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🏃 <strong>WASD/Arrow Keys:</strong> Move & Jump | <strong>Collect coins, avoid enemies!</strong>
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const livesElement = document.getElementById('lives-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        lives: 3,
        level: 1,
        player: {
          x: 50,
          y: 300,
          width: 25,
          height: 30,
          vx: 0,
          vy: 0,
          grounded: false,
          facingRight: true
        },
        coins: [],
        enemies: [],
        platforms: [],
        particles: [],
        keys: {},
        camera: { x: 0, y: 0 }
      };
      
      const GRAVITY = 0.8;
      const JUMP_POWER = -15;
      const MOVE_SPEED = 5;
      const WORLD_WIDTH = 1200;
      
      function initLevel() {
        game.coins = [];
        game.enemies = [];
        game.platforms = [];
        game.particles = [];
        
        // 创建平台
        const platformData = [
          {x: 0, y: 370, width: 200, height: 30},
          {x: 250, y: 320, width: 100, height: 20},
          {x: 400, y: 270, width: 120, height: 20},
          {x: 570, y: 220, width: 100, height: 20},
          {x: 720, y: 170, width: 150, height: 20},
          {x: 920, y: 220, width: 100, height: 20},
          {x: 1070, y: 300, width: 130, height: 30}
        ];
        
        game.platforms = platformData.map(p => ({...p, color: '#8b4513'}));
        
        // 创建金币
        for(let i = 0; i < 15; i++) {
          game.coins.push({
            x: 100 + i * 70 + Math.random() * 50,
            y: 100 + Math.random() * 200,
            width: 15,
            height: 15,
            collected: false,
            animation: 0
          });
        }
        
        // 创建敌人
        for(let i = 0; i < 6; i++) {
          game.enemies.push({
            x: 200 + i * 150 + Math.random() * 100,
            y: 300,
            width: 20,
            height: 20,
            vx: (Math.random() - 0.5) * 4,
            vy: 0,
            grounded: false,
            color: '#dc143c'
          });
        }
      }
      
      function createParticle(x, y, color, count = 5) {
        for(let i = 0; i < count; i++) {
          game.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 6,
            life: 30,
            color: color,
            size: 3 + Math.random() * 3
          });
        }
      }
      
      function updateCamera() {
        game.camera.x = game.player.x - canvas.width / 2;
        game.camera.x = Math.max(0, Math.min(game.camera.x, WORLD_WIDTH - canvas.width));
      }
      
      function checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
      }
      
      function updatePhysics(obj) {
        obj.vy += GRAVITY;
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.grounded = false;
        
        // 平台碰撞检测
        game.platforms.forEach(platform => {
          if(checkCollision(obj, platform)) {
            if(obj.vy > 0 && obj.y < platform.y) {
              obj.y = platform.y - obj.height;
              obj.vy = 0;
              obj.grounded = true;
            }
          }
        });
        
        // 地面碰撞
        if(obj.y + obj.height > canvas.height - 30) {
          obj.y = canvas.height - 30 - obj.height;
          obj.vy = 0;
          obj.grounded = true;
        }
        
        // 边界检测
        if(obj.x < 0) obj.x = 0;
        if(obj.x + obj.width > WORLD_WIDTH) obj.x = WORLD_WIDTH - obj.width;
      }
      
      function updatePlayer() {
        // 水平移动
        if(game.keys['ArrowLeft'] || game.keys['a'] || game.keys['A']) {
          game.player.vx = -MOVE_SPEED;
          game.player.facingRight = false;
        } else if(game.keys['ArrowRight'] || game.keys['d'] || game.keys['D']) {
          game.player.vx = MOVE_SPEED;
          game.player.facingRight = true;
        } else {
          game.player.vx *= 0.8; // 摩擦力
        }
        
        // 跳跃
        if((game.keys['ArrowUp'] || game.keys['w'] || game.keys['W'] || game.keys[' ']) && game.player.grounded) {
          game.player.vy = JUMP_POWER;
        }
        
        updatePhysics(game.player);
        updateCamera();
      }
      
      function updateEnemies() {
        game.enemies.forEach(enemy => {
          // 简单AI：随机改变方向
          if(Math.random() < 0.02) {
            enemy.vx = (Math.random() - 0.5) * 4;
          }
          
          updatePhysics(enemy);
          
          // 玩家碰撞检测
          if(checkCollision(game.player, enemy)) {
            game.lives--;
            livesElement.textContent = game.lives;
            createParticle(game.player.x + game.player.width/2, game.player.y + game.player.height/2, '#ff0000', 10);
            
            if(game.lives <= 0) {
              gameOver();
            } else {
              // 重置玩家位置
              game.player.x = 50;
              game.player.y = 300;
              game.player.vx = 0;
              game.player.vy = 0;
            }
          }
        });
      }
      
      function updateCoins() {
        game.coins.forEach(coin => {
          if(!coin.collected) {
            coin.animation += 0.2;
            
            if(checkCollision(game.player, coin)) {
              coin.collected = true;
              game.score += 10;
              scoreElement.textContent = game.score;
              createParticle(coin.x + coin.width/2, coin.y + coin.height/2, '#ffd700');
              
              // 检查是否收集完所有金币
              if(game.coins.every(c => c.collected)) {
                nextLevel();
              }
            }
          }
        });
      }
      
      function updateParticles() {
        game.particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.3;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
      }
      
      function nextLevel() {
        game.level++;
        levelElement.textContent = game.level;
        game.score += 100;
        scoreElement.textContent = game.score;
        game.player.x = 50;
        game.player.y = 300;
        initLevel();
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score + ' (Level ' + game.level + ')');
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#87ceeb');
        gradient.addColorStop(1, '#f0e68c');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.translate(-game.camera.x, 0);
        
        // 绘制平台
        game.platforms.forEach(platform => {
          ctx.fillStyle = platform.color;
          ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
          ctx.strokeStyle = '#654321';
          ctx.lineWidth = 2;
          ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
        });
        
        // 绘制地面
        ctx.fillStyle = '#228b22';
        ctx.fillRect(0, canvas.height - 30, WORLD_WIDTH, 30);
        
        // 绘制金币
        game.coins.forEach(coin => {
          if(!coin.collected) {
            const wobble = Math.sin(coin.animation) * 3;
            ctx.fillStyle = '#ffd700';
            ctx.fillRect(coin.x, coin.y + wobble, coin.width, coin.height);
            ctx.strokeStyle = '#ff8c00';
            ctx.lineWidth = 2;
            ctx.strokeRect(coin.x, coin.y + wobble, coin.width, coin.height);
            
            // 闪光效果
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fillRect(coin.x + 2, coin.y + wobble + 2, coin.width - 4, 3);
          }
        });
        
        // 绘制敌人
        game.enemies.forEach(enemy => {
          ctx.fillStyle = enemy.color;
          ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
          ctx.fillStyle = '#fff';
          ctx.fillRect(enemy.x + 5, enemy.y + 5, 3, 3);
          ctx.fillRect(enemy.x + 12, enemy.y + 5, 3, 3);
        });
        
        // 绘制玩家
        ctx.fillStyle = '#4169e1';
        ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
        ctx.fillStyle = '#fff';
        if(game.player.facingRight) {
          ctx.fillRect(game.player.x + 18, game.player.y + 5, 4, 4);
        } else {
          ctx.fillRect(game.player.x + 3, game.player.y + 5, 4, 4);
        }
        
        // 绘制粒子
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          ctx.globalAlpha = 1;
        });
        
        ctx.restore();
      }
      
      function gameLoop() {
        if(!game.running) return;
        
        updatePlayer();
        updateEnemies();
        updateCoins();
        updateParticles();
        drawGame();
        
        requestAnimationFrame(gameLoop);
      }
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.lives = 3;
        game.level = 1;
        game.player.x = 50;
        game.player.y = 300;
        game.player.vx = 0;
        game.player.vy = 0;
        scoreElement.textContent = game.score;
        livesElement.textContent = game.lives;
        levelElement.textContent = game.level;
        initLevel();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        gameLoop();
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.lives = 3;
        game.level = 1;
        scoreElement.textContent = game.score;
        livesElement.textContent = game.lives;
        levelElement.textContent = game.level;
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        initLevel();
        drawGame();
      });
      
      document.addEventListener('keydown', (e) => {
        game.keys[e.key] = true;
        e.preventDefault();
      });
      
      document.addEventListener('keyup', (e) => {
        game.keys[e.key] = false;
      });
      
      // 初始画面
      initLevel();
      drawGame();
      ctx.fillStyle = '#8b4513';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Platform Adventure', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Collect all coins to advance to next level!', canvas.width/2, canvas.height/2);
      ctx.fillText('Use WASD or Arrow Keys to move and jump!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 休闲类游戏 - 专业级消除游戏
const generateCasualGame = (title: string): string => {
  const gameId = `casual-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #dc143c; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Match-3 Puzzle - ${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="480" height="480" style="border: 2px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="hint-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ffd700, #daa520); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">💡 Hint</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #ff6347, #dc143c); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 30px; background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #dc143c;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Moves: <span id="moves-${gameId}" style="color: #007bff;">30</span></p>
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Level: <span id="level-${gameId}" style="color: #28a745;">1</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🔄 <strong>Click & Drag:</strong> Swap adjacent gems | <strong>Match 3+ to score!</strong>
    </p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const hintBtn = document.getElementById('hint-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      const movesElement = document.getElementById('moves-${gameId}');
      const levelElement = document.getElementById('level-${gameId}');
      
      const GRID_SIZE = 8;
      const CELL_SIZE = 60;
      const COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
      
      let game = {
        running: false,
        score: 0,
        moves: 30,
        level: 1,
        grid: [],
        selectedCell: null,
        animating: false,
        particles: []
      };
      
      function initGrid() {
        game.grid = [];
        for(let row = 0; row < GRID_SIZE; row++) {
          game.grid[row] = [];
          for(let col = 0; col < GRID_SIZE; col++) {
            game.grid[row][col] = {
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              type: Math.floor(Math.random() * COLORS.length),
              x: col * CELL_SIZE,
              y: row * CELL_SIZE,
              targetX: col * CELL_SIZE,
              targetY: row * CELL_SIZE
            };
          }
        }
        // 确保没有初始匹配
        removeInitialMatches();
      }
      
      function removeInitialMatches() {
        let hasMatches = true;
        while(hasMatches) {
          hasMatches = false;
          for(let row = 0; row < GRID_SIZE; row++) {
            for(let col = 0; col < GRID_SIZE; col++) {
              if(hasMatchAt(row, col)) {
                game.grid[row][col].type = Math.floor(Math.random() * COLORS.length);
                game.grid[row][col].color = COLORS[game.grid[row][col].type];
                hasMatches = true;
              }
            }
          }
        }
      }
      
      function hasMatchAt(row, col) {
        const type = game.grid[row][col].type;
        
        // 检查水平匹配
        let horizontalCount = 1;
        for(let c = col - 1; c >= 0 && game.grid[row][c].type === type; c--) horizontalCount++;
        for(let c = col + 1; c < GRID_SIZE && game.grid[row][c].type === type; c++) horizontalCount++;
        
        // 检查垂直匹配
        let verticalCount = 1;
        for(let r = row - 1; r >= 0 && game.grid[r][col].type === type; r--) verticalCount++;
        for(let r = row + 1; r < GRID_SIZE && game.grid[r][col].type === type; r++) verticalCount++;
        
        return horizontalCount >= 3 || verticalCount >= 3;
      }
      
      function createParticle(x, y, color) {
        for(let i = 0; i < 6; i++) {
          game.particles.push({
            x: x + CELL_SIZE/2,
            y: y + CELL_SIZE/2,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 6,
            life: 30,
            color: color,
            size: 3 + Math.random() * 3
          });
        }
      }
      
      function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制背景
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制网格
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            const cell = game.grid[row][col];
            
            // 绘制宝石
            ctx.fillStyle = cell.color;
            ctx.fillRect(cell.x + 2, cell.y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
            
            // 绘制边框
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 2;
            ctx.strokeRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
            
            // 绘制高光效果
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(cell.x + 5, cell.y + 5, CELL_SIZE - 20, 10);
            
            // 选中效果
            if(game.selectedCell && game.selectedCell.row === row && game.selectedCell.col === col) {
              ctx.strokeStyle = '#ffd700';
              ctx.lineWidth = 4;
              ctx.strokeRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
            }
          }
        }
        
        // 绘制粒子效果
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          ctx.globalAlpha = 1;
        });
      }
      
      function swapCells(row1, col1, row2, col2) {
        const temp = {...game.grid[row1][col1]};
        game.grid[row1][col1] = {...game.grid[row2][col2]};
        game.grid[row2][col2] = temp;
        
        // 更新位置
        game.grid[row1][col1].targetX = col1 * CELL_SIZE;
        game.grid[row1][col1].targetY = row1 * CELL_SIZE;
        game.grid[row2][col2].targetX = col2 * CELL_SIZE;
        game.grid[row2][col2].targetY = row2 * CELL_SIZE;
      }
      
      function findMatches() {
        const matches = [];
        
        // 水平匹配
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE - 2; col++) {
            const type = game.grid[row][col].type;
            let count = 1;
            
            for(let c = col + 1; c < GRID_SIZE && game.grid[row][c].type === type; c++) {
              count++;
            }
            
            if(count >= 3) {
              for(let c = col; c < col + count; c++) {
                matches.push({row, col: c});
              }
            }
          }
        }
        
        // 垂直匹配
        for(let col = 0; col < GRID_SIZE; col++) {
          for(let row = 0; row < GRID_SIZE - 2; row++) {
            const type = game.grid[row][col].type;
            let count = 1;
            
            for(let r = row + 1; r < GRID_SIZE && game.grid[r][col].type === type; r++) {
              count++;
            }
            
            if(count >= 3) {
              for(let r = row; r < row + count; r++) {
                matches.push({row: r, col});
              }
            }
          }
        }
        
        return matches;
      }
      
      function removeMatches(matches) {
        matches.forEach(match => {
          const cell = game.grid[match.row][match.col];
          createParticle(cell.x, cell.y, cell.color);
          game.score += 10;
        });
        
        // 移除匹配的宝石
        matches.forEach(match => {
          game.grid[match.row][match.col] = null;
        });
        
        scoreElement.textContent = game.score;
      }
      
      function dropGems() {
        for(let col = 0; col < GRID_SIZE; col++) {
          let writeIndex = GRID_SIZE - 1;
          
          for(let row = GRID_SIZE - 1; row >= 0; row--) {
            if(game.grid[row][col] !== null) {
              if(writeIndex !== row) {
                game.grid[writeIndex][col] = game.grid[row][col];
                game.grid[row][col] = null;
                game.grid[writeIndex][col].targetY = writeIndex * CELL_SIZE;
              }
              writeIndex--;
            }
          }
        }
      }
      
      function fillEmptySpaces() {
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            if(game.grid[row][col] === null) {
              game.grid[row][col] = {
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                type: Math.floor(Math.random() * COLORS.length),
                x: col * CELL_SIZE,
                y: row * CELL_SIZE,
                targetX: col * CELL_SIZE,
                targetY: row * CELL_SIZE
              };
            }
          }
        }
      }
      
      function updateAnimations() {
        let stillAnimating = false;
        
        for(let row = 0; row < GRID_SIZE; row++) {
          for(let col = 0; col < GRID_SIZE; col++) {
            const cell = game.grid[row][col];
            if(cell) {
              const dx = cell.targetX - cell.x;
              const dy = cell.targetY - cell.y;
              
              if(Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                cell.x += dx * 0.2;
                cell.y += dy * 0.2;
                stillAnimating = true;
              } else {
                cell.x = cell.targetX;
                cell.y = cell.targetY;
              }
            }
          }
        }
        
        // 更新粒子
        game.particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.3;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
        
        game.animating = stillAnimating;
      }
      
      function processMatches() {
        const matches = findMatches();
        if(matches.length > 0) {
          removeMatches(matches);
          dropGems();
          fillEmptySpaces();
          return true;
        }
        return false;
      }
      
      function gameLoop() {
        if(!game.running) return;
        
        updateAnimations();
        drawGame();
        
        if(!game.animating) {
          if(processMatches()) {
            // 继续处理连锁反应
          } else if(game.moves <= 0) {
            gameOver();
          }
        }
        
        requestAnimationFrame(gameLoop);
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Final Score: ' + game.score + ' (Level ' + game.level + ')');
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      canvas.addEventListener('click', (e) => {
        if(!game.running || game.animating) return;
        
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const col = Math.floor(mouseX / CELL_SIZE);
        const row = Math.floor(mouseY / CELL_SIZE);
        
        if(row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
          if(!game.selectedCell) {
            game.selectedCell = {row, col};
          } else {
            const prevRow = game.selectedCell.row;
            const prevCol = game.selectedCell.col;
            
            // 检查是否相邻
            const isAdjacent = (Math.abs(row - prevRow) === 1 && col === prevCol) ||
                              (Math.abs(col - prevCol) === 1 && row === prevRow);
            
            if(isAdjacent) {
              // 交换宝石
              swapCells(prevRow, prevCol, row, col);
              
              // 检查是否有匹配
              const hasMatch = findMatches().length > 0;
              
              if(hasMatch) {
                game.moves--;
                movesElement.textContent = game.moves;
                game.animating = true;
              } else {
                // 如果没有匹配，交换回来
                swapCells(prevRow, prevCol, row, col);
              }
            }
            
            game.selectedCell = null;
          }
        }
      });
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.moves = 30;
        game.level = 1;
        game.selectedCell = null;
        game.animating = false;
        game.particles = [];
        scoreElement.textContent = game.score;
        movesElement.textContent = game.moves;
        levelElement.textContent = game.level;
        initGrid();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        gameLoop();
      });
      
      hintBtn.addEventListener('click', () => {
        if(!game.running || game.animating) return;
        
        // 简单提示：高亮一个可能的匹配
        for(let row = 0; row < GRID_SIZE - 1; row++) {
          for(let col = 0; col < GRID_SIZE - 1; col++) {
            // 检查右边交换
            if(col < GRID_SIZE - 1) {
              swapCells(row, col, row, col + 1);
              if(findMatches().length > 0) {
                swapCells(row, col, row, col + 1); // 交换回来
                game.selectedCell = {row, col};
                drawGame();
                setTimeout(() => {
                  game.selectedCell = null;
                  drawGame();
                }, 1000);
                return;
              }
              swapCells(row, col, row, col + 1); // 交换回来
            }
            
            // 检查下面交换
            if(row < GRID_SIZE - 1) {
              swapCells(row, col, row + 1, col);
              if(findMatches().length > 0) {
                swapCells(row, col, row + 1, col); // 交换回来
                game.selectedCell = {row, col};
                drawGame();
                setTimeout(() => {
                  game.selectedCell = null;
                  drawGame();
                }, 1000);
                return;
              }
              swapCells(row, col, row + 1, col); // 交换回来
            }
          }
        }
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.moves = 30;
        game.level = 1;
        game.selectedCell = null;
        game.animating = false;
        game.particles = [];
        scoreElement.textContent = game.score;
        movesElement.textContent = game.moves;
        levelElement.textContent = game.level;
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        initGrid();
        drawGame();
      });
      
      // 初始化
      initGrid();
      drawGame();
      ctx.fillStyle = '#333';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Match-3 Puzzle Game', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Click and drag to swap adjacent gems!', canvas.width/2, canvas.height/2);
      ctx.fillText('Match 3 or more gems to score points!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 创意类游戏 - 专业绘画工具
const generateCreativeGame = (title: string): string => {
  const gameId = `creative-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f0f8ff 0%, #e6e6fa 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #6a5acd; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: white; cursor: crosshair;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
    <button id="clear-btn-${gameId}" style="padding: 8px 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 15px; cursor: pointer; font-weight: bold;">🗑️ Clear</button>
    <button class="color-btn" data-color="#000000" style="padding: 8px 16px; background: #000000; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">⚫</button>
    <button class="color-btn" data-color="#ff0000" style="padding: 8px 16px; background: #ff0000; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🔴</button>
    <button class="color-btn" data-color="#00ff00" style="padding: 8px 16px; background: #00ff00; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟢</button>
    <button class="color-btn" data-color="#0000ff" style="padding: 8px 16px; background: #0000ff; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🔵</button>
    <button class="color-btn" data-color="#ffff00" style="padding: 8px 16px; background: #ffff00; color: black; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟡</button>
    <button class="color-btn" data-color="#ff00ff" style="padding: 8px 16px; background: #ff00ff; color: white; border: none; border-radius: 15px; cursor: pointer; margin: 2px;">🟣</button>
  </div>
  
  <div style="margin-top: 15px; padding: 10px 20px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <label style="color: #333; font-weight: bold;">Brush Size: </label>
    <input type="range" id="brush-size-${gameId}" min="1" max="20" value="3" style="margin: 0 10px;">
    <span id="size-display-${gameId}" style="color: #6a5acd; font-weight: bold;">3</span>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const clearBtn = document.getElementById('clear-btn-${gameId}');
      const brushSize = document.getElementById('brush-size-${gameId}');
      const sizeDisplay = document.getElementById('size-display-${gameId}');
      const colorBtns = document.querySelectorAll('.color-btn');
      
      let isDrawing = false;
      let currentColor = '#000000';
      let currentSize = 3;
      let lastX = 0;
      let lastY = 0;
      
      // 初始化画布
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
      }
      
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
      });
      
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', () => isDrawing = false);
      canvas.addEventListener('mouseout', () => isDrawing = false);
      
      // 触摸支持
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
      });
      
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
      });
      
      canvas.addEventListener('touchend', () => isDrawing = false);
      
      clearBtn.addEventListener('click', () => {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          currentColor = btn.dataset.color;
          colorBtns.forEach(b => b.style.transform = 'scale(1)');
          btn.style.transform = 'scale(1.2)';
        });
      });
      
      brushSize.addEventListener('input', (e) => {
        currentSize = e.target.value;
        sizeDisplay.textContent = currentSize;
      });
      
      // 初始画面
      ctx.fillStyle = '#6a5acd';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Creative Drawing Canvas', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Choose colors and start drawing!', canvas.width/2, canvas.height/2);
      ctx.fillText('Use mouse or touch to create your masterpiece!', canvas.width/2, canvas.height/2 + 25);
      
      // 默认选中黑色
      colorBtns[0].style.transform = 'scale(1.2)';
    })();
  </script>
</div>`;
};

// 自然类游戏 - 生态系统模拟游戏
const generateNatureGame = (title: string): string => {
  const gameId = `nature-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f0fff0 0%, #e6ffe6 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #228b22; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #98fb98; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #32cd32, #228b22); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🌿 Start Ecosystem</button>
    <button id="plant-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #90ee90, #8fbc8f); color: #333; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🌱 Plant Tree</button>
    <button id="animal-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #deb887, #d2691e); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🐰 Add Animal</button>
  </div>
  
  <div style="margin-top: 20px; padding: 15px 25px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: flex; gap: 20px;">
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Trees: <span id="trees-${gameId}" style="color: #228b22;">0</span></p>
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Animals: <span id="animals-${gameId}" style="color: #8b4513;">0</span></p>
    <p style="margin: 0; font-size: 16px; color: #333; font-weight: bold;">Ecosystem Health: <span id="health-${gameId}" style="color: #32cd32;">100%</span></p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const plantBtn = document.getElementById('plant-btn-${gameId}');
      const animalBtn = document.getElementById('animal-btn-${gameId}');
      const treesElement = document.getElementById('trees-${gameId}');
      const animalsElement = document.getElementById('animals-${gameId}');
      const healthElement = document.getElementById('health-${gameId}');
      
      let game = { 
        running: false, 
        trees: [],
        animals: [],
        particles: [],
        health: 100,
        time: 0
      };
      
      const treeEmojis = ['🌳', '🌲', '🌴', '🍃'];
      const animalEmojis = ['🐰', '🦌', '🐿️', '🦝', '🐦'];
      
      function createTree(x, y) {
        return {
          x: x || Math.random() * (canvas.width - 50),
          y: y || Math.random() * (canvas.height - 100) + 50,
          size: 20 + Math.random() * 20,
          emoji: treeEmojis[Math.floor(Math.random() * treeEmojis.length)],
          age: 0,
          growth: Math.random() * 0.1 + 0.05
        };
      }
      
      function createAnimal(x, y) {
        return {
          x: x || Math.random() * (canvas.width - 40),
          y: y || Math.random() * (canvas.height - 80) + 40,
          size: 15 + Math.random() * 10,
          emoji: animalEmojis[Math.floor(Math.random() * animalEmojis.length)],
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          energy: 100,
          happiness: Math.random() * 100
        };
      }
      
      function createParticle(x, y, type) {
        const colors = type === 'oxygen' ? ['#90ee90', '#32cd32'] : ['#ffd700', '#ff69b4'];
        return {
          x: x,
          y: y,
          dx: (Math.random() - 0.5) * 2,
          dy: -Math.random() * 2,
          life: 60,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 3
        };
      }
      
      function drawGame() {
        // 背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#87ceeb');
        gradient.addColorStop(0.6, '#98fb98');
        gradient.addColorStop(1, '#228b22');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制地面细节
        ctx.fillStyle = '#8fbc8f';
        for(let i = 0; i < canvas.width; i += 20) {
          ctx.fillRect(i, canvas.height - 20 + Math.sin(i/10) * 5, 20, 20);
        }
        
        // 绘制树木
        game.trees.forEach(tree => {
          ctx.font = tree.size + 'px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(tree.emoji, tree.x, tree.y);
          
          // 树木周围的氧气粒子
          if(Math.random() < 0.05) {
            game.particles.push(createParticle(tree.x, tree.y - 20, 'oxygen'));
          }
        });
        
        // 绘制动物
        game.animals.forEach(animal => {
          ctx.font = animal.size + 'px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(animal.emoji, animal.x, animal.y);
          
          // 快乐粒子
          if(animal.happiness > 70 && Math.random() < 0.03) {
            game.particles.push(createParticle(animal.x, animal.y - 10, 'happiness'));
          }
        });
        
        // 绘制粒子效果
        game.particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 60;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        });
        
        // 绘制天气效果
        if(game.time % 1000 < 100) {
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for(let i = 0; i < 20; i++) {
            ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 10);
          }
        }
      }
      
      function updateGame() {
        if(!game.running) return;
        
        game.time++;
        
        // 更新树木
        game.trees.forEach(tree => {
          tree.age += tree.growth;
          if(tree.age > 10) {
            tree.size = Math.min(tree.size + 0.1, 40);
          }
        });
        
        // 更新动物
        game.animals.forEach(animal => {
          animal.x += animal.dx;
          animal.y += animal.dy;
          
          // 边界检查
          if(animal.x <= 0 || animal.x >= canvas.width - 20) animal.dx *= -1;
          if(animal.y <= 20 || animal.y >= canvas.height - 20) animal.dy *= -1;
          
          // 寻找附近的树木增加快乐度
          game.trees.forEach(tree => {
            const dx = animal.x - tree.x;
            const dy = animal.y - tree.y;
            if(Math.sqrt(dx*dx + dy*dy) < 50) {
              animal.happiness = Math.min(animal.happiness + 0.5, 100);
            }
          });
          
          // 随机改变方向
          if(Math.random() < 0.02) {
            animal.dx = (Math.random() - 0.5) * 2;
            animal.dy = (Math.random() - 0.5) * 2;
          }
        });
        
        // 更新粒子
        game.particles.forEach((particle, index) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.life--;
          
          if(particle.life <= 0) {
            game.particles.splice(index, 1);
          }
        });
        
        // 计算生态系统健康度
        const treeBonus = Math.min(game.trees.length * 5, 50);
        const animalBonus = Math.min(game.animals.length * 3, 30);
        const balance = Math.abs(game.trees.length - game.animals.length * 2) < 5 ? 20 : 0;
        game.health = Math.min(treeBonus + animalBonus + balance, 100);
        
        // 更新显示
        treesElement.textContent = game.trees.length;
        animalsElement.textContent = game.animals.length;
        healthElement.textContent = game.health + '%';
        healthElement.style.color = game.health > 70 ? '#32cd32' : game.health > 40 ? '#ff8c00' : '#ff4500';
        
        drawGame();
        requestAnimationFrame(updateGame);
      }
      
      canvas.addEventListener('click', (e) => {
        if(!game.running) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 随机选择添加树或动物
        if(Math.random() < 0.7) {
          game.trees.push(createTree(x, y));
        } else {
          game.animals.push(createAnimal(x, y));
        }
      });
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.trees = [createTree(), createTree()];
        game.animals = [createAnimal()];
        game.particles = [];
        startBtn.textContent = '🌿 Running...';
        startBtn.disabled = true;
        updateGame();
      });
      
      plantBtn.addEventListener('click', () => {
        if(!game.running) return;
        game.trees.push(createTree());
      });
      
      animalBtn.addEventListener('click', () => {
        if(!game.running) return;
        game.animals.push(createAnimal());
      });
      
      // 初始画面
      drawGame();
      ctx.fillStyle = '#228b22';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Nature Ecosystem Simulator', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Create a balanced ecosystem with trees and animals!', canvas.width/2, canvas.height/2);
      ctx.fillText('Click canvas to add elements or use buttons!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 默认游戏 - 贪吃蛇游戏
const generateDefaultGame = (title: string): string => {
  const gameId = `default-${title.toLowerCase().replace(/[^\w]/g, '-')}`;
  
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #555; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="500" height="400" style="border: 2px solid #ddd; border-radius: 8px; background: #fafafa; cursor: pointer;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #4caf50, #45a049); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 12px 24px; background: linear-gradient(135deg, #607d8b, #455a64); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 15px 25px; background: rgba(255,255,255,0.9); border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333; font-weight: bold;">Score: <span id="score-${gameId}" style="color: #4caf50;">0</span></p>
  </div>
  
  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = { 
        running: false, 
        score: 0,
        snake: [{x: 250, y: 200}],
        food: {x: 0, y: 0},
        dx: 0,
        dy: 0,
        gridSize: 20
      };
      
      function generateFood() {
        game.food = {
          x: Math.floor(Math.random() * (canvas.width / game.gridSize)) * game.gridSize,
          y: Math.floor(Math.random() * (canvas.height / game.gridSize)) * game.gridSize
        };
      }
      
      function drawGame() {
        // 背景
        ctx.fillStyle = '#fafafa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制网格
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        for(let i = 0; i <= canvas.width; i += game.gridSize) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for(let i = 0; i <= canvas.height; i += game.gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        
        // 绘制蛇
        game.snake.forEach((segment, index) => {
          if(index === 0) {
            // 蛇头
            ctx.fillStyle = '#4caf50';
            ctx.fillRect(segment.x, segment.y, game.gridSize - 2, game.gridSize - 2);
            ctx.fillStyle = '#fff';
            ctx.fillRect(segment.x + 4, segment.y + 4, 4, 4);
            ctx.fillRect(segment.x + 12, segment.y + 4, 4, 4);
          } else {
            // 蛇身
            ctx.fillStyle = '#81c784';
            ctx.fillRect(segment.x, segment.y, game.gridSize - 2, game.gridSize - 2);
          }
        });
        
        // 绘制食物
        ctx.fillStyle = '#ff5722';
        ctx.fillRect(game.food.x, game.food.y, game.gridSize - 2, game.gridSize - 2);
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('🍎', game.food.x + game.gridSize/2, game.food.y + game.gridSize/2 + 4);
      }
      
      function updateGame() {
        if(!game.running) return;
        
        // 移动蛇头
        const head = {x: game.snake[0].x + game.dx, y: game.snake[0].y + game.dy};
        
        // 检查碰撞
        if(head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
          gameOver();
          return;
        }
        
        // 检查撞到自己
        for(let segment of game.snake) {
          if(head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
          }
        }
        
        game.snake.unshift(head);
        
        // 检查吃到食物
        if(head.x === game.food.x && head.y === game.food.y) {
          game.score += 10;
          scoreElement.textContent = game.score;
          generateFood();
        } else {
          game.snake.pop();
        }
        
        drawGame();
        setTimeout(updateGame, 150);
      }
      
      function gameOver() {
        game.running = false;
        alert('Game Over! Score: ' + game.score);
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      startBtn.addEventListener('click', () => {
        game.running = true;
        game.score = 0;
        game.snake = [{x: 250, y: 200}];
        game.dx = 0;
        game.dy = 0;
        scoreElement.textContent = game.score;
        generateFood();
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
        updateGame();
      });
      
      resetBtn.addEventListener('click', () => {
        game.running = false;
        game.score = 0;
        game.snake = [{x: 250, y: 200}];
        game.dx = 0;
        game.dy = 0;
        scoreElement.textContent = game.score;
        generateFood();
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
        drawGame();
      });
      
      // 键盘控制
      document.addEventListener('keydown', (e) => {
        if(!game.running) return;
        
        switch(e.key) {
          case 'ArrowUp':
            if(game.dy === 0) { game.dx = 0; game.dy = -game.gridSize; }
            break;
          case 'ArrowDown':
            if(game.dy === 0) { game.dx = 0; game.dy = game.gridSize; }
            break;
          case 'ArrowLeft':
            if(game.dx === 0) { game.dx = -game.gridSize; game.dy = 0; }
            break;
          case 'ArrowRight':
            if(game.dx === 0) { game.dx = game.gridSize; game.dy = 0; }
            break;
        }
      });
      
      // 初始画面
      generateFood();
      drawGame();
      ctx.fillStyle = '#555';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Snake Game', canvas.width/2, canvas.height/2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Use arrow keys to control the snake!', canvas.width/2, canvas.height/2);
      ctx.fillText('Eat red apples to grow and score points!', canvas.width/2, canvas.height/2 + 25);
    })();
  </script>
</div>`;
};

// 专门为Block Merge 2048创建的带滑动动画版本
const generateAnimated2048Game = (gameId: string, title: string): string => {
  return `<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 16px; min-height: 600px; color: #333;">
  <h2 style="margin: 0 0 20px 0; color: #333; font-size: 32px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">${title}</h2>
  
  <div style="background: rgba(255,255,255,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <canvas id="${gameId}" width="440" height="440" style="border: 2px solid #ddd; border-radius: 8px; background: #fafafa; cursor: pointer; display: block;"></canvas>
  </div>
  
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="start-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4); transition: all 0.3s; font-weight: bold;">🎮 Start Game</button>
    <button id="reset-btn-${gameId}" style="padding: 15px 30px; font-size: 16px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; border: none; border-radius: 25px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4); transition: all 0.3s; font-weight: bold;">🔄 Reset</button>
  </div>
  
  <div style="margin-top: 20px; padding: 20px 30px; background: rgba(255,255,255,0.9); border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 24px; color: #333; font-weight: bold; text-align: center;">Score: <span id="score-${gameId}" style="color: #28a745; font-size: 28px;">0</span></p>
  </div>
  
  <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.8); border-radius: 10px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
      🎯 <strong>Use ARROW KEYS or SWIPE</strong> to slide tiles with smooth animation! Combine tiles with the same number to reach 2048!
    </p>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('${gameId}');
      const ctx = canvas.getContext('2d');
      const startBtn = document.getElementById('start-btn-${gameId}');
      const resetBtn = document.getElementById('reset-btn-${gameId}');
      const scoreElement = document.getElementById('score-${gameId}');
      
      let game = {
        running: false,
        score: 0,
        board: Array(4).fill().map(() => Array(4).fill(0)),
                 tileSize: 95,
         gap: 8,
         offsetX: 25,
         offsetY: 25,
        isAnimating: false
      };
      
      function startGame() {
        if (game.running) return;
        
        game.running = true;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        game.isAnimating = false;
        updateScore();
        addNewTile();
        addNewTile();
        drawBoard();
        
        startBtn.textContent = '🎮 Playing...';
        startBtn.disabled = true;
      }
      
      function resetGame() {
        game.running = false;
        game.score = 0;
        game.board = Array(4).fill().map(() => Array(4).fill(0));
        game.isAnimating = false;
        
        updateScore();
        drawStartScreen();
        
        startBtn.textContent = '🎮 Start Game';
        startBtn.disabled = false;
      }
      
      function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (game.board[i][j] === 0) {
              emptyCells.push({x: i, y: j});
            }
          }
        }
        if (emptyCells.length > 0) {
          const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          const value = Math.random() < 0.9 ? 2 : 4;
          game.board[cell.x][cell.y] = value;
          animateNewTile(cell.x, cell.y, value);
        }
      }
      
      function animateNewTile(row, col, value) {
        const duration = 300;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
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
          
          const x = col * (game.tileSize + game.gap) + game.offsetX;
          const y = row * (game.tileSize + game.gap) + game.offsetY;
          
          const originalValue = game.board[row][col];
          game.board[row][col] = 0;
          drawBoard();
          game.board[row][col] = originalValue;
          
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
        
        const scaledSize = game.tileSize * scale;
        const offsetScale = (game.tileSize - scaledSize) / 2;
        
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
          ctx.fillText(value, x + game.tileSize/2, y + game.tileSize/2);
        }
        
        ctx.restore();
      }
      
             function drawBoard() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         
         // 绘制简洁的背景
         ctx.fillStyle = '#bbada0';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         // 绘制游戏区域背景
         ctx.fillStyle = '#cdc1b4';
         ctx.fillRect(15, 15, 410, 410);
        
                 // 绘制背景网格
         for(let i = 0; i < 4; i++) {
           for(let j = 0; j < 4; j++) {
             let x = j * (game.tileSize + game.gap) + game.offsetX;
             let y = i * (game.tileSize + game.gap) + game.offsetY;
             
             ctx.fillStyle = '#eee4da';
             ctx.fillRect(x, y, game.tileSize, game.tileSize);
             ctx.strokeStyle = '#bbada0';
             ctx.lineWidth = 2;
             ctx.strokeRect(x, y, game.tileSize, game.tileSize);
           }
         }
        
        // 绘制方块
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(game.board[i][j] !== 0) {
              let x = j * (game.tileSize + game.gap) + game.offsetX;
              let y = i * (game.tileSize + game.gap) + game.offsetY;
              drawTile(game.board[i][j], x, y);
            }
          }
        }
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
          32: '#f67c5f', 64: '#f65e3b', 128: '#edcf72', 256: '#edcc61',
          512: '#edc850', 1024: '#edc53f', 2048: '#edc22e'
        };
        return colors[value] || '#edc22e';
      }
      
      function updateScore() {
        scoreElement.textContent = game.score;
      }
      
             function drawStartScreen() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         
         ctx.fillStyle = '#bbada0';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         ctx.fillStyle = '#776e65';
         ctx.font = 'bold 28px Arial';
         ctx.textAlign = 'center';
         ctx.fillText('${title}', canvas.width/2, canvas.height/2 - 60);
         
         ctx.font = '16px Arial';
         ctx.fillStyle = '#8f7a66';
         ctx.fillText('Click "Start Game" to begin', canvas.width/2, canvas.height/2);
         ctx.fillText('Use arrow keys or swipe for smooth animation', canvas.width/2, canvas.height/2 + 25);
         
         ctx.font = '48px Arial';
         ctx.fillText('🎲', canvas.width/2, canvas.height/2 - 120);
       }
      
      function animateMove(direction) {
        if (game.isAnimating) return false;
        
                 const oldBoard = game.board.map(row => [...row]);
         const newBoard = game.board.map(row => [...row]);
         let moved = false;
        
                 // 执行移动逻辑
         if (direction === 'left') {
           for (let i = 0; i < 4; i++) {
             let row = newBoard[i].filter(val => val !== 0);
             for (let j = 0; j < row.length - 1; j++) {
               if (row[j] === row[j + 1]) {
                 row[j] *= 2;
                 game.score += row[j];
                 row.splice(j + 1, 1);
                 moved = true;
               }
             }
             while (row.length < 4) row.push(0);
             if (JSON.stringify(oldBoard[i]) !== JSON.stringify(row)) moved = true;
             newBoard[i] = row;
           }
         } else if (direction === 'right') {
           for (let i = 0; i < 4; i++) {
             let row = newBoard[i].filter(val => val !== 0);
             for (let j = row.length - 1; j > 0; j--) {
               if (row[j] === row[j - 1]) {
                 row[j] *= 2;
                 game.score += row[j];
                 row.splice(j - 1, 1);
                 j--;
                 moved = true;
               }
             }
             while (row.length < 4) row.unshift(0);
             if (JSON.stringify(oldBoard[i]) !== JSON.stringify(row)) moved = true;
             newBoard[i] = row;
           }
         } else if (direction === 'up') {
           for (let j = 0; j < 4; j++) {
             let col = [];
             for (let i = 0; i < 4; i++) {
               if (newBoard[i][j] !== 0) col.push(newBoard[i][j]);
             }
             for (let i = 0; i < col.length - 1; i++) {
               if (col[i] === col[i + 1]) {
                 col[i] *= 2;
                 game.score += col[i];
                 col.splice(i + 1, 1);
                 moved = true;
               }
             }
             while (col.length < 4) col.push(0);
             for (let i = 0; i < 4; i++) {
               if (oldBoard[i][j] !== col[i]) moved = true;
               newBoard[i][j] = col[i];
             }
           }
         } else if (direction === 'down') {
           for (let j = 0; j < 4; j++) {
             let col = [];
             for (let i = 0; i < 4; i++) {
               if (newBoard[i][j] !== 0) col.push(newBoard[i][j]);
             }
             for (let i = col.length - 1; i > 0; i--) {
               if (col[i] === col[i - 1]) {
                 col[i] *= 2;
                 game.score += col[i];
                 col.splice(i - 1, 1);
                 i--;
                 moved = true;
               }
             }
             while (col.length < 4) col.unshift(0);
             for (let i = 0; i < 4; i++) {
               if (oldBoard[i][j] !== col[i]) moved = true;
               newBoard[i][j] = col[i];
             }
           }
         }
        
        if (moved) {
          game.isAnimating = true;
          updateScore();
          
          // 滑动动画
          const animationDuration = 200;
          const startTime = Date.now();
          
                     function animate() {
             const currentTime = Date.now();
             const progress = Math.min((currentTime - startTime) / animationDuration, 1);
             const easeProgress = 1 - Math.pow(1 - progress, 3);
             
             // 绘制背景和网格（一次性）
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = '#bbada0';
             ctx.fillRect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = '#cdc1b4';
             ctx.fillRect(15, 15, 410, 410);
             
             // 绘制空白网格
             for(let i = 0; i < 4; i++) {
               for(let j = 0; j < 4; j++) {
                 let x = j * (game.tileSize + game.gap) + game.offsetX;
                 let y = i * (game.tileSize + game.gap) + game.offsetY;
                 ctx.fillStyle = '#eee4da';
                 ctx.fillRect(x, y, game.tileSize, game.tileSize);
                 ctx.strokeStyle = '#bbada0';
                 ctx.lineWidth = 2;
                 ctx.strokeRect(x, y, game.tileSize, game.tileSize);
               }
             }
             
             // 计算并绘制移动中的方块
             const animatingTiles = [];
             
             for(let i = 0; i < 4; i++) {
               for(let j = 0; j < 4; j++) {
                 if(oldBoard[i][j] !== 0) {
                   let newI = i, newJ = j;
                   
                   // 找到方块的新位置
                   for(let ni = 0; ni < 4; ni++) {
                     for(let nj = 0; nj < 4; nj++) {
                       if(newBoard[ni][nj] === oldBoard[i][j]) {
                         // 验证这是正确的移动方向
                         if((direction === 'left' && ni === i && nj <= j) ||
                            (direction === 'right' && ni === i && nj >= j) ||
                            (direction === 'up' && nj === j && ni <= i) ||
                            (direction === 'down' && nj === j && ni >= i)) {
                           newI = ni;
                           newJ = nj;
                           break;
                         }
                       }
                     }
                   }
                   
                   const startX = j * (game.tileSize + game.gap) + game.offsetX;
                   const startY = i * (game.tileSize + game.gap) + game.offsetY;
                   const endX = newJ * (game.tileSize + game.gap) + game.offsetX;
                   const endY = newI * (game.tileSize + game.gap) + game.offsetY;
                   
                   const currentX = startX + (endX - startX) * easeProgress;
                   const currentY = startY + (endY - startY) * easeProgress;
                   
                   animatingTiles.push({
                     value: oldBoard[i][j],
                     x: currentX,
                     y: currentY
                   });
                 }
               }
             }
             
             // 绘制所有移动中的方块（避免重复绘制）
             animatingTiles.forEach(tile => {
               drawTile(tile.value, tile.x, tile.y);
             });
             
             if (progress < 1) {
               requestAnimationFrame(animate);
             } else {
               game.board = [...newBoard.map(row => [...row])];
               drawBoard();
               addNewTile();
               game.isAnimating = false;
             }
           }
          
          animate();
        }
        
        return moved;
      }
      
      document.addEventListener('keydown', function(e) {
        if (!game.running || game.isAnimating) return;
        
        let moved = false;
        switch(e.key) {
          case 'ArrowLeft':
            moved = animateMove('left');
            break;
          case 'ArrowRight':
            moved = animateMove('right');
            break;
          case 'ArrowUp':
            moved = animateMove('up');
            break;
          case 'ArrowDown':
            moved = animateMove('down');
            break;
        }
        
        e.preventDefault();
      });
      
      // 触摸支持
      let touchStartX = 0;
      let touchStartY = 0;
      let isTouching = false;
      
      canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (game.isAnimating || !game.running) return;
        
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
        if (!isTouching || game.isAnimating || !game.running) return;
        
        const touch = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        const deltaX = (touch.clientX - rect.left) - touchStartX;
        const deltaY = (touch.clientY - rect.top) - touchStartY;
        const minDistance = 30;
        
        if (Math.abs(deltaX) > minDistance || Math.abs(deltaY) > minDistance) {
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
      
      startBtn.addEventListener('click', startGame);
      resetBtn.addEventListener('click', resetGame);
      
      drawStartScreen();
    })();
  </script>
</div>`;
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
}; 