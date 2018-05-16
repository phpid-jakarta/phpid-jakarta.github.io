/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js'
)

const CACHE_NAME = 'phpidjkt-pwa'

workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '20180516v1'
  },
  {
    url: '/assets/js/offcanvas.js',
    revision: '20180516v1'
  },
  {
    url: '/assets/js/slider.js',
    revision: '20180516v1'
  },
  {
    url: '/assets/js/header.js',
    revision: '20180516v1'
  },
  {
    url: '/assets/images/phpid-jakarta.png',
    revision: '20180516v1'
  }
])

function generateCacheableConfig (name, maxEntry, maxDay) {
  return {
    cacheName: CACHE_NAME + name,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: maxEntry,
        maxAgeSeconds: maxDay * 24 * 60 * 60
      })
    ]
  }
}

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|js|css)$/,
  workbox.strategies.cacheFirst(generateCacheableConfig('__staticResources', 50, 30)),
);

const thirdPartyRoutes = [
  {
    regexes: [
      '^https://fonts.(?:googleapis|gstatic).com/(.*)',
      '^https://storage.(?:googleapis|gstatic).com/(.*)',
      '^https://cdnjs.cloudflare.com/(.*)',
      '^https://code.ionicframework.com/(.*)'
    ],
    cache: generateCacheableConfig('__thirdparty', 20, 7)
  }
]

thirdPartyRoutes.map(function (item) {
  item.regexes.map(function (regStr) {
    workbox.routing.registerRoute(
      new RegExp(regStr),
      workbox.strategies.cacheFirst(item.cache)
    )
  })
})
