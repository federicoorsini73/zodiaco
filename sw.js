const CACHE_NAME = 'zodiaco-v2';

// Installazione del Service Worker
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Attivazione e pulizia vecchia cache
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Gestione delle richieste (passa tutto direttamente alla rete)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
