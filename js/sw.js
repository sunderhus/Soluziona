self.addEventListener('install', function (event) {
    console.log("%c SW instaled", "color:green; background-color:#f3f3f3;");
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.addAll([
                    '../../',
                    '../../Soluziona/js/main.js',
                    '../../Soluziona/js/glightbox.min.js',
                    '../../Soluziona/assets/img/soluzionaSplash144x144.png',
                    '../../Soluziona/index.html',
                    'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log("%c SW is Activated", "color:green; background-color:#f3f3f3;");
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