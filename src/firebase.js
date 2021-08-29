import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAsPBcHHvRBQihslPJZdCnRiwuKnenywkQ",
    authDomain: "alles-179b0.firebaseapp.com",
    databaseURL: "https://alles-179b0-default-rtdb.firebaseio.com",
    projectId: "alles-179b0",
    storageBucket: "alles-179b0.appspot.com",
    messagingSenderId: "288298780579",
    appId: "1:288298780579:web:705950f91fb501aa003c16"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;