/* Continuum sync layer — FIREBASE (Auth + Firestore).
   Uses the Firebase "compat" SDK (global window.firebase).
   Exposes window.CxSync (same API as before). If not configured or SDK missing
   -> guest mode (no-ops). Never throws at load.
   Storage model: one document per user at continuum_state/{uid} = { data, updatedAt }. */
(function () {
  "use strict";
  var cfg = window.CONTINUUM_CONFIG || {};
  var FB = cfg.firebase || {};
  var COL = "continuum_state";
  var app = null, auth = null, db = null, user = null, status = "guest", pushTimer = null;
  var authCbs = [], statusCbs = [];

  function setStatus(s) { status = s; statusCbs.forEach(function (f) { try { f(s); } catch (e) {} }); }
  function fireAuth() { authCbs.forEach(function (f) { try { f(user); } catch (e) {} }); }
  function configured() {
    return !!(FB && FB.apiKey && FB.projectId && window.firebase && window.firebase.initializeApp);
  }

  function init() {
    if (!configured()) { setStatus("guest"); return; }
    try {
      app = (window.firebase.apps && window.firebase.apps.length) ? window.firebase.app() : window.firebase.initializeApp(FB);
      auth = window.firebase.auth();
      db = window.firebase.firestore();
    } catch (e) { app = null; setStatus("guest"); return; }
    try {
      auth.onAuthStateChanged(function (u) {
        var changed = (!!u) !== (!!user) || (u && user && u.uid !== user.uid);
        user = u || null;
        setStatus(user ? "online" : "signedout");
        fireAuth();
      });
    } catch (e) { setStatus("error"); }
  }

  function wrap(p) {
    return p.then(function (r) { return r; })
            .catch(function (e) { return { error: { message: (e && e.message) || "error" } }; });
  }
  function signUp(email, pass) {
    if (!auth) return Promise.resolve({ error: { message: "not configured" } });
    return wrap(auth.createUserWithEmailAndPassword(email, pass));
  }
  function signIn(email, pass) {
    if (!auth) return Promise.resolve({ error: { message: "not configured" } });
    return wrap(auth.signInWithEmailAndPassword(email, pass));
  }
  function signOut() {
    if (!auth) return Promise.resolve();
    return auth.signOut().then(function () { user = null; setStatus("signedout"); fireAuth(); });
  }

  function ref() { return db.collection(COL).doc(user.uid); }
  function pull() {
    if (!db || !user) return Promise.resolve(null);
    setStatus("syncing");
    return ref().get().then(function (snap) {
      setStatus("online");
      if (snap && snap.exists) { var d = snap.data() || {}; return { data: d.data, updated_at: d.updatedAt }; }
      return null;
    }).catch(function () { setStatus("error"); return null; });
  }
  function push(data) {
    if (!db || !user) return Promise.resolve();
    setStatus("syncing");
    return ref().set({ data: data, updatedAt: Date.now() }, { merge: true })
      .then(function () { setStatus("online"); })
      .catch(function () { setStatus("error"); });
  }
  function pushDebounced(getData) {
    if (!db || !user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { try { push(getData()); } catch (e) {} }, 1300);
  }

  function subscribe(cb) {
    if (!db || !user) return function () {};
    try {
      return ref().onSnapshot(function (snap) {
        if (snap && snap.exists) { var d = snap.data() || {}; cb({ data: d.data, updated_at: d.updatedAt }); }
      }, function () {});
    } catch (e) { return function () {}; }
  }

  window.CxSync = {
    init: init, configured: configured,
    loggedIn: function () { return !!user; },
    user: function () { return user; },
    status: function () { return status; },
    onAuth: function (f) { authCbs.push(f); },
    onStatus: function (f) { statusCbs.push(f); },
    signUp: signUp, signIn: signIn, signOut: signOut,
    pull: pull, push: push, pushDebounced: pushDebounced, subscribe: subscribe
  };
})();
