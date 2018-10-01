if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then( reg => {
    console.log('Service Worker Reg Success!: ' + reg.scope);
  })
  .catch( err => {
    console.log('Registration Failed, ' + err);
  })
}
