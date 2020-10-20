import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { eventChannel } from "redux-saga";
import { actions } from "./store/actions";
import { v4 as uuidv4 } from "uuid";
import { store } from "./store";
import { UserProfile } from "./store/types";

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
const db = firebase.firestore();

export const register = (email: string, password: string) =>
  void auth
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error: any) {
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Error",
          message: error.message,
          duration: undefined,
          dismissible: true,
        })
      );
    });

export const login = (email: string, password: string) =>
  void auth
    .signInWithEmailAndPassword(email, password)
    .catch(function (error: any) {
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Error",
          message: error.message,
          duration: undefined,
          dismissible: true,
        })
      );
    });

export const loginWithFacebook = () =>
  void auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {
      var user = result.user;
      if(user){
        const id = user.uid;
        const profile = {name:user.displayName!,img:user.photoURL!}
        db.collection('users').doc(id).get().then(doc => {
          if (!doc.exists) db.collection("users").doc(id).set(profile)
        })
      }
    })
    .catch(function (error: any) {
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Error",
          message: error.message,
          duration: undefined,
          dismissible: true,
        })
      );
    });

export const loginWithGoogle = () =>
  // firebase
  void auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch(function (error: any) {
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Error",
          message: error.message,
          duration: undefined,
          dismissible: true,
        })
      );
    });

export const resetPassword = (email: string) =>
  void auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Password reset email sent.
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Password Reset",
          message: `We've sent a password reset email to ${email}. Please check your inbox.`,
          duration: undefined,
          dismissible: true,
        })
      );
    })
    .catch(function (error: any) {
      // error
      store.dispatch(
        actions.alertCreated({
          id: uuidv4(),
          title: "Error",
          message: error.message,
          duration: undefined,
          dismissible: true,
        })
      );
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

export const getUserInfo = async (id: string) => {
  const userRef = db.collection("users").doc(id);
  const doc = await userRef.get();
  if (!doc.exists) {
    store.dispatch(actions.showProfileCreationHandler());
  } else {
    console.log("Document data:", doc.data());
    const data = doc.data();
    if (data) {
      store.dispatch(actions.userProfileFetched(data as UserProfile));
    }
  }
};
