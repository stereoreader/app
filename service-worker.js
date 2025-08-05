const CACHE_NAME = "pwa-cache-v1";

// JS/CSS will be cached dynamically on request
const CORE_FILES = [
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Network-first for JS/CSS/HTML, cache-first for icons/images
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Cache-first for icons/images
  if (req.destination === "image" || req.destination === "font") {
    event.respondWith(
      caches.match(req).then((res) => res || fetch(req).then((res2) => {
        caches.open(CACHE_NAME).then((cache) => cache.put(req, res2.clone()));
        return res2;
      }))
    );
    return;
  }

  // Network-first for JS/CSS/HTML
  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        return res;
      })
      .catch(() => caches.match(req))
  );
});