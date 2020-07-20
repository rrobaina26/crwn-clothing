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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    console.log("Creating new user");
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const colRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((o) => {
    const oRef = colRef.doc();
    batch.set(oRef, o);
  });
  batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

 return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {});
};

export default firebase;
