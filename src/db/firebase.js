import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6b_uzysiPTbCea--WGN6Nc38L5nW58ok',
  authDomain: 'clone-v2-e4ddf.firebaseapp.com',
  projectId: 'clone-v2-e4ddf',
  storageBucket: 'clone-v2-e4ddf.appspot.com',
  messagingSenderId: '399815086589',
  appId: '1:399815086589:web:16dbcb6d9941938a5f4994',
  measurementId: 'G-HMSRTPN3BT',
};

// Initialize Cloud Firestore through Firebase
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
