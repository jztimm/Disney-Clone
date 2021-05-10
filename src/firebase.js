import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQESvjT9fFysEOpk0pP7OUn0mj3B5QFio",
  authDomain: "disney-plus-9c3d6.firebaseapp.com",
  projectId: "disney-plus-9c3d6",
  storageBucket: "disney-plus-9c3d6.appspot.com",
  messagingSenderId: "418985806392",
  appId: "1:418985806392:web:256ac162d16ff0456ef4cd",
  measurementId: "G-4KXPY124DX"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseapp.storage();

export { auth, provider, storage };
export default db;