// // ==============firebase=================
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: 'AIzaSyAkVIc33ccgC9PW7GEJJ9r8scHLxN-61k8',
//   authDomain: 'push-notification-3e399.firebaseapp.com',
//   projectId: 'push-notification-3e399',
//   storageBucket: 'push-notification-3e399.appspot.com',
//   messagingSenderId: '1097064622761',
//   appId: '1:1097064622761:web:4e1338d982e3605dac97b8',
// };

// // eslint-disable-next-line no-unused-vars
// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging();

// export const getTheToken = (setTokenFound, setWebPush) => {
//   getToken(messaging, { vapidKey: process.env.REACT_APP_WEB_PUSH_CERTIFICATE })
//     .then((currentToken) => {
//       if (currentToken) {
//         // console.log(currentToken);
//         localStorage.setItem("Registration Token", currentToken);

//         // return setTokenFound(true), 
//         // setWebPush(currentToken);

//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//         return setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // catch error while creating client token
//     });
// };

// export const getMessage = (setMessage) => {
//   onMessage(messaging, (payload) => {
//     console.log('notif',payload);
//     console.log('notif2',messaging);

//     return setMessage({
//       title: payload.data.title,
//       body: payload.data.body,
//       suto: console.log(payload.data.body)
//     });
//     // ...
//   });
// };
// // ==========firebase end==============