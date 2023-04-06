// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNUzkTdmKlrLqgCGsYzW5Omr1q28eLbV0",
  authDomain: "fir-demo-2dfdf.firebaseapp.com",
  projectId: "fir-demo-2dfdf",
  storageBucket: "fir-demo-2dfdf.appspot.com",
  messagingSenderId: "271402674663",
  appId: "1:271402674663:web:f60cf8cd303aace9b57542"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth =  firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users')
}

export const storage = firebase.storage()