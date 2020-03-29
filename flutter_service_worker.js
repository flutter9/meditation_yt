'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "a49151fc124d2630586c415ecd34c209",
"/assets/LICENSE": "118ce36fe240638f035aabe1dbee5383",
"/assets/AssetManifest.json": "df61916a20160d34ffaf07b5c047e6d5",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/galaxy.jpg": "b4a84efeb4c1ff627a9b2fe179adb490",
"/assets/assets/dessert.jpg": "c409bf6144ddcb9a4338696ff085f902",
"/assets/assets/face.jpg": "6c0e4b1e0bb57a286d6d3dd3e14f68ba",
"/assets/assets/beach.jpg": "f5108255be48f8494d18e33c297df363",
"/assets/assets/lights.jpg": "146ef0ff3c3857342053ad3e09a2bf06"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
