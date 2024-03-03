import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword     } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLOaFau6BS3XKIWd-52AlDTfRgYHOtg1k",
    authDomain: "login-page-sara.firebaseapp.com",
    projectId: "login-page-sara",
    storageBucket: "login-page-sara.appspot.com",
    messagingSenderId: "826504143060",
    appId: "1:826504143060:web:9209913663aa17791bdb41",
    measurementId: "G-LXVLYPYSZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("emailInput");
const password = document.getElementById("passInput");
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener("click",() => {
  
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Success register")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})

signInBtn.addEventListener("click", ()=>{
    console.log("login")
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Success Login")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  });
})