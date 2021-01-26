(function () {
  'use strict'
//   var workerScript = document.currentScript.dataset.serviceWorker
  
//   if (workerScript && 'serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//       navigator.serviceWorker.register(`${workerScript}`)
//     })
//   }
  
  if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
})()
