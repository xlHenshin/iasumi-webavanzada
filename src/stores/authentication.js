import { defineStore } from "pinia";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
      user:null
  }),
  actions: {
      signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged User: ', user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
          });
      },
      logOut(){
        signOut(auth)
          .then(()=>{
            console.log('Usuario Logged Out')
          }).catch((error)=>{
            alert(error)
          })
      },
      async newUserAwait(email, password){
        try{
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          const isAdmin = false;
          const userData = {
            email: email,
            password: password, 
            admin: isAdmin
          }
            
          console.log('DATA USUARIO: ', userData)
            
          await addDoc(collection(db, "users"), {userData});
          console.log('Usuario creado: ', userCredential.user)
        }catch(error){
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        }
      },
  },
});
