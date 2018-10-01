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

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then( function (cache) {
      return cache.addAll(urlsToCache);
    })
  )
});
