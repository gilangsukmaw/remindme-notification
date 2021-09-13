// // Scripts for firebase and firebase messaging
// import { initializeApp } from 'firebase/app';
// import { getMessaging } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
// // import imageFile from './assets/';

// // Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: 'AIzaSyAkVIc33ccgC9PW7GEJJ9r8scHLxN-61k8',
//   authDomain: 'push-notification-3e399.firebaseapp.com',
//   projectId: 'push-notification-3e399',
//   storageBucket: 'push-notification-3e399.appspot.com',
//   messagingSenderId: '1097064622761',
//   appId: '1:1097064622761:web:4e1338d982e3605dac97b8',
// };

// const app = initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = getMessaging();

// onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
