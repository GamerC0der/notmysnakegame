import { createServer } from 'http';
import { Server } from 'socket.io';

const GRID_SIZE = 20;

const ALL_LEVELS = [
  { id: 'l1', name: 'Meadow', diff: 'EASY', speed: 160, base1: 0x1a3300, base2: 0x2a4d00, wall: 0x66cc00, fruits: [0xFF004D, 0xFFA300] },
  { id: 'l2', name: 'Ocean', diff: 'EASY', speed: 160, base1: 0x001a33, base2: 0x002a4d, wall: 0x0066cc, fruits: [0xFF77A8, 0x29ADFF] },
  { id: 'l3', name: 'Desert', diff: 'EASY', speed: 160, base1: 0x332600, base2: 0x4d3900, wall: 0xcc9900, fruits: [0x00E436, 0xFFEC27] },
  { id: 'l4', name: 'Snow', diff: 'EASY', speed: 160, base1: 0x2b3d40, base2: 0x3d5459, wall: 0xaad4e5, fruits: [0xFF004D, 0x83769C] },
  { id: 'l5', name: 'Cave', diff: 'EASY', speed: 160, base1: 0x111111, base2: 0x222222, wall: 0x666666, fruits: [0x29ADFF, 0xAB5236] },
  { id: 'l6', name: 'Sky', diff: 'EASY', speed: 160, base1: 0x00334d, base2: 0x004d66, wall: 0x00ccff, fruits: [0xFFEC27, 0xFF77A8] },
  { id: 'l7', name: 'Volcano', diff: 'MEDIUM', speed: 110, base1: 0x330000, base2: 0x4d0000, wall: 0xcc0000, fruits: [0xFFA300, 0xFFEC27] },
  { id: 'l8', name: 'Swamp', diff: 'MEDIUM', speed: 110, base1: 0x1a1a00, base2: 0x2a2a00, wall: 0x666600, fruits: [0xAB5236, 0x83769C] },
  { id: 'l9', name: 'Ruins', diff: 'MEDIUM', speed: 110, base1: 0x221a33, base2: 0x332a4d, wall: 0x9966cc, fruits: [0x00E436, 0xFF004D] },
  { id: 'l10', name: 'Abyss', diff: 'HARD', speed: 70, base1: 0x0a0a0a, base2: 0x141414, wall: 0x330066, fruits: [0x83769C, 0x29ADFF] },
  { id: 'l11', name: 'Neon', diff: 'HARD', speed: 70, base1: 0x001414, base2: 0x002929, wall: 0x00ffcc, fruits: [0xFF004D, 0x00E436, 0x29ADFF, 0xFFEC27] },
  { id: 'l12', name: 'Inferno', diff: 'HARD', speed: 70, base1: 0x290000, base2: 0x3d0000, wall: 0xff3300, fruits: [0xAB5236, 0xFF004D] },
];

let currentLevel = ALL_LEVELS[0];
let voteOptions = [];
let votes = {};

const PLAY_TIME = 275;
const HARD_TIME = 25;
const VOTE_TIME = 15;

let gameState = 'WAITING';
let stateTimer = 10;

function pickVoteOptions() {
  const easy = ALL_LEVELS.filter(l => l.diff === 'EASY').sort(() => 0.5 - Math.random()).slice(0, 2);
  const med = ALL_LEVELS.filter(l => l.diff === 'MEDIUM').sort(() => 0.5 - Math.random()).slice(0, 1);
  const hard = ALL_LEVELS.filter(l => l.diff === 'HARD').sort(() => 0.5 - Math.random()).slice(0, 1);
  voteOptions = [...easy, ...med, ...hard];
  votes = {};
}
pickVoteOptions();

setInterval(() => {
  if (gameState === 'WAITING') {
    if (snakes.size === 0) {
      stateTimer = 10;
    } else {
      stateTimer--;
      if (stateTimer <= 0) {
        gameState = 'VOTE';
        stateTimer = VOTE_TIME;
        pickVoteOptions();
      }
    }
  } else if (gameState === 'PLAY') {
    stateTimer--;
    if (stateTimer <= 0) {
      gameState = 'HARD';
      stateTimer = HARD_TIME;
    }
    if (snakes.size === 0) {
      gameState = 'WAITING';
      stateTimer = 10;
    }
  } else if (gameState === 'HARD') {
    stateTimer--;
    const allDead = snakes.size > 0 && [...snakes.values()].every(s => !s.alive);
    if (allDead) {
      gameState = 'VOTE';
      stateTimer = VOTE_TIME;
      pickVoteOptions();
    }
    if (snakes.size === 0) {
      gameState = 'WAITING';
      stateTimer = 10;
    }
  } else if (gameState === 'VOTE') {
    stateTimer--;
    if (stateTimer <= 0) {
      const counts = {};
      voteOptions.forEach(o => counts[o.id] = 0);
      Object.values(votes).forEach(vid => { if (counts[vid] !== undefined) counts[vid]++; });
      let best = voteOptions[0];
      let max = -1;
      for (const opt of voteOptions) {
        if (counts[opt.id] > max) { max = counts[opt.id]; best = opt; }
      }
      currentLevel = best;
      gameState = 'PLAY';
      stateTimer = PLAY_TIME;

      for (const [sid, s] of snakes.entries()) {
        const x = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));
        const y = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));
        s.body = [[x, y], [x - 1, y], [x - 2, y]];
        s.dir = [1, 0];
        s.alive = true;
        s.score = 0;
      }
      fruits = [];
      spawnFruit();
    }
    if (snakes.size === 0) {
      gameState = 'WAITING';
      stateTimer = 10;
    }
  }
}, 1000);

