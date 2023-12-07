// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBncr4roXY-aDz13a0Z_4JaLpeA9H8eO7k",
  authDomain: "test-8dd03.firebaseapp.com",
  projectId: "test-8dd03",
  storageBucket: "test-8dd03.appspot.com",
  messagingSenderId: "1035815566487",
  appId: "1:1035815566487:web:6b1b6f4af3abc3fabd3dd2",
  measurementId: "G-3JCTJQN8GD"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };