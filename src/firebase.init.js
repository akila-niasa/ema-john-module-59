// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKZtEfLWKAiR4v-3nDceHACDErHL7Wrf0",
  authDomain: "ema-john-module-59-e4b7e.firebaseapp.com",
  projectId: "ema-john-module-59-e4b7e",
  storageBucket: "ema-john-module-59-e4b7e.appspot.com",
  messagingSenderId: "529605462808",
  appId: "1:529605462808:web:97408c3c62a93a44872c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth