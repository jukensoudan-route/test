const CACHE_VERSION='iburi-family-v20';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE_VERSION).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith((async()=>{
    try{
      const fresh=await fetch(event.request,{cache:'no-store'});
      const cache=await caches.open(CACHE_VERSION);
      cache.put(event.request,fresh.clone());
      return fresh;
    }catch(e){
      const cached=await caches.match(event.request);
      if(cached)return cached;
      throw e;
    }
  })());
});
