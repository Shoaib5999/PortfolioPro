// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq4aF_TEARJl9JOjYUcu3UruyZfxjoUoc",
  authDomain: "portfolio-5cb03.firebaseapp.com",
  projectId: "portfolio-5cb03",
  storageBucket: "portfolio-5cb03.firebasestorage.app",
  messagingSenderId: "483519860596",
  appId: "1:483519860596:web:49f7b89bcf942a69b42621",
  measurementId: "G-HMYCQ17CEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getFirestore(app);

export { database };
