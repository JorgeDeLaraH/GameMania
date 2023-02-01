const STATIC_CACHE="static";
const APP_SHELL=[
    "/",
    "index.html",
    "./assets/bayo.png",
    "./assets/kirbiavi.png",
    "./assets/logo.png",
    "./assets/poke.png",
    "./assets/port.png",
    "./assets/portada.jpg",
    "./assets/splatoon.png",
    "./css/style.css",
    "./images/gears.jpg",
    "./images/hal.jpg",
    "./images/halo.jpg",
    "./images/logooo.ico",
    "./images/logooo.jpg",
    "./images/lplay.png",
    "./images/nint.jfif",
    "./images/Nintendo.png",
    "./images/p.jpg",
    "./images/pc.jpg",
    "./images/titan.jpg",
    "./images/Windows.png",
    "./images/xbox - Copy.ico",
    "./images/xbox.png",
    "./images/xboxf.jpg",
    "./img/epic.jpg",
    "./img/palanca-de-mando.png",
    "./img/sft.jpeg",
    "./img/steam.jpg",
    "./js/function.js",
    "./js/main.js",
    "./js/script1.js",
    "./pages/xbox.html",
    "./styles/style.css",
    "./styles/style1.css",
    "./chorizon.jpg",
    "./gordoswar.jpg",
    "./indexPS.html",
    "./logo.png",
    "./mk11.mp4",
    "./mk11p.JPG",
    "./mk11p.png",
    "./nintendo.html",
    "./pc.html",
    "./promo.jpg",
    "./promo1.png",
    "./ps.png",
    "./sony.png",
    "./style.css"
];
self.addEventListener("install",(e)=>{
    const cacheStatic=caches
    .open(STATIC_CACHE)
    .then((cache)=> cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e)=>{
    console.log("fectch!", e.request);
    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    );
});