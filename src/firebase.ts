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
const storage = firebase.storage();

export const register = (email: string, password: string) =>
  void auth
    .createUserWithEmailAndPassword(email, password).then(() => {
      const id = auth.currentUser?.uid;
      if (id) getUserInfo(id);
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

export const login = (email: string, password: string) =>
  void auth
    .signInWithEmailAndPassword(email, password).then(() => {
      const id = auth.currentUser?.uid;
      if (id) getUserInfo(id);
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

export const loginWithFacebook = () =>
  void auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {
      var user = result.user;
      if(user){
        const id = user.uid;
        const profile = {name:user.displayName!,img:user.photoURL!}
        db.collection('users').doc(id).get().then(doc => {
          if (!doc.exists) {
            db.collection("users").doc(id).set(profile);
            store.dispatch(actions.userProfileFetched(profile as UserProfile));
          } else {
            getUserInfo(id);
          }
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
  void auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      var user = result.user;
      if(user){
        const id = user.uid;
        const profile = {name:user.displayName!,img:user.photoURL!}
        db.collection('users').doc(id).get().then(doc => {
          if (!doc.exists) {
            db.collection("users").doc(id).set(profile);
            store.dispatch(actions.userProfileFetched(profile as UserProfile));
          } else {
            getUserInfo(id);
          }
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
  const state = store.getState();
  const profile = state.userProfile;
  const userRef = db.collection("users").doc(id);
  const doc = await userRef.get();
  if (!doc.exists && !profile) {
    store.dispatch(actions.showProfileCreationHandler());
  } else {
    const data = doc.data();
    if (data) {
      store.dispatch(actions.userProfileFetched(data as UserProfile));
    }
  }
};


export const createProfile = async (id:string, name:string, dateOfBirth:string, file:File ) => {
  if(file){
    storage.ref('images').child(id).put(file).then(x => {
      x.ref.getDownloadURL().then(url => {
        db.collection("users").doc(id).set({name, dateOfBirth, img:url});
        store.dispatch(actions.userProfileFetched({name, dateOfBirth, img:url} as UserProfile))
      })
    })
  } else {
    db.collection("users").doc(id).set({name, dateOfBirth});
    store.dispatch(actions.userProfileFetched({name, dateOfBirth} as UserProfile));
  }
};



