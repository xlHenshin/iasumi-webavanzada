// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

onAuthStateChanged(auth, (user)=>{
  const authStore = useAuthenticationStore()
  if (user) {
    const uid = user.uid;

    authStore.user = user
    console.log(authStore.user)
  }else{
    authStore.user = null;
    console.log(authStore.user)
  }
})

export {auth}
export {db}