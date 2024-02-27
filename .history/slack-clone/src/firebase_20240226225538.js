// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXhkBjsf-DFT46oC-CiEzq4H2T7KSRI9M",
  authDomain: "slack-clone-db50f.firebaseapp.com",
  projectId: "slack-clone-db50f",
  storageBucket: "slack-clone-db50f.appspot.com",
  messagingSenderId: "149107190372",
  appId: "1:149107190372:web:ece098da4ec63d0e380d71"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };