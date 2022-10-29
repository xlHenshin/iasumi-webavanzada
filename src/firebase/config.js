// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPrwev3sW2HZFsZ6wJkLLPwoTcMuXTgCw",
  authDomain: "iasumi-webpage.firebaseapp.com",
  projectId: "iasumi-webpage",
  storageBucket: "iasumi-webpage.appspot.com",
  messagingSenderId: "834095108180",
  appId: "1:834095108180:web:fdf71d51e0fa33df2d9dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}