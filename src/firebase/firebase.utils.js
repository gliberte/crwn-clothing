import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKxIgtgCULCagY4rjmkzBFdCvsv1biHdI",
  authDomain: "shop-db-2167a.firebaseapp.com",
  databaseURL: "https://shop-db-2167a.firebaseio.com",
  projectId: "shop-db-2167a",
  storageBucket: "shop-db-2167a.appspot.com",
  messagingSenderId: "875210198225",
  appId: "1:875210198225:web:beb6b06623dd1fd9de49f0",
  measurementId: "G-HY12LR1BCL"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user',error.message)
    }
    
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
