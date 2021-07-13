import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApNEsLH-UntXRn4fp5QXh02PR1q8JwhNE",
  authDomain: "dubla2.firebaseapp.com",
  projectId: "dubla2",
  storageBucket: "dubla2.appspot.com",
  messagingSenderId: "423132354759",
  appId: "1:423132354759:web:9d95be8a0fecc9ef3786e2",
  measurementId: "G-8K1JG9DLKX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth};