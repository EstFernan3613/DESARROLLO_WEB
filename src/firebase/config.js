// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzPHbaq3k7YiZyxXIkMLEVtlYcvrLSVuQ",
  authDomain: "ejemplo-web-4eed6.firebaseapp.com",
  projectId: "ejemplo-web-4eed6",
  storageBucket: "ejemplo-web-4eed6.appspot.com",
  messagingSenderId: "704207665923",
  appId: "1:704207665923:web:31850406f71c06f9808736",
  measurementId: "G-QQ4CEK7S6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export { app, auth }