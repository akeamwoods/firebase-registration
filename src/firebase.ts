import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { eventChannel } from "redux-saga";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();

export const login = (email: string, password: string) =>
  void auth
    .signInWithEmailAndPassword(email, password)
    .catch(function (error: any) {
      console.log(error);
    });

export const loginWithFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

export const logout = () => void auth.signOut();

export const subscribeToAuth = () =>
  eventChannel((emit) => {
    auth.onAuthStateChanged((user) => {
      emit(user ? { email: user.email, id: user.uid } : false);
    });
    return () => {
      console.log("destroy chan auth");
    };
  });
