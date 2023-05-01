// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_3lDC62_zep65Hhnrj_bCA8u0IKqBtBc",
  authDomain: "chef-hunter-client-side.firebaseapp.com",
  projectId: "chef-hunter-client-side",
  storageBucket: "chef-hunter-client-side.appspot.com",
  messagingSenderId: "302868679502",
  appId: "1:302868679502:web:952509231ab9c1550e2c1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
