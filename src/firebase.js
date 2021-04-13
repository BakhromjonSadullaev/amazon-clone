// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBmqrFjMXMk_HvIIrstOQPvkoQ9Gzlsepc",
  authDomain: "challenge-94f64.firebaseapp.com",
  databaseURL: "https://challenge-94f64.firebaseio.com",
  projectId: "challenge-94f64",
  storageBucket: "challenge-94f64.appspot.com",
  messagingSenderId: "586055338614",
  appId: "1:586055338614:web:3effa8c14345da905dad57",
  measurementId: "G-4J7PYW5RY5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
