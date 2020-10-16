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

export const register = (email: string, password: string) =>
  void auth
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error: any) {
      console.log(error);
    });

export const login = (email: string, password: string) =>
  void auth
    .signInWithEmailAndPassword(email, password)
    .catch(function (error: any) {
      console.log(error);
    });

export const loginWithFacebook = () =>
  // firebase
  void auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch(function (error: any) {
      console.log(error);
    });

export const loginWithGoogle = () =>
  // firebase
  void auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch(function (error: any) {
      console.log(error);
    });

export const resetPassword = (email: string) =>
  void auth.sendPasswordResetEmail(email).catch(function (error: any) {
    console.log(error);
  });

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
