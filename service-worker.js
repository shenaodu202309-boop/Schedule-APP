const CACHE_NAME = 'daily-schedule-native-v300';
const APP_SHELL = [
  './index.html',
  './styles.css',
  './native-notifications.js',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './ChatGPT Image 2026年7月10日 21_48_26.png',
  './graduation-game-v2/index.html',
  './graduation-game-v2/relationships.html',
  './graduation-game-v2/company.html',
  './graduation-game-v2/skill-market.html',
  './graduation-game-v2/tarot.html',
  './graduation-game-v2/styles.css',
  './graduation-game-v2/app.js',
  './graduation-game-v2/company.js',
  './graduation-game-v2/skill-market.js',
  './graduation-game-v2/dressup-assets.js',
  './graduation-game-v2/relationships.js',
  './graduation-game-v2/tarot.js',
  './graduation-game-v2/assets/bank-ui/my-bank-title-banner.png',
  './graduation-game-v2/assets/task-icons/task-art-1.png',
  './graduation-game-v2/assets/task-icons/task-art-2.png',
  './graduation-game-v2/assets/task-icons/task-art-3.png',
  './graduation-game-v2/assets/task-icons/task-art-4.png',
  './graduation-game-v2/assets/task-icons/task-art-5.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-01.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-02.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-03.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-04.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-05.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-06.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-07.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-08.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-09.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-10.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-11.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-12.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-13.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-14.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-15.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-16.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-17.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-18.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-19.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-20.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-21.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-22.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-23.png',
  './graduation-game-v2/assets/task-elements/icons/task-icon-24.png',
  './graduation-game-v2/assets/relationships/relationship-art-1.png',
  './graduation-game-v2/assets/relationships/relationship-art-2.png',
  './graduation-game-v2/assets/relationships/relationship-art-3.png',
  './graduation-game-v2/assets/relationships/relationship-art-4.png',
  './graduation-game-v2/assets/relationships/relationship-art-5.png',
  './graduation-game-v2/assets/ui-elements/asset-sheet.png',
  './graduation-game-v2/assets/characters/bunny-white.png',
  './graduation-game-v2/assets/characters/black-cat.png',
  './graduation-game-v2/assets/characters/bunny-purple.png',
  './graduation-game-v2/assets/characters/bunny-green.png',
  './graduation-game-v2/assets/characters/eye-pink.png',
  './graduation-game-v2/assets/characters/shadow-blob.png',
  './graduation-game-v2/assets/characters/character-strip-1.png',
  './graduation-game-v2/assets/characters/character-strip-2.png',
  './graduation-game-v2/assets/characters/character-strip-3.png',
  './graduation-game-v2/assets/characters/character-group.png',
  './graduation-game-v2/assets/expressions/bunny-sad.png',
  './graduation-game-v2/assets/expressions/bunny-crying.png',
  './graduation-game-v2/assets/expressions/bunny-calm.png',
  './graduation-game-v2/assets/expressions/bunny-excited.png',
  './graduation-game-v2/assets/expressions/bunny-celebrate.png',
  './graduation-game-v2/assets/expressions/blackcat-sad.png',
  './graduation-game-v2/assets/expressions/blackcat-crying.png',
  './graduation-game-v2/assets/expressions/blackcat-calm.png',
  './graduation-game-v2/assets/expressions/blackcat-excited.png',
  './graduation-game-v2/assets/expressions/blackcat-celebrate.png',
  './graduation-game-v2/assets/expressions/purple-sad.png',
  './graduation-game-v2/assets/expressions/purple-crying.png',
  './graduation-game-v2/assets/expressions/purple-calm.png',
  './graduation-game-v2/assets/expressions/purple-excited.png',
  './graduation-game-v2/assets/expressions/purple-celebrate.png',
  './graduation-game-v2/assets/expressions/green-sad.png',
  './graduation-game-v2/assets/expressions/green-crying.png',
  './graduation-game-v2/assets/expressions/green-calm.png',
  './graduation-game-v2/assets/expressions/green-excited.png',
  './graduation-game-v2/assets/expressions/green-celebrate.png',
  './graduation-game-v2/assets/expressions/eye-sad.png',
  './graduation-game-v2/assets/expressions/eye-crying.png',
  './graduation-game-v2/assets/expressions/eye-calm.png',
  './graduation-game-v2/assets/expressions/eye-excited.png',
  './graduation-game-v2/assets/expressions/eye-celebrate.png',
  './graduation-game-v2/assets/expressions/shadow-sad.png',
  './graduation-game-v2/assets/expressions/shadow-crying.png',
  './graduation-game-v2/assets/expressions/shadow-calm.png',
  './graduation-game-v2/assets/expressions/shadow-excited.png',
  './graduation-game-v2/assets/expressions/shadow-celebrate.png'
];

const TAROT_IMAGE_FILES = [
  'RWS_Tarot_00_Fool.jpg',
  'RWS_Tarot_01_Magician.jpg',
  'RWS_Tarot_02_High_Priestess.jpg',
  'RWS_Tarot_03_Empress.jpg',
  'RWS_Tarot_04_Emperor.jpg',
  'RWS_Tarot_05_Hierophant.jpg',
  'RWS_Tarot_06_Lovers.jpg',
  'RWS_Tarot_07_Chariot.jpg',
  'RWS_Tarot_08_Strength.jpg',
  'RWS_Tarot_09_Hermit.jpg',
  'RWS_Tarot_10_Wheel_of_Fortune.jpg',
  'RWS_Tarot_11_Justice.jpg',
  'RWS_Tarot_12_Hanged_Man.jpg',
  'RWS_Tarot_13_Death.jpg',
  'RWS_Tarot_14_Temperance.jpg',
  'RWS_Tarot_15_Devil.jpg',
  'RWS_Tarot_16_Tower.jpg',
  'RWS_Tarot_17_Star.jpg',
  'RWS_Tarot_18_Moon.jpg',
  'RWS_Tarot_19_Sun.jpg',
  'RWS_Tarot_20_Judgement.jpg',
  'RWS_Tarot_21_World.jpg',
  ...['Wands', 'Cups', 'Swords', 'Pents'].flatMap((suit) =>
    Array.from({ length: 14 }, (_, index) => `${suit}${String(index + 1).padStart(2, '0')}.jpg`)
  ),
];

APP_SHELL.push(...TAROT_IMAGE_FILES.map((file) => `./graduation-game-v2/assets/tarot/rws/${file}`));

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const request = event.request;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html', { ignoreSearch: true }))
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(cached => cached || fetch(request))
  );
});
