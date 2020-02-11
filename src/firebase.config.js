import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqGVkKPZAwveLPg_UmOlS65_-fYNGKsdA",
  authDomain: "sthml-metall.firebaseapp.com",
  databaseURL: "https://sthml-metall.firebaseio.com",
  projectId: "sthml-metall",
  storageBucket: "sthml-metall.appspot.com",
  messagingSenderId: "20028199848",
  appId: "1:20028199848:web:d8dfd444339ee79b3a039d",
  measurementId: "G-0G5ZWPVP4Q"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.database();
export const db = baseDb;
