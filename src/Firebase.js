// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeTM9AKVMTeite8fB747Wh1Xp8JSQazPw",
  authDomain: "chat-app-c84e8.firebaseapp.com",
  projectId: "chat-app-c84e8",
  storageBucket: "chat-app-c84e8.appspot.com",
  messagingSenderId: "561110819017",
  appId: "1:561110819017:web:9015cde7224f2044286d18",
  measurementId: "G-CEYDE26GWX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage=getStorage(firebaseApp);
export { db, auth ,storage};