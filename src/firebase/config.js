import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvaxaFKOy3MT227YtJfT-GjUNjR8CVSsc",
  authDomain: "challengefinal-a41a7.firebaseapp.com",
  projectId: "challengefinal-a41a7",
  storageBucket: "challengefinal-a41a7.appspot.com",
  messagingSenderId: "479914421455",
  appId: "1:479914421455:web:bafaa548be13c11dfb5bba",
  measurementId: "G-GT5G8GSFNG"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, firebaseApp, firebaseStorage, db };