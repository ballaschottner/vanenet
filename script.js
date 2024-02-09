if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  // Function to update the content based on connectivity
  function updateContentBasedOnConnectivity() {
    const heading = document.querySelector('.glow');
    if (navigator.onLine) {
      // User is online
      heading.textContent = 'VAN.';
    } else {
      // User is offline
      heading.textContent = 'NINCS.';
    }
  }

  // Listen for online and offline events
  window.addEventListener('load', updateContentBasedOnConnectivity);
  window.addEventListener('online', updateContentBasedOnConnectivity);
  window.addEventListener('offline', updateContentBasedOnConnectivity);
