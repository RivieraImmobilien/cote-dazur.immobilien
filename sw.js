importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');
if (workbox) {
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({cacheName:'images-cache'})
  );
  workbox.routing.registerRoute(
    /.*/,
    new workbox.strategies.NetworkFirst({cacheName:'default-cache'})
  );
}
