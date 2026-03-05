import { DiscordSDK } from '@discord/embedded-app-sdk';
import * as THREE from 'three';

const clientId = import.meta.env.VITE_CLIENT_ID || '';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (typeof io !== 'undefined') return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

async function loadSocketIO() {
  try {
    await loadScript('https://cdn.socket.io/4.5.4/socket.io.min.js');
  } catch {
    await loadScript('./cdn');
  }
}

async function main() {
  if (clientId) {
    try {
      const discordSdk = new DiscordSDK(clientId);
      await discordSdk.ready();
      window.focus();
      document.body.focus();
    } catch (e) {
      console.warn('Discord SDK not ready (run in Discord Activity for full integration)', e);
    }
  }
  runGame();
}

function runGame() {
  const COLORS = [
    0xff1493, 0x1e90ff, 0x32cd32, 0xffa500,
    0x9932cc, 0xdc143c, 0x20b2aa, 0xffd700,
    0xff69b4, 0x00ced1, 0x8b4513, 0x808080
  ];
  const FRUIT_COLORS = [
    0xFF004D, 0xFFA300, 0x83769C, 0xFFEC27,
    0xFF004D, 0xFFEC27, 0x29ADFF, 0x00E436,
    0xFF77A8, 0xAB5236
  ];

  const SKIN_DEFINITIONS = {
    classic: { label: 'Classic', cost: 0 },
    rainbow: { label: 'Rainbow', cost: 100, type: 'rainbow' },
    phantom: { label: 'Phantom', cost: 100, head: 0x9f63ff, body: 0x2a0f45 },
    candy: { label: 'Candy', cost: 150, head: 0xff7ec7, body: 0xe83b8d },
    lava: { label: 'Lava', cost: 250, head: 0xff551a, body: 0x8a2f00 },
    solar: { label: 'Solar', cost: 250, head: 0xffd96a, body: 0xff7a00 },
    neon: { label: 'Neon', cost: 300, type: 'neon' },
  };

  const SKIN_VIEW_IDS = Object.keys(SKIN_DEFINITIONS);

  const GRID_SIZE = 20;
  const TILE_SIZE = 4;
  const OFFSET = (GRID_SIZE * TILE_SIZE) / 2 - TILE_SIZE / 2;

  function getCoins() { return parseInt(localStorage.getItem('snake_coins') || '0', 10); }
  function setCoins(n) { localStorage.setItem('snake_coins', String(n)); }
  function addCoins(n) { setCoins(getCoins() + n); }
  function getSkinLabel(skinId) {
    return (SKIN_DEFINITIONS[skinId] && SKIN_DEFINITIONS[skinId].label) || (skinId ? skinId[0].toUpperCase() + skinId.slice(1) : 'Classic');
  }
  function getOwnedSkins() {
    try { return JSON.parse(localStorage.getItem('owned_skins') || '["classic"]'); }
    catch { return ['classic']; }
  }
  function setOwnedSkins(arr) { localStorage.setItem('owned_skins', JSON.stringify(arr)); }
  function isSkinOwned(id) { return getOwnedSkins().includes(id); }
  function getSelectedSkin() {
    const selected = localStorage.getItem('selected_skin') || 'classic';
    return isSkinOwned(selected) && SKIN_DEFINITIONS[selected] ? selected : 'classic';
  }
  function setSelectedSkin(skin) {
    localStorage.setItem('selected_skin', skin);
  }
  function buySkin(id, cost) {
    if (getCoins() < cost) return false;
    setCoins(getCoins() - cost);
    const o = getOwnedSkins();
    if (!o.includes(id)) setOwnedSkins([...o, id]);
    return true;
  }

  const socket = typeof io !== 'undefined' ? io({ path: '/socket.io' }) : { on: () => { }, emit: () => { } };
  let myId = null;
  let scene, camera, renderer;
  let snakeMeshes = {};
  let fruitMeshes = [];
  let gameStarted = false;
  let gameMode = 'menu';
  let cutsceneActive = false;
  let cutsceneHeadStep = 0;
  let cutsceneSnakeMeshes = [];
  let cutsceneFruits = [];
  let cutsceneDestroyCount = 0;
  let cinematicPulse = 0;
  let storyBackgroundStars = [];
  let storyBackgroundGroup = null;
  let lastScore = 0;
  let selectedSkin = getSelectedSkin();
  let skinsPreviewRendered = false;
  let coinsAwardedThisRound = false;
  let shopPreviewRaf = null;
  let skinViewActive = selectedSkin;
  let skinViewIndex = SKIN_VIEW_IDS.indexOf(skinViewActive);
  if (skinViewIndex < 0) {
    skinViewIndex = 0;
    skinViewActive = SKIN_VIEW_IDS[0];
  }
  const PREVIEW_GRID_W = 16;
  const PREVIEW_GRID_H = 10;
  const PREVIEW_CELL = 12;
  const PREVIEW_STEP_MS = 140;
  const CUTSCENE_SPEED = 0.075;
  const CUTSCENE_SEGMENTS = 12;
  const APPLE_COUNT = 12;
  const APPLE_HIT_RANGE = 0.45;
  const APPLE_RESPAWN_FRAMES = 110;
  const CUTSCENE_FRUIT_Y = 0.12;
  const CUTSCENE_PATH = (() => {
    const path = [];
    for (let x = 1; x < GRID_SIZE - 1; x++) path.push([x, 1]);
    for (let y = 1; y < GRID_SIZE - 1; y++) path.push([GRID_SIZE - 2, y]);
    for (let x = GRID_SIZE - 2; x > 0; x--) path.push([x, GRID_SIZE - 2]);
    for (let y = GRID_SIZE - 2; y > 0; y--) path.push([1, y]);
    return path;
  })();

  const scoreDiv = document.getElementById('score');
  const statusText = document.getElementById('status-text');
  const mainMenu = document.getElementById('main-menu');
  const gameUI = document.getElementById('ui');
  const startGameButtons = document.querySelectorAll('.start-game-button');
  const skinsPanel = document.getElementById('skins-panel');
  const skinTitleEl = document.getElementById('skin-title');
  const skinIndicatorsEl = document.getElementById('skin-indicators');
  let ambientLight;
  let dirLight;
  let rimLight;

  function showStoryCinemaText() {
    statusText.classList.add('cinematic-title');
    statusText.style.display = 'block';
    statusText.style.pointerEvents = 'none';
    statusText.style.zIndex = '40';
    statusText.innerHTML = 'THE EPIC SNAKE<br><span style="font-size: 14px;">FOR STORY MODE</span>';
  }

  function clearStoryCinemaVisuals() {
    statusText.classList.remove('cinematic-title');
    statusText.style.fontSize = '';
    statusText.style.color = '';
    statusText.style.opacity = '';
    statusText.style.transform = '';
    statusText.style.textShadow = '';
    statusText.innerHTML = '';
  }

  socket.on('connect', () => {
    myId = socket.id;
  });

  socket.on('state', (data) => {
    if (!data || !data.snakes || !Array.isArray(data.fruits)) return;
    updateScene(data);
  });

  function init() {
    const container = document.getElementById('game-container');
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    camera.position.set(0, 90, 70);
    camera.lookAt(0, -10, 0);
    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    renderer.setSize(512, 512, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.style.width = '100%';
    container.style.height = '100%';
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    ambientLight = new THREE.AmbientLight(0xffffff, 0.32);
    scene.add(ambientLight);
    dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 50, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);
    buildGrid();
    renderer.setAnimationLoop(animate);
  }

  function renderSkinPreviews() {
    SKIN_VIEW_IDS.forEach((skinId) => {
      const canvas = document.getElementById('skin-preview-' + skinId);
      if (!canvas) return;
      drawSkinPreviewFrame(canvas, skinId);
    });
    updateSkinLockState();
    renderSkinIndicators();
  }

  function renderSkinIndicators() {
    if (!skinIndicatorsEl) return;
    skinIndicatorsEl.innerHTML = '';
    SKIN_VIEW_IDS.forEach((skinId, index) => {
      const dot = document.createElement('span');
      dot.className = 'skin-indicator' + (skinId === skinViewActive ? ' active' : '');
      dot.setAttribute('data-skin-index', String(index));
      dot.setAttribute('aria-label', getSkinLabel(skinId));
      dot.addEventListener('click', () => setSkinViewByIndex(index));
      skinIndicatorsEl.appendChild(dot);
    });
  }
  function setSkinHeader(skinId) {
    if (skinTitleEl) skinTitleEl.textContent = getSkinLabel(skinId);
  }
  function darkenColor(hex, amount) {
    const r = Math.floor(((hex >>> 16) & 0xff) * amount);
    const g = Math.floor(((hex >>> 8) & 0xff) * amount);
    const b = Math.floor((hex & 0xff) * amount);
    return (r << 16) | (g << 8) | b;
  }
  function getSnakeColorForSkin(skinId, segmentIndex, colorIndex) {
    if (skinId === 'classic') {
      const base = COLORS[colorIndex % COLORS.length];
      return segmentIndex === 0 ? base : darkenColor(base, 0.7);
    }
    if (skinId === 'rainbow') {
      return COLORS[segmentIndex % COLORS.length];
    }
    if (skinId === 'neon') {
      if (segmentIndex === 0) return 0x00ecff;
      return segmentIndex % 2 === 0 ? 0x8c1fff : 0x16e0ff;
    }
    const def = SKIN_DEFINITIONS[skinId];
    if (!def) {
      const base = COLORS[colorIndex % COLORS.length];
      return segmentIndex === 0 ? base : darkenColor(base, 0.7);
    }
    if (segmentIndex === 0) return def.head;
    return def.body ? darkenColor(def.body, 0.75) : darkenColor(def.head, 0.75);
  }
  function updateSkinLockState() {
    document.querySelectorAll('.skin-view-section').forEach(section => {
      const skin = section.dataset.skin;
      if (!skin) return;
      const action = section.querySelector('.shop-skin-action');
      const desc = section.querySelector('.shop-section-desc');
      if (action) {
        const owned = isSkinOwned(skin);
        section.classList.toggle('locked', !owned);
        const cost = parseInt(action.dataset.shopCost || '0', 10);
        action.disabled = !owned && cost > 0 && getCoins() < cost;
        if (owned && cost === 0) {
          action.textContent = selectedSkin === skin ? 'EQUIPPED' : 'EQUIP';
        }
      }
      if (desc) {
        const cost = parseInt(section.dataset.cost || '0', 10);
        if (!isSkinOwned(skin) && cost > 0) {
          desc.textContent = getCoins() >= cost ? `${cost} COINS` : `${cost} COINS (Locked)`;
        } else if (isSkinOwned(skin) || cost === 0) {
          desc.textContent = 'OWNED';
        }
      }
    });
  }

  function getPathWorldPoint(step) {
    const pathLen = CUTSCENE_PATH.length;
    const wrapped = ((step % pathLen) + pathLen) % pathLen;
    const index = Math.floor(wrapped);
    const t = wrapped - index;
    const start = CUTSCENE_PATH[index];
    const end = CUTSCENE_PATH[(index + 1) % pathLen];
    const x = (start[0] + (end[0] - start[0]) * t) * TILE_SIZE - OFFSET;
    const z = (start[1] + (end[1] - start[1]) * t) * TILE_SIZE - OFFSET;
    return [x, z];
  }

  function clearCutsceneState() {
    cutsceneActive = false;
    cutsceneSnakeMeshes.forEach((mesh) => scene.remove(mesh));
    cutsceneSnakeMeshes = [];
    cutsceneFruits.forEach((item) => scene.remove(item.mesh));
    cutsceneFruits = [];
    if (rimLight) {
      scene.remove(rimLight);
      rimLight = null;
    }
    if (storyBackgroundGroup) {
      storyBackgroundGroup.children.forEach((m) => scene.remove(m));
      scene.remove(storyBackgroundGroup);
      storyBackgroundGroup = null;
    }
    storyBackgroundStars = [];
    scene.fog = null;
    clearStoryCinemaVisuals();
  }

  function clearGameplayMeshes() {
    for (const sid in snakeMeshes) {
      snakeMeshes[sid].forEach((mesh) => scene.remove(mesh));
    }
    snakeMeshes = {};
    while (fruitMeshes.length) scene.remove(fruitMeshes.pop());
  }

  function buildStoryBackground() {
    storyBackgroundGroup = new THREE.Group();
    const starMat = new THREE.MeshBasicMaterial({ color: 0x88aaff, transparent: true, opacity: 0.65 });
    for (let i = 0; i < 72; i++) {
      const starGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const star = new THREE.Mesh(starGeo, starMat.clone());
      star.material.opacity = 0.2 + Math.random() * 0.8;
      star.position.set(
        (Math.random() * GRID_SIZE - GRID_SIZE / 2) * TILE_SIZE,
        Math.random() * 70 - 10,
        (Math.random() * GRID_SIZE - GRID_SIZE / 2) * TILE_SIZE
      );
      star.userData.speed = 0.04 + Math.random() * 0.06;
      storyBackgroundGroup.add(star);
      storyBackgroundStars.push(star);
    }
    scene.add(storyBackgroundGroup);
  }

  function animateStoryBackground() {
    if (!storyBackgroundGroup) return;
    storyBackgroundGroup.rotation.y += 0.0008;
    for (const star of storyBackgroundStars) {
      star.position.y -= star.userData.speed;
      star.rotation.x += 0.02;
      star.rotation.z += 0.02;
      if (star.position.y < -24) star.position.y = 78;
    }
  }

  function createAppleModel(typeIndex) {
    const color = FRUIT_COLORS[typeIndex % FRUIT_COLORS.length];
    const bodySize = TILE_SIZE - 0.5;
    const group = new THREE.Group();
    const appleMat = new THREE.MeshLambertMaterial({ color, flatShading: true });
    const stemMat = new THREE.MeshLambertMaterial({ color: 0x2d5016, flatShading: true });

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(bodySize, bodySize, bodySize),
      appleMat
    );
    body.position.y = 0;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    const stem = new THREE.Mesh(
      new THREE.BoxGeometry(bodySize * 0.25, bodySize * 0.35, bodySize * 0.25),
      stemMat
    );
    stem.position.y = bodySize / 2 + (bodySize * 0.35) / 2;
    group.add(stem);
    group.userData.typeIndex = typeIndex;
    return group;
  }

  function spawnCutsceneApple(step) {
    const typeIndex = Math.floor(Math.random() * FRUIT_COLORS.length);
    const knightMesh = createAppleModel(typeIndex);
    scene.add(knightMesh);
    return {
      mesh: knightMesh,
      step,
      alive: true,
      cooldown: 0,
      offset: (Math.random() * 0.35) - 0.175,
      typeIndex
    };
  }

  function buildCutsceneScene() {
    clearCutsceneState();
    clearGameplayMeshes();
    scene.fog = new THREE.Fog(0x000000, 18, 170);
    rimLight = new THREE.PointLight(0x5ce0ff, 1.2, 250);
    rimLight.position.set(-40, 55, -40);
    scene.add(rimLight);
    buildStoryBackground();
    showStoryCinemaText();
    cutsceneDestroyCount = 0;
    cutsceneHeadStep = 0;
    cinematicPulse = 0;
    scoreDiv.style.display = 'none';
    const scoreboard = document.getElementById('scoreboard');
    if (scoreboard) scoreboard.style.display = 'none';
    document.getElementById('scoreboard').innerHTML = '';

    const snakeGeo = new THREE.BoxGeometry(TILE_SIZE - 0.2, TILE_SIZE - 0.2, TILE_SIZE - 0.2);
    for (let i = 0; i < CUTSCENE_SEGMENTS; i++) {
      const snakeColor = getSnakeColorForSkin(selectedSkin, i, 0);
      const snakeMesh = new THREE.Mesh(
        snakeGeo,
        new THREE.MeshLambertMaterial({ color: snakeColor })
      );
      snakeMesh.castShadow = true;
      snakeMesh.receiveShadow = true;
      scene.add(snakeMesh);
      cutsceneSnakeMeshes.push(snakeMesh);
    }

    for (let i = 0; i < APPLE_COUNT; i++) {
      cutsceneFruits.push(
        spawnCutsceneApple(Math.floor(Math.random() * CUTSCENE_PATH.length))
      );
    }

    cutsceneActive = true;
  }

  function animateCutscene(time) {
    cinematicPulse += 0.02;
    animateStoryBackground();
    if (ambientLight) ambientLight.intensity = 0.2 + Math.sin(cinematicPulse) * 0.08;
    if (dirLight) dirLight.intensity = 0.75 + Math.sin(cinematicPulse * 1.3) * 0.2;
    if (rimLight) {
      rimLight.intensity = 0.9 + Math.cos(cinematicPulse * 0.9) * 0.5;
      rimLight.position.set(
        Math.cos(cinematicPulse * 0.5) * 52,
        36 + Math.sin(cinematicPulse * 0.7) * 8,
        Math.sin(cinematicPulse * 0.5) * 52
      );
    }

    cutsceneHeadStep = (cutsceneHeadStep + CUTSCENE_SPEED) % CUTSCENE_PATH.length;
    const [headX, headZ] = getPathWorldPoint(cutsceneHeadStep);
    const [aheadX, aheadZ] = getPathWorldPoint(cutsceneHeadStep + 0.9);
    const moveDirX = aheadX - headX;
    const moveDirZ = aheadZ - headZ;
    const dirLen = Math.hypot(moveDirX, moveDirZ) || 1;
    const nx = moveDirX / dirLen;
    const nz = moveDirZ / dirLen;
    const cinematicOffset = 0.4 + (Math.sin(cinematicPulse * 2) + 1) * 0.5;
    camera.position.set(
      headX - nx * (72 + cinematicOffset * 4) + Math.sin(cinematicPulse * 1.4) * 6,
      54 + Math.sin(cinematicPulse * 0.7) * 9 + Math.sin(time * 0.0009) * 4,
      headZ - nz * (72 + cinematicOffset * 4) + Math.cos(cinematicPulse * 1.6) * 6
    );
    camera.lookAt(headX, -4, headZ);

    for (let i = 0; i < cutsceneSnakeMeshes.length; i++) {
      const [x, z] = getPathWorldPoint(cutsceneHeadStep - i * 0.9);
      const mesh = cutsceneSnakeMeshes[i];
      mesh.position.set(x, 0, z);
      mesh.rotation.x = Math.sin((time + i * 120) * 0.002) * 0.1;
      mesh.rotation.y = Math.cos((time + i * 90) * 0.002) * 0.08;
      if (i === 0) {
        mesh.rotation.z = Math.sin(cinematicPulse) * 0.06;
      }
      const segmentColor = getSnakeColorForSkin(selectedSkin, i, 0);
      mesh.material.color.setHex(segmentColor);
    }

    for (const item of cutsceneFruits) {
      if (!item.alive) {
        item.cooldown -= 1;
        if (item.cooldown <= 0) {
          item.alive = true;
          item.step = Math.floor(Math.random() * CUTSCENE_PATH.length);
          item.mesh.position.y = CUTSCENE_FRUIT_Y;
          item.mesh.visible = true;
          item.mesh.scale.setScalar(1);
          item.mesh.rotation.set(0, 0, 0);
        } else {
          const life = 1 - (item.cooldown / APPLE_RESPAWN_FRAMES);
          const scale = Math.max(0.05, 1 - life);
          item.mesh.scale.setScalar(scale);
          item.mesh.rotation.z += 0.4;
          item.mesh.position.y = CUTSCENE_FRUIT_Y + life * 0.6;
        }
        continue;
      }

      const [x, z] = getPathWorldPoint(item.step + item.offset);
      const [hx, hz] = getPathWorldPoint(cutsceneHeadStep - 0.1);
      item.mesh.position.set(x, CUTSCENE_FRUIT_Y, z);
      item.mesh.rotation.y += 0.025;
      item.mesh.rotation.z = Math.sin(time * 0.0015 + item.step) * 0.06;
      const bob = 1 + Math.sin(time * 0.006 + item.step) * 0.06;
      item.mesh.scale.setScalar(bob);

      const dist = Math.hypot((x - hx), (z - hz));
      if (dist < APPLE_HIT_RANGE * TILE_SIZE * 0.9) {
        item.alive = false;
        item.cooldown = APPLE_RESPAWN_FRAMES;
        cutsceneDestroyCount += 1;
        item.mesh.rotation.x += 0.8;
        continue;
      }
    }
  }

  function startCutsceneMode() {
    gameMode = 'story';
    gameStarted = true;
    coinsAwardedThisRound = false;
    mainMenu.classList.add('hidden');
    gameUI.classList.add('visible');
    buildCutsceneScene();
  }

  let gridTiles = [];
  let wallMeshes = [];
  let currentLevelId = null;

  function buildGrid() {
    const geo = new THREE.BoxGeometry(TILE_SIZE, 1, TILE_SIZE);
    const matDark = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const matLight = new THREE.MeshLambertMaterial({ color: 0x222222 });
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        const mat = (x + y) % 2 === 0 ? matDark : matLight;
        const tile = new THREE.Mesh(geo, mat.clone());
        tile.position.set((x * TILE_SIZE) - OFFSET, -2.5, (y * TILE_SIZE) - OFFSET);
        tile.receiveShadow = true;
        scene.add(tile);
        gridTiles.push({ mesh: tile, isDark: (x + y) % 2 === 0 });
      }
    }
    const wallH = 4;
    const wallThick = 2;
    const wallGeo = new THREE.BoxGeometry(GRID_SIZE * TILE_SIZE + wallThick * 2, wallH, wallThick);
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x00E436, emissive: 0x004400 });
    const walls = [
      [0, 0, -GRID_SIZE * TILE_SIZE / 2 - wallThick / 2, 0, 0, 0],
      [0, 0, GRID_SIZE * TILE_SIZE / 2 + wallThick / 2, 0, 0, 0],
      [-GRID_SIZE * TILE_SIZE / 2 - wallThick / 2, 0, 0, 0, Math.PI / 2, 0],
      [GRID_SIZE * TILE_SIZE / 2 + wallThick / 2, 0, 0, 0, Math.PI / 2, 0]
    ];
    walls.forEach(w => {
      const mesh = new THREE.Mesh(wallGeo, wallMat);
      mesh.position.set(w[0], w[1], w[2]);
      mesh.rotation.set(w[3], w[4], w[5]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      wallMeshes.push(mesh);
    });
  }

  function updateScene(data) {
    for (const sid in data.snakes) {
      const snake = data.snakes[sid];
      const isMe = sid === myId;
      const baseColor = COLORS[snake.color % COLORS.length];
      const bodyColor = ((baseColor >> 16 & 0xff) * 0.7) << 16 |
        ((baseColor >> 8 & 0xff) * 0.7) << 8 | ((baseColor & 0xff) * 0.7);

      if (!snakeMeshes[sid]) snakeMeshes[sid] = [];
      const meshes = snakeMeshes[sid];

      while (meshes.length < snake.body.length) {
        const geo = new THREE.BoxGeometry(TILE_SIZE - 0.2, TILE_SIZE - 0.2, TILE_SIZE - 0.2);
        const mat = new THREE.MeshLambertMaterial({ color: baseColor });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        meshes.push(mesh);
      }
      while (meshes.length > snake.body.length) {
        scene.remove(meshes.pop());
      }

      for (let i = 0; i < snake.body.length; i++) {
        const pos = snake.body[i];
        const mesh = meshes[i];
        const segmentColor = isMe
          ? getSnakeColorForSkin(selectedSkin, i, snake.color % COLORS.length)
          : i === 0 ? baseColor : bodyColor;
        mesh.material.color.setHex(segmentColor);
        mesh.position.set(
          (pos[0] * TILE_SIZE) - OFFSET,
          0,
          (pos[1] * TILE_SIZE) - OFFSET
        );
        if (!snake.alive) {
          mesh.rotation.x += 0.1;
          mesh.rotation.y += 0.1;
          mesh.scale.multiplyScalar(0.95);
        } else {
          mesh.rotation.set(0, 0, 0);
          mesh.scale.set(1, 1, 1);
        }
      }
    }

    for (const sid in snakeMeshes) {
      if (!data.snakes[sid]) {
        snakeMeshes[sid].forEach(m => scene.remove(m));
        delete snakeMeshes[sid];
      }
    }

    while (fruitMeshes.length < data.fruits.length) {
      const bodySize = TILE_SIZE - 0.5;
      const group = new THREE.Group();
      const geo = new THREE.BoxGeometry(bodySize, bodySize, bodySize);
      const mat = new THREE.MeshLambertMaterial({ color: 0xff0000, flatShading: true });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      const stem = new THREE.Mesh(
        new THREE.BoxGeometry(bodySize * 0.25, bodySize * 0.35, bodySize * 0.25),
        new THREE.MeshLambertMaterial({ color: 0x2d5016, flatShading: true })
      );
      stem.position.y = bodySize / 2 + (bodySize * 0.35) / 2;
      mesh.add(stem);
      group.add(mesh);
      scene.add(group);
      fruitMeshes.push(group);
    }
    while (fruitMeshes.length > data.fruits.length) {
      scene.remove(fruitMeshes.pop());
    }
    for (let i = 0; i < data.fruits.length; i++) {
      const fruit = data.fruits[i];
      const mesh = fruitMeshes[i];
      mesh.position.set(
        (fruit[0] * TILE_SIZE) - OFFSET,
        0,
        (fruit[1] * TILE_SIZE) - OFFSET
      );
      const mapFruits = data.levelSync?.current?.fruits || FRUIT_COLORS;
      mesh.children[0].material.color.setHex(mapFruits[fruit[2] % mapFruits.length]);
    }

    if (myId && data.snakes[myId]) {
      const mySnake = data.snakes[myId];
      scoreDiv.textContent = 'SCORE: ' + mySnake.score;
      lastScore = mySnake.score;
      if (!mySnake.alive) {
        if (!coinsAwardedThisRound) {
          coinsAwardedThisRound = true;
          addCoins(Math.max(10, mySnake.score * 10));
        }
        if (data.levelSync && data.levelSync.state === 'VOTE') {
          statusText.innerHTML = '';
        } else if (data.levelSync && data.levelSync.state === 'HARD') {
          statusText.innerHTML = 'SURVIVE IF YOU CAN!<br><span style="font-size: 14px; opacity: 0.8;">SPAWNING DISABLED</span>';
        } else if (data.levelSync && data.levelSync.state === 'WAITING') {
          statusText.innerHTML = 'Waiting for players to drop in!<br><span style="font-size: 14px; opacity: 0.8;">VOTING BEGINS IN ' + data.levelSync.timer + 's</span>';
        } else {
          statusText.innerHTML = 'GAME OVER<br>PRESS SPACE TO RESTART';
        }
        statusText.style.display = 'block';
      } else {
        statusText.style.display = 'none';
      }
    }

    const sorted = Object.entries(data.snakes).sort((a, b) => b[1].score - a[1].score);
    let html = '';
    sorted.forEach(([sid, s]) => {
      const color = COLORS[s.color % COLORS.length];
      const hex = '#' + color.toString(16).padStart(6, '0');
      html += `<div style="color: ${hex}">${sid === myId ? 'YOU' : 'PLYR'}: ${s.score}</div>`;
    });
    document.getElementById('scoreboard').innerHTML = html;

    if (data.levelSync) {
      updateLevelVisuals(data.levelSync.current);
      updateVoteUI(data.levelSync);
    }
  }

  function updateLevelVisuals(level) {
    if (currentLevelId === level.id) return;
    currentLevelId = level.id;
    gridTiles.forEach(t => {
      t.mesh.material.color.setHex(t.isDark ? level.base1 : level.base2);
    });
    wallMeshes.forEach(w => {
      w.material.color.setHex(level.wall);
      w.material.emissive.setHex(level.base1);
    });
  }

  let votedLevelId = null;
  function updateVoteUI(sync) {
    const timerEl = document.getElementById('vote-timer');
    const optsEl = document.getElementById('vote-options');
    const voteContainer = document.getElementById('in-game-vote');
    if (!timerEl || !optsEl) return;

    if (voteContainer && gameStarted && sync.state === 'VOTE') {
      voteContainer.style.display = 'block';
    } else if (voteContainer) {
      voteContainer.style.display = 'none';
      votedLevelId = null;
    }

    timerEl.textContent = `VOTING ENDS IN: ${sync.timer}s (${sync.current.name} Active)`;

    const optionsKey = sync.options.map(o => o.id).join('-');

    if (optsEl.dataset.optionsId !== optionsKey) {
      optsEl.dataset.optionsId = optionsKey;
      let html = '';
      sync.options.forEach(opt => {
        html += `
          <div class="vote-option" data-id="${opt.id}" style="
            background: #1a1a1a;
            border: 1px solid ${(opt.diff === 'EASY' ? '#66cc00' : opt.diff === 'MEDIUM' ? '#cc9900' : '#ff3300')};
            padding: 8px; border-radius: 4px; cursor: pointer; color: white; display: flex; justify-content: space-between; align-items: center; pointer-events: auto;
          ">
            <div>
              <div class="vote-option-name">${opt.name}</div>
              <div class="vote-option-details">${opt.diff}</div>
            </div>
            <div class="vote-count-text">0</div>
          </div>
        `;
      });
      optsEl.innerHTML = html;
      optsEl.querySelectorAll('.vote-option').forEach(el => {
        el.addEventListener('click', () => {
          votedLevelId = el.dataset.id;
          socket.emit('vote', votedLevelId);
        });
      });
    }

    sync.options.forEach(opt => {
      const votes = sync.counts[opt.id] || 0;
      const isSelected = votedLevelId === opt.id;
      const optionEl = optsEl.querySelector(`[data-id="${opt.id}"]`);
      if (optionEl) {
        optionEl.style.background = isSelected ? '#444' : '#1a1a1a';
        optionEl.style.borderColor = isSelected ? '#00e436' : (opt.diff === 'EASY' ? '#66cc00' : opt.diff === 'MEDIUM' ? '#cc9900' : '#ff3300');
        const countTxt = optionEl.querySelector('.vote-count-text');
        if (countTxt) {
          countTxt.textContent = votes;
          countTxt.style.color = isSelected ? '#00e436' : '#fff';
        }
      }
    });
  }

  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const t = tab.dataset.tab;
      document.querySelectorAll('.menu-tab').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(t + '-panel').classList.add('active');
      if (t === 'skins' && !skinsPreviewRendered) {
        renderSkinPreviews();
        skinsPreviewRendered = true;
      }
      if (t === 'skins') {
        setActiveSkinView(skinViewActive);
        renderSkinIndicators();
        startSkinPreview(skinViewActive);
      } else if (t === 'coins') {
        document.getElementById('coins-display').textContent = 'COINS: ' + getCoins();
      }
      if (t !== 'skins') stopSkinPreview();
    });
  });

  function setSkinViewByIndex(index) {
    skinViewIndex = (index + SKIN_VIEW_IDS.length) % SKIN_VIEW_IDS.length;
    skinViewActive = SKIN_VIEW_IDS[skinViewIndex];
    setActiveSkinView(skinViewActive);
  }

  function setActiveSkinView(skinId) {
    skinViewActive = skinId;
    skinViewIndex = SKIN_VIEW_IDS.indexOf(skinId);
    if (skinViewIndex < 0) skinViewIndex = 0;
    document.querySelectorAll('.skin-view-section').forEach(s => s.classList.remove('active'));
    const section = document.querySelector('.skin-view-section[data-skin-view="' + skinId + '"]');
    if (section) section.classList.add('active');
    document.querySelectorAll('.skin-indicator').forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.skinIndex === String(skinViewIndex));
    });
    setSkinHeader(skinViewActive);
    stopSkinPreview();
    startSkinPreview(skinViewActive);
    updateShopSkinButtons();
    updateSkinLockState();
  }

  const skinPrevBtn = document.getElementById('skin-prev');
  const skinNextBtn = document.getElementById('skin-next');
  if (skinPrevBtn) skinPrevBtn.addEventListener('click', () => setSkinViewByIndex(skinViewIndex - 1));
  if (skinNextBtn) skinNextBtn.addEventListener('click', () => setSkinViewByIndex(skinViewIndex + 1));

  document.querySelectorAll('.skin-view-section').forEach((section) => {
    const sectionSkin = section.dataset.skin;
    if (!sectionSkin) return;
    section.addEventListener('click', (e) => {
      if (e.target.closest('.shop-skin-action')) return;
      setActiveSkinView(sectionSkin);
    });
  });

  function stopSkinPreview() {
    if (shopPreviewRaf) {
      cancelAnimationFrame(shopPreviewRaf);
      shopPreviewRaf = null;
    }
  }

  function startSkinPreview(skinId) {
    stopSkinPreview();
    if (!skinId) return;
    const panel = document.getElementById('skins-panel');
    if (!panel || !panel.classList.contains('active')) return;
    runSkinPreview('skin-preview-' + skinId, skinId);
  }

  function startShopRotate() {
    startSkinPreview(skinViewActive);
  }
  function stopShopRotate() {
    stopSkinPreview();
  }

  function runSkinPreview(canvasId, skinId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = PREVIEW_GRID_W;
    const H = PREVIEW_GRID_H;
    const cell = PREVIEW_CELL;
    const path = [];
    for (let x = 2; x < W - 2; x++) path.push([x, 2]);
    for (let y = 2; y < H - 2; y++) path.push([W - 3, y]);
    for (let x = W - 3; x >= 2; x--) path.push([x, H - 3]);
    for (let y = H - 3; y >= 2; y--) path.push([2, y]);
    const snakeLen = Math.min(10, path.length - 1);
    let headIdx = 0;
    let lastStep = 0;

    function draw(now) {
      const panel = document.getElementById('skins-panel');
      const activeSection = document.querySelector('.skin-view-section.active');
      if (!panel || !panel.classList.contains('active') || !activeSection || activeSection.dataset.skinView !== skinId) return;
      if (lastStep === 0) lastStep = now;
      if (now - lastStep >= PREVIEW_STEP_MS) {
        headIdx = (headIdx + 1) % path.length;
        lastStep = now;
      }
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let gx = 0; gx < W; gx++) {
        for (let gy = 0; gy < H; gy++) {
          ctx.fillStyle = (gx + gy) % 2 === 0 ? '#111' : '#1a1a1a';
          ctx.fillRect(gx * cell, gy * cell, cell, cell);
        }
      }
      for (let i = 0; i < snakeLen; i++) {
        const idx = (headIdx - i + path.length * 2) % path.length;
        const [px, py] = path[idx];
        const hex = getPreviewSnakeColors(skinId, i);
        ctx.fillStyle = '#' + (hex >>> 0).toString(16).padStart(6, '0');
        ctx.fillRect(px * cell + 1, py * cell + 1, cell - 2, cell - 2);
      }
      shopPreviewRaf = requestAnimationFrame(draw);
    }
    shopPreviewRaf = requestAnimationFrame(draw);
  }

  function drawSkinPreviewFrame(canvas, skinId) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = PREVIEW_GRID_W;
    const H = PREVIEW_GRID_H;
    const cell = PREVIEW_CELL;
    const path = [];
    for (let x = 2; x < W - 2; x++) path.push([x, 2]);
    for (let y = 2; y < H - 2; y++) path.push([W - 3, y]);
    for (let x = W - 3; x >= 2; x--) path.push([x, H - 3]);
    for (let y = H - 3; y >= 2; y--) path.push([2, y]);
    const snakeLen = Math.min(10, path.length - 1);

    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let gx = 0; gx < W; gx++) {
      for (let gy = 0; gy < H; gy++) {
        ctx.fillStyle = (gx + gy) % 2 === 0 ? '#111' : '#1a1a1a';
        ctx.fillRect(gx * cell, gy * cell, cell, cell);
      }
    }
    for (let i = 0; i < snakeLen; i++) {
      const idx = (1 - i + path.length) % path.length;
      const [px, py] = path[idx];
      const hex = getPreviewSnakeColors(skinId, i);
      ctx.fillStyle = '#' + (hex >>> 0).toString(16).padStart(6, '0');
      ctx.fillRect(px * cell + 1, py * cell + 1, cell - 2, cell - 2);
    }
  }

  function getPreviewSnakeColors(skinId, segmentIndex) {
    return getSnakeColorForSkin(skinId, segmentIndex, 0);
  }

  function updateShopSkinButtons() {
    document.querySelectorAll('.shop-skin-action').forEach(btn => {
      const skin = btn.dataset.shopSkin;
      const cost = parseInt(btn.dataset.shopCost || '0', 10);
      const owned = isSkinOwned(skin);
      const equipped = selectedSkin === skin;
      if (owned) {
        btn.disabled = false;
        btn.textContent = equipped ? 'EQUIPPED' : 'EQUIP';
        btn.classList.toggle('equipped', equipped);
      } else {
        btn.textContent = 'BUY';
        btn.classList.remove('equipped');
        btn.disabled = cost > 0 && getCoins() < cost;
      }
    });
  }

  document.querySelectorAll('.shop-skin-action').forEach(btn => {
    btn.addEventListener('click', () => {
      const skin = btn.dataset.shopSkin;
      const cost = parseInt(btn.dataset.shopCost || '0', 10);
      const owned = isSkinOwned(skin);
      if (owned) {
        selectedSkin = skin;
        setSelectedSkin(skin);
        skinViewActive = skin;
        skinViewIndex = SKIN_VIEW_IDS.indexOf(skin);
        if (skinViewIndex < 0) skinViewIndex = 0;
        setActiveSkinView(skinViewActive);
        setSkinHeader(skin);
        updateShopSkinButtons();
        updateSkinLockState();
        return;
      }
      if (cost > 0 && getCoins() >= cost && buySkin(skin, cost)) {
        selectedSkin = skin;
        setSelectedSkin(skin);
        skinViewActive = skin;
        skinViewIndex = SKIN_VIEW_IDS.indexOf(skin);
        if (skinViewIndex < 0) skinViewIndex = 0;
        setActiveSkinView(skinViewActive);
        updateShopSkinButtons();
        updateSkinLockState();
        setSkinHeader(skin);
        document.getElementById('coins-display').textContent = 'COINS: ' + getCoins();
      }
    });
  });

  if (skinsPanel) {
    setActiveSkinView(skinViewActive);
    if (!skinsPreviewRendered) {
      renderSkinPreviews();
      skinsPreviewRendered = true;
    } else {
      renderSkinIndicators();
    }
  }

  function startGame() {
    clearCutsceneState();
    gameMode = 'play';
    statusText.style.display = 'none';
    scoreDiv.style.display = 'block';
    const scoreboard = document.getElementById('scoreboard');
    if (scoreboard) scoreboard.style.display = 'block';

    // Initial display config
    const voteContainer = document.getElementById('in-game-vote');
    if (voteContainer) voteContainer.style.display = 'none';

    mainMenu.classList.add('hidden');
    gameUI.classList.add('visible');
    gameStarted = true;
    coinsAwardedThisRound = false;
    socket.emit('join', {
      mode: 'play',
      botCount: 0,
    });
  }

  startGameButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      startGame(btn.dataset.mode || 'play');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!gameStarted) {
      const skinsPanel = document.getElementById('skins-panel');
      const isSkinsPanelOpen = mainMenu && !mainMenu.classList.contains('hidden') && skinsPanel && skinsPanel.classList.contains('active');
      if (!isSkinsPanelOpen) return;
      if (e.code === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setSkinViewByIndex(skinViewIndex - 1);
        return;
      }
      if (e.code === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setSkinViewByIndex(skinViewIndex + 1);
        return;
      }
      return;
    }
    if (e.code === 'Space') {
      socket.emit('reset');
      return;
    }
    let dir = null;
    if (e.code === 'ArrowUp' || e.key === 'w') dir = { x: 0, y: -1 };
    if (e.code === 'ArrowDown' || e.key === 's') dir = { x: 0, y: 1 };
    if (e.code === 'ArrowLeft' || e.key === 'a') dir = { x: -1, y: 0 };
    if (e.code === 'ArrowRight' || e.key === 'd') dir = { x: 1, y: 0 };
    if (dir) socket.emit('dir', dir);
  });

  function animate(time) {
    if (cutsceneActive) animateCutscene(time);
    fruitMeshes.forEach((mesh, i) => {
      mesh.position.y = Math.sin(time * 0.005 + i) * 1;
      mesh.rotation.y += 0.02;
    });
    renderer.render(scene, camera);
  }

  init();

}

loadSocketIO().then(() => main()).catch((err) => {
  document.body.innerHTML = '<p style="color:#fff;font-family:sans-serif;padding:20px;text-align:center">Failed to start: ' + (err && err.message) + '</p>';
  console.error(err);
});
