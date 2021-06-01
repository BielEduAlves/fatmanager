import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAqN-QR5PXdNgip0GPQ1-fb-0m5MNA5QpY",
  authDomain: "fatmanager-3afb8.firebaseapp.com",
  projectId: "fatmanager-3afb8",
  storageBucket: "fatmanager-3afb8.appspot.com",
  messagingSenderId: "948714233571",
  appId: "1:948714233571:web:9f521cf70cd2c6b1896fd6",
  measurementId: "G-ZLJB7W3M8P"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}