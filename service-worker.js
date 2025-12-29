self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // ❌ NO cachear Apps Script (datos en vivo)
  if (url.origin.includes("script.google.com")) {
    return; // deja que vaya directo a internet
  }

  // ❌ NO cachear Google Maps / tiles
  if (url.origin.includes("google") || url.origin.includes("openstreetmap")) {
    return;
  }

  // Todo lo demás: normal
});
