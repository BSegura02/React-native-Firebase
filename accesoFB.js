// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtqnw9qpNL5npvtv08N_Y2y8Y_1a394zE",
  authDomain: "fir-fe441.firebaseapp.com",
  projectId: "fir-fe441",
  storageBucket: "fir-fe441.appspot.com",
  messagingSenderId: "514733034264",
  appId: "1:514733034264:web:d7da4027e83eb9acb36c6d"
};

// if (!accesoFB.apps.length) {
//     accesoFB.initializeApp(firebaseConfig);
//   }
  
//   const db = accesoFB.firestore();
//   const auth = accesoFB.auth();
  
//   export { accesoFB, db, auth };

// // Initialize Firebase
const appFB = initializeApp(firebaseConfig);

export default appFB;