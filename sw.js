/* Time Blends - Service Worker */
const CACHE_NAME = 'timeblends-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let browser handle non-GET and cross-origin
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request));
});
