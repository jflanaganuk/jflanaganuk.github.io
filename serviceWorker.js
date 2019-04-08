importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`);
	workbox.routing.registerRoute(
	  new RegExp('.*\.js'),
	  new workbox.strategies.CacheFirst()
	);
	workbox.routing.registerRoute(
	  new RegExp('.*\.css'),
	  new workbox.strategies.CacheFirst()
	);
	workbox.routing.registerRoute(
	  '/',
	  new workbox.strategies.CacheFirst()
	);
} else {
	console.log(`Boo! Workbox didn't load 😬`);
}
