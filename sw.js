/* Continuum service worker — offline app shell + faster loads.
   Bump CACHE when assets change to invalidate old caches. */
var CACHE = "continuum-v8";
var ASSETS = [
  "./", "./index.html", "./projects.html", "./project.html", "./tasks.html",
  "./journal.html", "./timeline.html", "./knowledge.html", "./bookmarks.html",
  "./courses.html", "./prompts.html", "./servers.html", "./repos.html",
  "./work.html", "./assistant.html", "./search.html", "./settings.html",
  "./inbox.html", "./profile.html", "./focus.html",
  "./app.css", "./app.js", "./config.js", "./sync.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png",
  "./favicon.svg", "./favicon-32.png", "./favicon-48.png",
  "./fonts/thmanyahserifdisplay-Light.woff2",
  "./fonts/thmanyahserifdisplay-Regular.woff2",
  "./fonts/thmanyahserifdisplay-Medium.woff2",
  "./fonts/thmanyahserifdisplay-Bold.woff2",
  "./fonts/thmanyahserifdisplay-Black.woff2"
];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(ASSETS.map(function (u) { return c.add(u).catch(function () {}); }));
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// A redirected response can't be returned for a navigation (redirect mode != "follow").
// Rebuild it into a plain Response so navigations never error.
function unredirect(res) {
  if (!res || !res.redirected) return Promise.resolve(res);
  return res.blob().then(function (body) {
    return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  // Same-origin app assets -> cache-first, then network (rebuilt if redirected)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (res) {
          return unredirect(res).then(function (fixed) {
            if (fixed && fixed.status === 200 && (fixed.type === "basic" || res.redirected)) {
              try { var copy = fixed.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); } catch (x) {}
            }
            return fixed;
          });
        }).catch(function () {
          return caches.match(req).then(function (c) {
            return c || caches.match("./index.html");
          });
        });
      })
    );
    return;
  }

  // Google Fonts + Firebase SDK (static) -> stale-while-revalidate
  if (url.host === "fonts.gstatic.com" || url.host === "fonts.googleapis.com" || url.host === "www.gstatic.com") {
    e.respondWith(
      caches.match(req).then(function (cached) {
        var net = fetch(req).then(function (res) {
          try { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); } catch (x) {}
          return res;
        }).catch(function () { return cached; });
        return cached || net;
      })
    );
    return;
  }

  // Everything else (Firestore data / Auth / Anthropic API) -> straight to network
});
