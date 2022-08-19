import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8tlFEVJ21TFZ6Du5_4MK0p-2aJEbimLo",
  authDomain: "think-piece-924bc.firebaseapp.com",
  projectId: "think-piece-924bc",
  storageBucket: "think-piece-924bc.appspot.com",
  messagingSenderId: "416642611920",
  appId: "1:416642611920:web:4ebee606960f56f24bbcd5",
  measurementId: "G-K1PZ8GZJXZ",
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
window.firebase = firebase;
export default firebase;
