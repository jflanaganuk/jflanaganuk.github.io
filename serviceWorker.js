importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`);
	workbox.routing.registerRoute(
		/\.(?:png|jpg|jpeg|svg|gif|js|html|css)$/,
		new workbox.strategies.NetworkFirst()
	);
} else {
	console.log(`Boo! Workbox didn't load 😬`);
}
