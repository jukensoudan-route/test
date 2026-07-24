// v2.0.4.30: service worker disabled intentionally.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.registration.unregister()));
