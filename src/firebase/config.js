import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2kQSyrOrs1eSBybG_xAnkgmWA8kNBzY0",
  authDomain: "ejemploproyecto-3a34c.firebaseapp.com",
  projectId: "ejemploproyecto-3a34c",
  storageBucket: "ejemploproyecto-3a34c.appspot.com",
  messagingSenderId: "228112230842",
  appId: "1:228112230842:web:93ea80e3a1903feec2d583"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const firebaseStorage = getStorage(firebaseApp);

export { auth, firebaseApp, firebaseStorage };