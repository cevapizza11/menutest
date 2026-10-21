// Service Worker Firebase Cloud Messaging — Le Menu
// Ce fichier gère les notifications reçues quand l'app n'est PAS au premier plan
// (téléphone verrouillé, autre appli ouverte, etc.)

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCRZDRNtVF95yX7qYCvc__9NjGa41JTdMQ",
  authDomain: "menutest-f4629.firebaseapp.com",
  projectId: "menutest-f4629",
  storageBucket: "menutest-f4629.firebasestorage.app",
  messagingSenderId: "834088175472",
  appId: "1:834088175472:web:d45de5bc283c205608b1b5"
});

const messaging = firebase.messaging();

// Notification reçue alors que l'app est en arrière-plan / fermée
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '🍽️ Le Menu';
  const options = {
    body: payload.notification?.body || "Un serveur s'occupe de votre commande !",
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [300, 100, 300, 100, 300],
    tag: 'moule-smile-notif',
    requireInteraction: false
  };
  self.registration.showNotification(title, options);
});

// Clic sur la notification → ouvrir/focus l'app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/index.html');
    })
  );
});
