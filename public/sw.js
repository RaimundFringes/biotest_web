const objects = [
    '/',
    '/sw.js',
    '/global.css',
    '/favicon.png',
    '/build/bundle.css',
    '/build/bundle.js',
]
self.addEventListener('install', event => event.waitUntil(
    caches.open('bfpwa').then(cache => cache.addAll(objects))
));

self.addEventListener('fetch', event => event.respondWith(
    caches.open('bfpwa')
        .then(cache => cache.match(event.request))
        .then(response => response || fetch(event.request))
));