const snakes = new Map();
let fruits = [];

function spawnFruit() {
  const count = snakes.size;
  const minFruits = Math.min(count, 4);
  const needMore = count > 0 && fruits.length < 1 || fruits.length < minFruits;
  if (!needMore) return;

  for (let attempt = 0; attempt < 50; attempt++) {
    const x = 1 + Math.floor(Math.random() * (GRID_SIZE - 2));
    const y = 1 + Math.floor(Math.random() * (GRID_SIZE - 2));

    let occupied = false;
    for (const snake of snakes.values()) {
      if (snake.body.some(p => p[0] === x && p[1] === y)) {
        occupied = true;
        break;
      }
    }
    if (occupied) continue;
    if (fruits.some(f => f[0] === x && f[1] === y)) continue;

    fruits.push([x, y, Math.floor(Math.random() * 10)]);
    return;
  }
}

function broadcastState(io) {
  const payload = {
    snakes: Object.fromEntries(
      [...snakes.entries()].map(([sid, s]) => [
        sid,
        { body: s.body, color: s.color, alive: s.alive, score: s.score }
      ])
    ),
    fruits: [...fruits],
    levelSync: {
      current: currentLevel,
      options: voteOptions,
      state: gameState,
      timer: Math.max(0, stateTimer),
      counts: voteOptions.reduce((acc, o) => ({ ...acc, [o.id]: 0 }), {})
    }
  };

  Object.values(votes).forEach(vid => {
    if (payload.levelSync.counts[vid] !== undefined) {
      payload.levelSync.counts[vid]++;
    }
  });

  io.emit('state', payload);
}

function gameLoop(io) {
  const now = Date.now();
  let lastUpdate = now;

  setInterval(() => {
    const current = Date.now();
    let currentDelay = currentLevel.speed;
    if (gameState === 'HARD') {
      const progress = Math.max(0, stateTimer) / HARD_TIME;
      currentDelay = 15 + (currentLevel.speed - 15) * progress;
    }
    if (currentDelay < 10) currentDelay = 10;

    if (current - lastUpdate < currentDelay) return;
    lastUpdate = current;

    for (const [sid, snake] of snakes.entries()) {
      if (!snake.alive) continue;

      const head = snake.body[0];
      const newHead = [head[0] + snake.dir[0], head[1] + snake.dir[1]];

      if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
        snake.alive = false;
        continue;
      }

      let hit = snake.body.slice(1).some(p => p[0] === newHead[0] && p[1] === newHead[1]);
      if (!hit) {
        for (const [otherSid, other] of snakes.entries()) {
          if (otherSid === sid || !other.alive) continue;
          if (other.body.some(p => p[0] === newHead[0] && p[1] === newHead[1])) {
            hit = true;
            break;
          }
        }
      }

      if (hit) {
        snake.alive = false;
        continue;
      }

      snake.body.unshift(newHead);

      let ate = false;
      for (let i = 0; i < fruits.length; i++) {
        if (fruits[i][0] === newHead[0] && fruits[i][1] === newHead[1]) {
          snake.score += 1;
          fruits.splice(i, 1);
          ate = true;
          spawnFruit();
          break;
        }
      }
      if (!ate) snake.body.pop();
    }

    broadcastState(io);
  }, 16);
}

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: '*' },
  path: '/socket.io'
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    snakes.delete(socket.id);
    broadcastState(io);
  });

  socket.on('join', () => {
    const x = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));
    const y = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));

    snakes.set(socket.id, {
      body: [[x, y], [x - 1, y], [x - 2, y]],
      dir: [1, 0],
      color: Math.floor(Math.random() * 12),
      alive: gameState === 'PLAY',
      score: 0
    });
    if (gameState === 'PLAY') spawnFruit();
    broadcastState(io);
  });

  socket.on('dir', (data) => {
    const s = snakes.get(socket.id);
    if (!s) return;
    const dx = data.x | 0;
    const dy = data.y | 0;
    if ((dx !== -s.dir[0] || dx === 0) && (dy !== -s.dir[1] || dy === 0)) {
      s.dir = [dx, dy];
    }
  });

  socket.on('reset', () => {
    if (gameState !== 'PLAY') return;
    const s = snakes.get(socket.id);
    if (!s) return;
    const x = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));
    const y = 5 + Math.floor(Math.random() * (GRID_SIZE - 10));
    s.body = [[x, y], [x - 1, y], [x - 2, y]];
    s.dir = [1, 0];
    s.alive = true;
    s.score = 0;
    broadcastState(io);
  });

  socket.on('vote', (lvlId) => {
    const opt = voteOptions.find(o => o.id === lvlId);
    if (opt) votes[socket.id] = lvlId;
    broadcastState(io);
  });
});

const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`Snake game server on port ${PORT}`);
});

gameLoop(io);
