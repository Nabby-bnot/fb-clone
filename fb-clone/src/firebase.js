// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyA1pmlZyVVZmD_aqzZzX_XeDKY4PFqLn-Y",
    authDomain: "fb-clone-d6fe1.firebaseapp.com",
    databaseURL: "https://fb-clone-d6fe1.firebaseio.com",
    projectId: "fb-clone-d6fe1",
    storageBucket: "fb-clone-d6fe1.appspot.com",
    messagingSenderId: "845147262003",
    appId: "1:845147262003:web:67cfa9fcccd1d908a32746",
    measurementId: "G-BW4DVEWXFC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;