// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMxso_F0M3ssE1BkXPtm0N8k7jQVPruOo",
  authDomain: "contact-clone-3791d.firebaseapp.com",
  projectId: "contact-clone-3791d",
  storageBucket: "contact-clone-3791d.appspot.com",
  messagingSenderId: "258844179272",
  appId: "1:258844179272:web:f838e71d25a0103033117d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const storage = getStorage(app);
export const auth = getAuth(app);