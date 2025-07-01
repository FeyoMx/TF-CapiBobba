const CACHE_NAME = 'capibobba-loyalty-card-v1';
const urlsToCache = [
    '/', // Root of your application (index.html)
    '/index.html',
    '/manifest.json',
    // Replace with your actual logo URL if different from the background image
    'https://i.imgur.com/llR0NN0.png', 
    // Placeholder icons for PWA (replace with your actual icon URLs)
    'https://placehold.co/48x48/8b5cf6/ffffff?text=CB',
    'https://placehold.co/72x72/8b5cf6/ffffff?text=CB',
    'https://placehold.co/96x96/8b5cf6/ffffff?text=CB',
    'https://placehold.co/144x144/8b5cf6/ffffff?text=CB',
    'https://placehold.co/192x192/8b5cf6/ffffff?text=CB',
    'https://placehold.co/512x512/8b5cf6/ffffff?text=CB',
    // Tailwind CSS CDN (consider caching if offline usage is critical)
    'https://cdn.tailwindcss.com',
    // Google Fonts (Poppins)
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8PhgZrHT6rZFOFG.woff2' // Example Poppins woff2 font file
];

// Install event: Caches all necessary assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate event: Cleans up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Eliminando cache antiguo', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event: Serves cached content first, then fetches from network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // No cache hit - fetch from network
                return fetch(event.request).then(
                    networkResponse => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and can only be consumed once. We must clone it so that
                        // the browser can consume one and we can consume the other.
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                );
            })
    );
});
