const cacheName = 'cache-v3';
const resourcesToPrecache = [
	'/',
	'index.html',
	'favicon.ico',
	'flame.png',
	'static/css/main.ff896ea7.chunk.css',
	'static/js/2.278c4d8b.chunk.js',
	'static/js/main.e0228600.chunk.js',
	'static/media/facebook.c0cd1382.svg',
	'static/media/instagram.b1c58ee1.svg',
	'static/media/pinterest.d88fe1a0.svg',
	'static/media/reddit.e8b44d7e.svg',
	'static/media/tumblr.5f615536.svg',
	'static/media/twitter.182d5ef4.svg',
	'static/media/vimeo.2fc137bd.svg',
	'static/media/youtube.a6372485.svg'
];

self.addEventListener('install', event => {
	console.log('🎉 Service worker install event!');
	event.waitUntil(
		caches.open(cacheName)
		.then(cache => {
			return cache.addAll(resourcesToPrecache);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request)
		.then(cachedResponse => {
			return cachedResponse || fetch(event.request);
		})
	);
});