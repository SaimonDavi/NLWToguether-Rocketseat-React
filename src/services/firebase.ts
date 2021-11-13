//import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import 'firebase/database';
import 'firebase/auth';
// import {getAuth} from 'firebase/auth';
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGZiRqxSqBI5f3LLOUOCUByxMiIwezTyM",
  authDomain: "nlwtoguether-rocketseat-react.firebaseapp.com",
  databaseURL: "https://nlwtoguether-rocketseat-react-default-rtdb.firebaseio.com",
  projectId: "nlwtoguether-rocketseat-react",
  storageBucket: "nlwtoguether-rocketseat-react.appspot.com",
  messagingSenderId: "87751147494",
  appId: "1:87751147494:web:7e7a24aa64fddcb5212027"
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
};

//firebase.initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);

//const auth = firebase.auth();
//const database = firebase.database();
const database = getDatabase();
const auth = getAuth();

export { firebase, auth, database };