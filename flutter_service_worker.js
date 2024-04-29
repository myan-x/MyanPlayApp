'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin.json": "95cec4c500dae37e30242958742cafd7",
"assets/images/ss1.jpg": "401abe129f9ae1a2d9d6682772964e48",
"assets/images/ss2.jpg": "3e998231a5a2220ca21b2508ecbaca93",
"assets/images/logo.png": "ba24e0796f964c498c2522d5f19db32d",
"assets/images/ss3.jpg": "e6d652bcda2392241db80710e0f67f88",
"assets/AssetManifest.bin": "7d9f2d5853d9d55ac8733de5a44330b3",
"assets/AssetManifest.json": "7f3243fcbdbf3b59d1736f50092cef54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9b89054f47852048bbbed6db21de09a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "927d8dabeb8e81be341cf3866b698af9",
"manifest.json": "c51f821e9d54301a878074be62975de7",
"favicon.png": "826487e34c6489c10805bfcfbe300b11",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"index.html": "8186925db4c4465c3d66f5a15583bf49",
"/": "8186925db4c4465c3d66f5a15583bf49",
"main.dart.js": "5cf95a351524a337f686f0a1218d318c",
".git/COMMIT_EDITMSG": "36b93c6618a5a5f216ae781c4fc06381",
".git/config": "0af0812b049c4e2db029c1fe863e6d6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "2e377cfe2bec90f72003f4f41d17ac3f",
".git/logs/refs/remotes/origin/main": "7be910ec9f804a04ed6dee652fc0fb61",
".git/logs/refs/heads/main": "d5e5ed4e95b4c8ccff801559aaead40b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "a9050960d52bfe2f090d75dc156ec2dd",
".git/ORIG_HEAD": "e686dc1a30ecfe892430abfe23914e18",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "e39d6e127baf25e2bdefa76d649070db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/refs/remotes/origin/main": "ddee222bf4eb138bbe1b0b11eb815a09",
".git/refs/tags/v.1.0": "8879a2b41d7576c27defa0457fb07a69",
".git/refs/heads/main": "ddee222bf4eb138bbe1b0b11eb815a09",
".git/objects/8e/3298cc37bb22c97e7cc6925262b94c40e882c1": "bcee05b7e0cb9279ef80ffbf3537e3c1",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/22/4e92cb4fb4e9815fc3cc8baddcc7779acdb52d": "49e29738b010d1b2b29339b6baa61cf5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/32/fd4a82210c9c3b7b113e794910ec386833c837": "73087805eaeefc0865c9b1d0245cf8c1",
".git/objects/0a/831927ec48d11438325fe378c134d9a61637ad": "e95699b102845b8832240e3112c9e85f",
".git/objects/b3/9fa1b21d42f72b4a44f01a3e9bf4308362e54c": "96fa5e1c220eae35cf91e8fc638302c5",
".git/objects/81/206c4bf2c67b14b11189f0b5ad0b31f7768ac2": "566d750a1e7a3195a3f505f2cdaef2f6",
".git/objects/81/6ecf4a6ba4652e4eefd07f265b4319aeba8183": "c89ff269a3b91157e3d62a707da870f1",
".git/objects/3b/f8c5f4644551898e9b2f327361c945ca1d2a39": "7c61cfdc0069d4ef14bc92c67df422c2",
".git/objects/e3/536e29bb0602d359778d9a1adc6e455a8a5beb": "4a1fdd2a4578f0e7a68e39162af1c46a",
".git/objects/84/674db36c24fb342a8f30648be6e21d13bd4ba6": "5a0c2a6f6b2991db5b5e407512187df1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/7c/301f4a4a8978f3739cb4be8c029a5396449edd": "ba7aec226718cf884fc508255b409850",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/47/0d30d835345f2177a60f256be55989ff5091b7": "1ed6629bbdc7ef87eeba963d9a44f4a7",
".git/objects/47/546248520cfdb211e8908042f61cc0bfa59f20": "29c858731d8a853f36c6e8ff6f60c656",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ca/78739813da6e0df6b3e17f949379b41526f650": "729e6690e0efbbbcc31e4f543b312bfa",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/35/33b6756e6d1f1f83bb97ef09431553a8f44216": "ee5fc591cae229c192365685231c716c",
".git/objects/35/d23c6e57eef4cb4fb34c886d64145827be9942": "c23bba99d9e7ade1e5f53549d9cb5fc8",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/d230548f91cce6f5943e7a6def1680c43db07f": "82c36ad6be4ef326796115ae3a9cf13b",
".git/objects/27/5f3efaff20165f763a53323536764b64db0fa6": "d92371ace5fad62330b5a578910fdcae",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/b5/5e3bafc5a8d1091ffeb6211bac6dbee0155265": "6b8f4c747f14d1996a6b118bb206aca2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/65/119c3c42aa66f43feec356ed40bbc08c0d55b9": "d02c316988a130fcbd048563bcd3a515",
".git/objects/8a/5a1f03b25cd6c7b3b871b9a0ad8acf35aa007b": "417cfbc1e9e8e0ed09b6f26f1ffdca9f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/c3/19b5b8e24c6c7c0bee9a638aa23b9689e83403": "0a3888c43c9ced4d94c79e9ba088149b",
".git/objects/b0/16383b586109b73b86773050b97ca7df443085": "66ce7bdd76996887b6f4f91b13b48423",
".git/objects/df/e1f73696834f35fe4aa7ac8095e1ace0e580e6": "1eb549492165d478b3233ab1e49fa319",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/dc/fac2eaa1a7924e5ae6efcb093a656f5fb34175": "2ea0f1fd90728def488adf6bd5a23465",
".git/objects/ad/df28c2321e69180ea8f1a9048903e8860aaf85": "47ae5dc2fb7b1c1c9c02712a69df88b1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/6323150c4dd46cc7fc4fb55453ba3fb6197312": "1f3348dcec98441f8aeabf3b50658a78",
".git/objects/70/3d996c9bf1597a4cd1197e4d7f3056ab9c1f86": "de6bd6eecfed1cd7931efd0f2d92721a",
".git/objects/70/50ecf3e55a919ac5c82c4972d0d671f003014b": "ac3190b09f305524175c4dfbdfe9f6a0",
".git/objects/b6/84cb130fdbe9ee426fe354640540d2d28f75b5": "6f6d15c2a692a65694f2b8228760183e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/73/98c54bc9c0cb80155004dd16fb6ab6360cec5d": "6477dbb69a9e992075313041938639f0",
".git/objects/5f/ac0de949afd28bc2c6e89450b6e7100d24abc1": "cc0d5a77d8126ab73042807cc3e761b8",
".git/objects/a8/1e6d0e9a49a1b2bd122fd23574b0fe6c8dbe52": "41cd88d4b304746b4bfb6e672c575d53",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/7e/102caaee2373b7833b750bdc5a4cbba7888dd3": "17fa98570b3c8ea4040fdda9a958d699",
".git/objects/11/0d03705f47f61fba7cde6909c9d0ec841b9525": "b6aa870c89db8941f7c2c4e1e780650a",
".git/objects/6a/4d760e79d94d5ecbf9f743c2599c5e36db78b0": "1baedadb81bd85aa325ba0a783580f44",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/e2/afd8f626ca9b5622830ad347380210ee2e0e35": "3f5a8d3a0fc393142b20acee4e29c650",
".git/objects/ab/c4681730cd5a907bfe44b043f1337f84246b35": "fae4a168440f9b9b8207013462ba170d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/23/aa66ef7f4154a3f3995e7406287bcbc32e7006": "c180a0efff48e850444ed454d56c783e",
".git/objects/37/a80e7bd3c8217542b3f86e59ea1775245cdc5b": "f0837f993843b529b629dbf06d73add6",
".git/objects/f3/0a8300bae895b38ea978a58f681c7d103a2349": "81dd26f34ccdb793cb692b9ff720e106",
".git/objects/1c/b391615602e073e3a3c39352e4efb4615b3ee8": "18b49d310fe8b7dc7f51eae988f5dfc7",
".git/objects/5c/dea2323e5401e4f270ffcfb361152e6147ff1c": "10032a3cad099ec01d946a540e260601",
".git/objects/7b/9d9d4fc15fb443c808b1bf7d1f333332ab3346": "37d15ea07c8167f5fc8f28bfdf2af481",
".git/objects/6e/e866d0847c9f0e144ca77fdc20a042a7fb5f4f": "670a5ed26862a1be7c79529a44df6cd4",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/208f5def1fac4d77a122e7e907af835049a69d": "fc25fab6dc820d3c50c8caf1c7d150ed",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "d6441aabeb06dea59674ef5ce86bb9de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
