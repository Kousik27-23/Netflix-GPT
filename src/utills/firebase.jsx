// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRDKBi76BTVo60QPC6Opabwe9FnIqT5to",
  authDomain: "netflix-gpt-9306d.firebaseapp.com",
  projectId: "netflix-gpt-9306d",
  storageBucket: "netflix-gpt-9306d.firebasestorage.app",
  messagingSenderId: "587627552342",
  appId: "1:587627552342:web:9ec5e5a08866f98e88e5f7",
  measurementId: "G-CFHQ9RPC3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);