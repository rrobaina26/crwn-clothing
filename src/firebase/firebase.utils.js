import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3HdbINcwI8EBgb3jFUnvHnzzGIcQ_OTo",
  authDomain: "crw-bd.firebaseapp.com",
  databaseURL: "https://crw-bd.firebaseio.com",
  projectId: "crw-bd",
  storageBucket: "crw-bd.appspot.com",
  messagingSenderId: "73108095759",
  appId: "1:73108095759:web:966a5ec2ac1aa01e3d747a",
  measurementId: "G-DCSGDENK7Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
