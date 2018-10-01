let staticCacheName = 'restaurant-v1';
let urlsToCache = [
  './',
  'restaurant.html',
  'css/styles.css',
  'js/main.js',
  'js/restaurant_info.js',
  'js/dbhelper.js',
  'data/restaurants.json',
];

// Service Worker before get installed, get name, urls and addthem to cache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then( function (cache) {
      return cache.addAll(urlsToCache);
    })
  )
});

//activate the service Worker
self.addEventListener('activate', function (event) {
  console.log("New service getting activated...");
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('restaurant-') &&
                 cacheName != staticCacheName;
        }).map(function (cacheName) {
          return caches.delete(cacheName)
        })
      );
    })
  )
});
