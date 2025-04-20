self.addEventListener('install', event => {
  event.waitUntil(caches.open('v1').then(cache => cache.addAll([
    '/',
    '/index.html',
    '/about.html',
    '/services.html',
    '/valuation.html',
    '/buy.html',
    '/sell.html',
    '/contact.html',
    '/css/styles.css',
    '/js/script.js',
    '/images/favicon.ico'
  ])));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});