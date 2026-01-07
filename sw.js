const CACHE_NAME = 'ponto-elite-v15';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
