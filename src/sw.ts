import { clientsClaim } from "workbox-core";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);
self.skipWaiting();
clientsClaim();

// registerRoute(
//   ({ url }) => url.pathname.endsWith(".json"),
//   new CacheFirst({
//     cacheName: "json-cache",
//     plugins: [new CacheableResponsePlugin({ statuses: [200] })],
//   })
// );
