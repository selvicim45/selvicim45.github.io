const staticAssets=[
'./',
'./index.html'
'./lightblue.jpg'
'./lightgold.jpg'];


self.addEventListener('install', async event => {
const cache = await caches.open('pwa-static');
cache.addAll(staticAssets);
});

self.addEventListener('fetch',event => {
const req = event.request;
event.respondWith(cacheFirst(req));  
});

async function cacheFirst(req)
{
  const cachedResponse = await cache.match(req);
  return cachedResponse || fetch(req);
}

