import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA609ot9wIICFrPnKJ0La84SxkawJTdi8",
  authDomain: "discord-clone-7e0a6.firebaseapp.com",
  projectId: "discord-clone-7e0a6",
  storageBucket: "discord-clone-7e0a6.appspot.com",
  messagingSenderId: "161699741480",
  appId: "1:161699741480:web:95388abf9d48fc32b71a1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
