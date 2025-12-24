// Service Worker
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('message', event => {
  console.log("SW: otrzymano wiadomość", event.data);
  if (event.data.type === "SHOW_FISZKA") {
    const fiszka = event.data.fiszka;
    self.registration.showNotification(fiszka.title, {
      body: fiszka.body,
      icon: fiszka.icon,
      badge: fiszka.icon
    });
  }
});