/* Continuum service worker — offline app shell + faster loads.
   Bump CACHE when assets change to invalidate old caches. */
var CACHE = "continuum-v2";
var ASSETS = [
  "./", "./index.html", "./projects.html", "./project.html", "./tasks.html",
  "./journal.html", "./timeline.html", "./knowledge.html", "./bookmarks.html",
  "./courses.html", "./prompts.html", "./servers.html", "./repos.html",
  "./work.html", "./assistant.html", "./search.html", "./settings.html",
  "./inbox.html", "./profile.html", "./focus.html",
  "./app.css", "./app.js", "./config.js", "./sync.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png",
  "./fonts/thmanyahserifdisplay-Light.woff2",
  "./fonts/thmanyahserifdisplay-Regular.woff2",
  "./fonts/thmanyahserifdisplay-Medium.woff2",
  "./fonts/thmanyahserifdisplay-Bold.woff2",
  "./fonts/thmanyahserifdisplay-Black.woff2"
];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    // add individually so one 404 doesn't fail the whole install
    return Promise.all(ASSETS.map(function (u) {
      return c.add(u).catch(function () {});
    }));
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  // Same-origin app assets -> cache-first, then network (and refresh cache)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(function (cached) {
        var net = fetch(req).then(function (res) {
          if (res && res.status === 200 && res.type === "basic") {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        }).catch(function () { return cached; });
        return cached || net;
      }).catch(function () {
        // offline navigation fallback
        if (req.mode === "navigate") return caches.match("./index.html");
      })
    );
    return;
  }

  // Google Fonts + Firebase SDK (static) -> stale-while-revalidate
  if (url.host === "fonts.gstatic.com" || url.host === "fonts.googleapis.com" || url.host === "www.gstatic.com") {
    e.respondWith(
      caches.match(req).then(function (cached) {
        var net = fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
          return res;
        }).catch(function () { return cached; });
        return cached || net;
      })
    );
    return;
  }

  // Everything else (Firestore data / Auth APIs) -> straight to network (never cache dynamic data)
});
