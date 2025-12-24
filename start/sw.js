self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("periodicsync", async event => {
  if (event.tag === "fiszka-sync") {

    const fiszka = await self.registration.storage.get("fiszka-trening");

    if (fiszka) {
      await self.registration.showNotification(fiszka.title, {
        body: fiszka.body,
        icon: fiszka.icon,
        badge: fiszka.icon
      });
    }
  }
});