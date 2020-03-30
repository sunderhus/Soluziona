self.addEventListener('install', function (event) {
    console.log('service instaled');
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.addAll([
                    '/Soluziona/',
                    '/Soluziona/js/main.js',
                    '/Soluziona/js/glightbox.min.js',
                    '/Soluziona/assets/img/soluzionaSplash144x144.png',
                    '/Soluziona/index.html',
                    'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'
                ]);
            })
    );
});


self.addEventListener('activate', function () {
    console.log('SW Activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (resp) {
                if (resp) {
                    return resp;
                } else {
                    return fetch(event.request);
                }
            })
    );
});