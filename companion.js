(function () {
  'use strict'
  var workerScript = document.currentScript.dataset.serviceWorker
  
  if (workerScript && 'serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(`${workerScript}`)
    })
  }
})()
